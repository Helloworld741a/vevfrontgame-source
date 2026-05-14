const fs = require('fs');
const path = require('path');

// Configuration des langues supportées
const LANGUAGES = {
  'en': { name: 'English', nativeName: 'English', default: true },
  'fr': { name: 'French', nativeName: 'Français' },
  'de': { name: 'German', nativeName: 'Deutsch' },
  'es': { name: 'Spanish', nativeName: 'Español' },
  'it': { name: 'Italian', nativeName: 'Italiano' },
  'pt': { name: 'Portuguese', nativeName: 'Português' },
  'ru': { name: 'Russian', nativeName: 'Русский' },
  'pt-br': { name: 'Brazilian Portuguese', nativeName: 'Português (Brasil)' },
  'nl': { name: 'Dutch', nativeName: 'Nederlands' },
  'pl': { name: 'Polish', nativeName: 'Polski' },
  'tr': { name: 'Turkish', nativeName: 'Türkçe' },
  'ko': { name: 'Korean', nativeName: '한국어' },
  'ja': { name: 'Japanese', nativeName: '日本語' },
  'zh': { name: 'Chinese', nativeName: '中文（简体）' }
};

// Traductions des éléments SEO
const SEO_TRANSLATIONS = {
  'en': {
    title: 'Vevfrontgame - Strategy Game | Vevfrontgame Multiplayer Battle Arena',
    description: 'Vevfrontgame is the ultimate strategic multiplayer battle arena. Join Vevfrontgame battles, create lobbies, and dominate in this free-to-play strategy game. Play Vevfrontgame now!',
    heroTitle: 'Welcome to Vevfrontgame',
    heroSubtitle: 'Strategic Multiplayer Battle Arena',
    heroDescription: 'Command armies, forge alliances, and dominate the battlefield in Vevfrontgame - the ultimate free-to-play strategy game.'
  },
  'fr': {
    title: 'Vevfrontgame - Jeu de Stratégie | Arène de Bataille Multijoueur Vevfrontgame',
    description: 'Vevfrontgame est l\'arène de bataille multijoueur stratégique ultime. Rejoignez les batailles Vevfrontgame, créez des lobbies et dominez dans ce jeu de stratégie gratuit.',
    heroTitle: 'Bienvenue sur Vevfrontgame',
    heroSubtitle: 'Arène de Bataille Multijoueur Stratégique',
    heroDescription: 'Commandez des armées, forgez des alliances et dominez le champ de bataille dans Vevfrontgame - le jeu de stratégie gratuit ultime.'
  },
  'de': {
    title: 'Vevfrontgame - Strategiespiel | Vevfrontgame Multiplayer-Kampfarena',
    description: 'Vevfrontgame ist die ultimative strategische Multiplayer-Kampfarena. Nimm an Vevfrontgame-Schlachten teil, erstelle Lobbys und dominiere in diesem kostenlosen Strategiespiel.',
    heroTitle: 'Willkommen bei Vevfrontgame',
    heroSubtitle: 'Strategische Multiplayer-Kampfarena',
    heroDescription: 'Befehlige Armeen, schmiede Allianzen und dominiere das Schlachtfeld in Vevfrontgame - dem ultimativen kostenlosen Strategiespiel.'
  },
  'es': {
    title: 'Vevfrontgame - Juego de Estrategia | Arena de Batalla Multijugador Vevfrontgame',
    description: 'Vevfrontgame es la arena de batalla multijugador estratégica definitiva. Únete a las batallas de Vevfrontgame, crea lobbies y domina en este juego de estrategia gratuito.',
    heroTitle: 'Bienvenido a Vevfrontgame',
    heroSubtitle: 'Arena de Batalla Multijugador Estratégica',
    heroDescription: 'Comanda ejércitos, forja alianzas y domina el campo de batalla en Vevfrontgame - el juego de estrategia gratuito definitivo.'
  },
  'it': {
    title: 'Vevfrontgame - Gioco di Strategia | Arena di Battaglia Multiplayer Vevfrontgame',
    description: 'Vevfrontgame è l\'arena di battaglia multiplayer strategica definitiva. Unisciti alle battaglie Vevfrontgame, crea lobby e domina in questo gioco di strategia gratuito.',
    heroTitle: 'Benvenuto su Vevfrontgame',
    heroSubtitle: 'Arena di Battaglia Multiplayer Strategica',
    heroDescription: 'Comanda eserciti, forgia alleanze e domina il campo di battaglia in Vevfrontgame - il gioco di strategia gratuito definitivo.'
  },
  'pt': {
    title: 'Vevfrontgame - Jogo de Estratégia | Arena de Batalha Multiplayer Vevfrontgame',
    description: 'Vevfrontgame é a arena de batalha multiplayer estratégica definitiva. Junte-se às batalhas Vevfrontgame, crie lobbies e domine neste jogo de estratégia gratuito.',
    heroTitle: 'Bem-vindo ao Vevfrontgame',
    heroSubtitle: 'Arena de Batalha Multiplayer Estratégica',
    heroDescription: 'Comande exércitos, forje alianças e domine o campo de batalha no Vevfrontgame - o jogo de estratégia gratuito definitivo.'
  },
  'ru': {
    title: 'Vevfrontgame - Стратегическая игра | Многопользовательская боевая арена Vevfrontgame',
    description: 'Vevfrontgame - это лучшая стратегическая многопользовательская боевая арена. Присоединяйтесь к битвам Vevfrontgame, создавайте лобби и доминируйте в этой бесплатной стратегической игре.',
    heroTitle: 'Добро пожаловать в Vevfrontgame',
    heroSubtitle: 'Стратегическая многопользовательская боевая арена',
    heroDescription: 'Командуйте армиями, заключайте союзы и доминируйте на поле боя в Vevfrontgame - лучшей бесплатной стратегической игре.'
  },
  'pt-br': {
    title: 'Vevfrontgame - Jogo de Estratégia | Arena de Batalha Multiplayer Vevfrontgame',
    description: 'Vevfrontgame é a arena de batalha multiplayer estratégica definitiva. Junte-se às batalhas Vevfrontgame, crie salas e domine neste jogo de estratégia gratuito.',
    heroTitle: 'Bem-vindo ao Vevfrontgame',
    heroSubtitle: 'Arena de Batalha Multiplayer Estratégica',
    heroDescription: 'Comande exércitos, forje alianças e domine o campo de batalha no Vevfrontgame - o jogo de estratégia gratuito definitivo.'
  },
  'nl': {
    title: 'Vevfrontgame - Strategiespel | Vevfrontgame Multiplayer Gevechtarena',
    description: 'Vevfrontgame is de ultieme strategische multiplayer gevechtarena. Doe mee aan Vevfrontgame gevechten, maak lobby\'s en domineer in dit gratis strategiespel.',
    heroTitle: 'Welkom bij Vevfrontgame',
    heroSubtitle: 'Strategische Multiplayer Gevechtarena',
    heroDescription: 'Commandeer legers, smeed allianties en domineer het slagveld in Vevfrontgame - het ultieme gratis strategiespel.'
  },
  'pl': {
    title: 'Vevfrontgame - Gra Strategiczna | Arena Bitew Multiplayer Vevfrontgame',
    description: 'Vevfrontgame to najlepsza strategiczna arena bitew multiplayer. Dołącz do bitew Vevfrontgame, twórz lobby i dominuj w tej darmowej grze strategicznej.',
    heroTitle: 'Witaj w Vevfrontgame',
    heroSubtitle: 'Strategiczna Arena Bitew Multiplayer',
    heroDescription: 'Dowodź armiami, zawieraj sojusze i dominuj na polu bitwy w Vevfrontgame - najlepszej darmowej grze strategicznej.'
  },
  'tr': {
    title: 'Vevfrontgame - Strateji Oyunu | Vevfrontgame Çok Oyunculu Savaş Arenası',
    description: 'Vevfrontgame, en iyi stratejik çok oyunculu savaş arenasıdır. Vevfrontgame savaşlarına katılın, lobiler oluşturun ve bu ücretsiz strateji oyununda hükmedin.',
    heroTitle: 'Vevfrontgame\'a Hoş Geldiniz',
    heroSubtitle: 'Stratejik Çok Oyunculu Savaş Arenası',
    heroDescription: 'Vevfrontgame\'ta ordulara komuta edin, ittifaklar kurun ve savaş alanına hükmedin - en iyi ücretsiz strateji oyunu.'
  },
  'ko': {
    title: 'Vevfrontgame - 전략 게임 | Vevfrontgame 멀티플레이어 전투 아레나',
    description: 'Vevfrontgame는 최고의 전략적 멀티플레이어 전투 아레나입니다. Vevfrontgame 전투에 참여하고, 로비를 만들고, 이 무료 전략 게임에서 지배하세요.',
    heroTitle: 'Vevfrontgame에 오신 것을 환영합니다',
    heroSubtitle: '전략적 멀티플레이어 전투 아레나',
    heroDescription: 'Vevfrontgame에서 군대를 지휘하고, 동맹을 맺고, 전장을 지배하세요 - 최고의 무료 전략 게임.'
  },
  'ja': {
    title: 'Vevfrontgame - 戦略ゲーム | Vevfrontgame マルチプレイヤーバトルアリーナ',
    description: 'Vevfrontgameは究極の戦略的マルチプレイヤーバトルアリーナです。Vevfrontgameバトルに参加し、ロビーを作成し、この無料戦略ゲームで支配しましょう。',
    heroTitle: 'Vevfrontgameへようこそ',
    heroSubtitle: '戦略的マルチプレイヤーバトルアリーナ',
    heroDescription: 'Vevfrontgameで軍隊を指揮し、同盟を築き、戦場を支配しましょう - 究極の無料戦略ゲーム。'
  },
  'zh': {
    title: 'Vevfrontgame - 策略游戏 | Vevfrontgame 多人战斗竞技场',
    description: 'Vevfrontgame 是终极战略多人战斗竞技场。加入 Vevfrontgame 战斗，创建大厅，在这款免费策略游戏中占据主导地位。立即玩 Vevfrontgame！',
    heroTitle: '欢迎来到 Vevfrontgame',
    heroSubtitle: '战略多人战斗竞技场',
    heroDescription: '在 Vevfrontgame 中指挥军队、建立联盟并主宰战场 - 终极免费策略游戏。'
  }
};

