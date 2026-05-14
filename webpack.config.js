import { execSync } from "child_process";
import CopyPlugin from "copy-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gitCommit =
  process.env.GIT_COMMIT ?? execSync("git rev-parse HEAD").toString().trim();

export default async (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/client/Main.ts",
    output: {
      publicPath: "/",
      filename: "js/[name].[contenthash].js",
      path: path.resolve(__dirname, "static"),
      clean: isProduction,
    },
    module: {
      rules: [
        {
          test: /\.bin$/,
          type: "asset/resource",
          generator: {
            filename: "binary/[name].[contenthash][ext]",
          },
        },
        {
          test: /\.txt$/,
          type: "asset/source",
        },
        {
          test: /\.md$/,
          type: "asset/resource",
          generator: {
            filename: "text/[name].[contenthash][ext]",
          },
        },
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["tailwindcss", "autoprefixer"],
                },
              },
            },
          ],
        },
        {
          test: /\.(webp|png|jpe?g|gif)$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[name].[contenthash][ext]",
          },
        },
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
        {
          test: /\.svg$/,
          type: "asset/resource",
          generator: {
            filename: "images/[name].[contenthash][ext]",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|xml)$/,
          type: "asset/resource",
          generator: {
            filename: "fonts/[name].[contenthash][ext]",
          },
        },
        {
          test: /\.(mp3|wav|ogg)$/i,
          type: "asset/resource",
          generator: {
            filename: "sounds/[name].[contenthash][ext]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "protobufjs/minimal": path.resolve(
          __dirname,
          "node_modules/protobufjs/minimal.js",
        ),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/client/index.html",
        filename: "index.html",
        minify: isProduction
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
      // Page 404 personnalisée (de votre version)
      new HtmlWebpackPlugin({
        template: "./src/client/404.html",
        filename: "404.html",
        inject: false,
        minify: isProduction
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
      new webpack.DefinePlugin({
        "process.env.WEBSOCKET_URL": JSON.stringify(
          isProduction ? "" : "localhost:3000",
        ),
        "process.env.GAME_ENV": JSON.stringify(isProduction ? "prod" : "dev"),
        "process.env.GIT_COMMIT": JSON.stringify(gitCommit),
        "process.env.STRIPE_PUBLISHABLE_KEY": JSON.stringify(
          process.env.STRIPE_PUBLISHABLE_KEY,
        ),
        "process.env.API_DOMAIN": JSON.stringify(process.env.API_DOMAIN),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "resources"),
            to: path.resolve(__dirname, "static"),
            noErrorOnMissing: true,
          },
          {
            from: path.resolve(__dirname, "proprietary"),
            to: path.resolve(__dirname, "static"),
            noErrorOnMissing: true,
          },
          // Copie des pages HTML de langues (de votre version)
          {
            from: path.resolve(__dirname, "static/*/index.html"),
            to: ({ absoluteFilename }) => {
              const match = absoluteFilename.match(/static[\\\/]([^\\\/]+)[\\\/]index\.html$/);
              return match ? `${match[1]}/index.html` : '[name][ext]';
            },
            noErrorOnMissing: true,
          },
        ],
        options: { concurrency: 100 },
      }),
      new ESLintPlugin({
        context: __dirname,
      }),
    ],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    devServer: isProduction
      ? {}
      : {
          devMiddleware: { writeToDisk: true },
          static: {
            directory: path.join(__dirname, "static"),
          },
          allowedHosts: [
            'localhost',
            '127.0.0.1'
          ],
          // Middleware pour gérer les trailing slashes (de votre version)
          setupMiddlewares: (middlewares, devServer) => {
            devServer.app.use((req, res, next) => {
              if (req.path !== '/' && req.path.endsWith('/')) {
                const newPath = req.path.slice(0, -1);
                const queryString = req.url.split('?')[1];
                const newUrl = queryString ? `${newPath}?${queryString}` : newPath;
                res.redirect(301, newPath);
              } else {
                next();
              }
            });
            return middlewares;
          },
          // Configuration multilingue avec 404 (fusion des deux versions)
          historyApiFallback: {
            rewrites: [
              // Routes pour les langues
              { from: /^\/fr$/, to: '/fr/index.html' },
              { from: /^\/de$/, to: '/de/index.html' },
              { from: /^\/es$/, to: '/es/index.html' },
              { from: /^\/it$/, to: '/it/index.html' },
              { from: /^\/pt$/, to: '/pt/index.html' },
              { from: /^\/ru$/, to: '/ru/index.html' },
              { from: /^\/pt-br$/, to: '/pt-br/index.html' },
              { from: /^\/nl$/, to: '/nl/index.html' },
              { from: /^\/pl$/, to: '/pl/index.html' },
              { from: /^\/tr$/, to: '/tr/index.html' },
              { from: /^\/ko$/, to: '/ko/index.html' },
              { from: /^\/ja$/, to: '/ja/index.html' },
              // Routes pour les langues avec join
              { from: /^\/fr\/join\/.+$/, to: '/fr/index.html' },
              { from: /^\/de\/join\/.+$/, to: '/de/index.html' },
              { from: /^\/es\/join\/.+$/, to: '/es/index.html' },
              { from: /^\/it\/join\/.+$/, to: '/it/index.html' },
              { from: /^\/pt\/join\/.+$/, to: '/pt/index.html' },
              { from: /^\/ru\/join\/.+$/, to: '/ru/index.html' },
              { from: /^\/pt-br\/join\/.+$/, to: '/pt-br/index.html' },
              { from: /^\/nl\/join\/.+$/, to: '/nl/index.html' },
              { from: /^\/pl\/join\/.+$/, to: '/pl/index.html' },
              { from: /^\/tr\/join\/.+$/, to: '/tr/index.html' },
              { from: /^\/ko\/join\/.+$/, to: '/ko/index.html' },
              { from: /^\/ja\/join\/.+$/, to: '/ja/index.html' },
              { from: /^\/zh\/join\/.+$/, to: '/zh/index.html' },
              // Route join à la racine
              { from: /^\/join\/.+$/, to: '/index.html' },
              // Pages statiques valides
              { from: /^\/(privacy-policy|terms-of-service|news)\.html$/, to: '/[1].html' },
              // Route par défaut - tout le reste va vers 404
              { from: /.*/, to: '/404.html' }
            ]
          },
          compress: true,
          port: 9000,
          proxy: [
            // WebSocket proxies
            {
              context: ["/socket"],
              target: "ws://localhost:3000",
              ws: true,
              changeOrigin: true,
              logLevel: "debug",
            },
            // Worker WebSocket proxies
            {
              context: ["/w0"],
              target: "ws://localhost:3001",
              ws: true,
              secure: false,
              changeOrigin: true,
              logLevel: "debug",
            },
            {
              context: ["/w1"],
              target: "ws://localhost:3002",
              ws: true,
              secure: false,
              changeOrigin: true,
              logLevel: "debug",
            },
            {
              context: ["/w2"],
              target: "ws://localhost:3003",
              ws: true,
              secure: false,
              changeOrigin: true,
              logLevel: "debug",
            },
            // Worker proxies for HTTP requests
            {
              context: ["/w0"],
              target: "http://localhost:3001",
              pathRewrite: { "^/w0": "" },
              secure: false,
              changeOrigin: true,
              logLevel: "debug",
            },
            {
              context: ["/w1"],
              target: "http://localhost:3002",
              pathRewrite: { "^/w1": "" },
              secure: false,
              changeOrigin: true,
              logLevel: "debug",
            },
            {
              context: ["/w2"],
              target: "http://localhost:3003",
              pathRewrite: { "^/w2": "" },
              secure: false,
              changeOrigin: true,
              logLevel: "debug",
            },
            // Original API endpoints
            {
              context: [
                "/api/env",
                "/api/game",
                "/api/public_lobbies",
                "/api/join_game",
                "/api/start_game",
                "/api/create_game",
                "/api/archive_singleplayer_game",
                "/api/auth/callback",
                "/api/auth/discord",
                "/api/kick_player",
              ],
              target: "http://localhost:3000",
              secure: false,
              changeOrigin: true,
            },
          ],
        },
  };
};