// Fonction pour générer le HTML pour une langue
function generateHTMLForLanguage(baseHTML, lang) {
  let html = baseHTML;
  const translations = SEO_TRANSLATIONS[lang] || SEO_TRANSLATIONS['en'];
  
  // Remplacer l'attribut lang
  html = html.replace(/<html[^>]*>/, `<html lang="${lang}">`);
  
  // ⚠️ FORCER LES CHEMINS ABSOLUS POUR TOUS LES ASSETS
  // Remplacer tous les chemins relatifs par des chemins absolus
  html = html.replace(/src="js\//g, 'src="/js/');
  html = html.replace(/src="images\//g, 'src="/images/');
  html = html.replace(/href="css\//g, 'href="/css/');
  
  // Assurez-vous que la balise base est bien présente
  const baseTag = '<base href="/">';
  if (!html.includes('<base')) {
    html = html.replace('</head>', `  ${baseTag}\n</head>`);
  }

  
  // Remplacer le titre
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${translations.title}</title>`
  );
  
  // Remplacer la meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${translations.description}"`
  );
  
  // Remplacer les meta og
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${translations.title}"`
  );
  
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${translations.description}"`
  );
  
  // Remplacer les meta Twitter
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${translations.title}"`
  );
  
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${translations.description}"`
  );
  
  // Remplacer le contenu hero
  html = html.replace(
    /<h1 class="hero-title">.*?<\/h1>/,
    `<h1 class="hero-title">${translations.heroTitle}</h1>`
  );
  
  html = html.replace(
    /<h2 class="hero-subtitle">.*?<\/h2>/,
    `<h2 class="hero-subtitle">${translations.heroSubtitle}</h2>`
  );
  
  html = html.replace(
    /<p class="hero-description">\s*Command armies[\s\S]*?<\/p>/,
    `<p class="hero-description">\n          ${translations.heroDescription}\n        </p>`
  );
  
  // URL canonique (placeholder - à adapter si déploiement public)
  const canonicalUrl = lang === 'en' ? 'https://example.invalid' : `https://example.invalid/${lang}`;
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );
  
  // Ajouter un script pour initialiser la langue
  const langScript = `
  <script>
    // Initialisation de la langue
    (function() {
      window.__INITIAL_LANG__ = '${lang}';
      localStorage.setItem('selectedLanguage', '${lang}');
    })();
  </script>`;
  
  html = html.replace('</head>', `${langScript}\n</head>`);
  
  return html;
}

// Fonction principale
function generateLanguagePages() {
  const srcPath = path.join(__dirname, 'src/client/index.html');
  const staticPath = path.join(__dirname, 'static');
  
  // Lire le HTML de base
  const baseHTML = fs.readFileSync(srcPath, 'utf8');
  
  // Créer le dossier static s'il n'existe pas
  if (!fs.existsSync(staticPath)) {
    fs.mkdirSync(staticPath, { recursive: true });
  }
  
  // Générer une page pour chaque langue
  Object.keys(LANGUAGES).forEach(lang => {
    if (lang === 'en') {
      // Pour l'anglais, copier simplement l'index.html original
      fs.writeFileSync(path.join(staticPath, 'index.html'), baseHTML);
    } else {
      // Pour les autres langues, créer un dossier et générer le HTML
      const langPath = path.join(staticPath, lang);
      if (!fs.existsSync(langPath)) {
        fs.mkdirSync(langPath, { recursive: true });
      }
      
      const langHTML = generateHTMLForLanguage(baseHTML, lang);
      fs.writeFileSync(path.join(langPath, 'index.html'), langHTML);
    }
  });
  
  console.log('✅ Pages multilingues générées avec succès!');
  console.log('📁 Fichiers créés dans:', staticPath);
  Object.keys(LANGUAGES).forEach(lang => {
    if (lang === 'en') {
      console.log(`   - /index.html (English - default)`);
    } else {
      console.log(`   - /${lang}/index.html (${LANGUAGES[lang].name})`);
    }
  });
}

// Exécuter le script
generateLanguagePages();