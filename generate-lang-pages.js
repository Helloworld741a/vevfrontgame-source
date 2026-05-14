import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration des langues supportées
const LANGUAGES = {
  'en': { name: 'English', nativeName: 'English', locale: 'en_US', default: true },
  'fr': { name: 'French', nativeName: 'Français', locale: 'fr_FR' },
  'de': { name: 'German', nativeName: 'Deutsch', locale: 'de_DE' },
  'es': { name: 'Spanish', nativeName: 'Español', locale: 'es_ES' },
  'it': { name: 'Italian', nativeName: 'Italiano', locale: 'it_IT' },
  'pt': { name: 'Portuguese', nativeName: 'Português', locale: 'pt_PT' },
  'ru': { name: 'Russian', nativeName: 'Русский', locale: 'ru_RU' },
  'pt-br': { name: 'Brazilian Portuguese', nativeName: 'Português (Brasil)', locale: 'pt_BR' },
  'nl': { name: 'Dutch', nativeName: 'Nederlands', locale: 'nl_NL' },
  'pl': { name: 'Polish', nativeName: 'Polski', locale: 'pl_PL' },
  'tr': { name: 'Turkish', nativeName: 'Türkçe', locale: 'tr_TR' },
  'ko': { name: 'Korean', nativeName: '한국어', locale: 'ko_KR' },
  'ja': { name: 'Japanese', nativeName: '日本語', locale: 'ja_JP' },
  'zh': { name: 'Chinese (Simplified)', nativeName: '中文（简体）', locale: 'zh_CN' }
};

// Traductions des éléments SEO
const SEO_TRANSLATIONS = {
  'en': {
    title: 'Vevfrontgame - Strategy Game | Vevfrontgame Multiplayer Battle Arena',
    description: 'Vevfrontgame is the ultimate strategic multiplayer battle arena. Create lobbies, join Vevfrontgame battles, and dominate in this free-to-play strategy game. Play Vevfrontgame now!',
    ogDescription: 'Experience intense tactical warfare in Vevfrontgame. Command armies, forge alliances, and conquer territories in this epic strategy game.',
    keywords: 'Vevfrontgame, Vevfrontgame, strategy game, multiplayer, battle arena, online game, tactical warfare, free game',
    heroTitle: 'Welcome to Vevfrontgame',
    heroSubtitle: 'Strategic Multiplayer Battle Arena',
    heroDescription: 'Command armies, forge alliances, and dominate the battlefield in Vevfrontgame - the ultimate free-to-play strategy game. Experience tactical warfare like never before in our Vevfrontgame battlegrounds where every decision matters.',
    schemaDescription: 'Strategic multiplayer battle arena game featuring tactical warfare, army command, and competitive online battles',
    whyChooseTitle: 'Why Choose Vevfrontgame?',
    epicBattlesTitle: 'Epic Vevfrontgame Battles',
    epicBattlesDesc: 'Strategic Vevfrontgame warfare with tactical depth',
    multiplayerTitle: 'Vevfrontgame Multiplayer',
    multiplayerDesc: 'Join Vevfrontgame lobbies worldwide',
    freeGameTitle: 'Free Strategy Game',
    freeGameDesc: 'Complete Vevfrontgame experience, totally free',
    // SEO Content Section
    seoTitle1: 'Master Vevfrontgame Strategy & Tactical Warfare',
    seoContent1: 'Vevfrontgame revolutionizes tactical warfare gaming with its innovative Vevfrontgame battle system. Our multiplayer strategy game combines classic battlefield tactics with modern competitive gaming mechanics. Join thousands of players in Vevfrontgame battles where strategic thinking, army management, and tactical alliances determine victory on the battlefield.',
    seoTitle2: 'Why Choose Vevfrontgame as Your Strategy Game?',
    seoContent2: 'As the premier Vevfrontgame strategy game, Vevfrontgame offers unparalleled tactical depth in a completely free-to-play environment. Command diverse armies, build strategic alliances with other players, and master the art of warfare in our dynamic multiplayer arena. Every Vevfrontgame match presents unique challenges that test your strategic thinking and battlefield adaptability.',
    seoContent3: 'Experience the evolution of online strategy gaming with Vevfrontgame\'s innovative Vevfrontgame system. Whether you\'re a seasoned strategy game veteran or new to tactical warfare, Vevfrontgame provides the perfect balance of accessibility and depth to keep you engaged for hours.',
    // FAQ Section
    faqTitle: 'Frequently Asked Questions About Vevfrontgame',
    faq1Question: 'What is Vevfrontgame and how does the Vevfrontgame system work?',
    faq1Answer: 'Vevfrontgame is a free-to-play strategic multiplayer battle arena where players command armies in tactical warfare. The Vevfrontgame system allows for dynamic battlefield positioning and strategic army deployment across multiple fronts simultaneously.',
    faq2Question: 'Is Vevfrontgame completely free to play?',
    faq2Answer: 'Yes! Vevfrontgame is 100% free-to-play with no pay-to-win mechanics. All strategic gameplay features are available to every player without any purchase requirements.',
    faq3Question: 'How do I join Vevfrontgame multiplayer battles?',
    faq3Answer: 'Simply create an account, choose your username and flag, then join public lobbies or create private Vevfrontgame lobbies with friends. Our matchmaking system connects you with players of similar skill levels.',
    faq4Question: 'What makes Vevfrontgame different from other strategy games?',
    faq4Answer: 'Vevfrontgame features the unique Vevfrontgame battle system, real-time tactical warfare, cross-platform multiplayer, and a focus on strategic depth over complex mechanics. Our community-driven approach ensures constant improvements based on player feedback.',
    faq5Question: 'Can I play Vevfrontgame on mobile devices?',
    faq5Answer: 'Yes! Vevfrontgame is designed to work seamlessly across all devices including mobile phones, tablets, and desktop computers. Experience the same strategic gameplay on any platform.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contact: 'Contact'


  },
  'fr': {
    title: 'Vevfrontgame - Jeu de Stratégie | Arène de Bataille Multijoueur Vevfrontgame',
    description: 'Vevfrontgame est l\'arène de combat stratégique multijoueur ultime. Créez des lobbies, rejoignez les batailles Vevfrontgame et dominez dans ce jeu de stratégie gratuit. Jouez à Vevfrontgame maintenant !',
    ogDescription: 'Vivez une guerre tactique intense dans Vevfrontgame. Commandez des armées, forgez des alliances et conquérez des territoires dans ce jeu de stratégie épique.',
    keywords: 'Vevfrontgame, Vevfrontgame, jeu de stratégie, multijoueur, arène de bataille, jeu en ligne, guerre tactique, jeu gratuit',
    heroTitle: 'Bienvenue sur Vevfrontgame',
    heroSubtitle: 'Arène de Bataille Multijoueur Stratégique',
    heroDescription: 'Commandez des armées, forgez des alliances et dominez le champ de bataille dans Vevfrontgame - le jeu de stratégie gratuit ultime. Vivez la guerre tactique comme jamais auparavant dans nos champs de bataille Vevfrontgame où chaque décision compte.',
    schemaDescription: 'Jeu d\'arène de bataille multijoueur stratégique avec guerre tactique, commandement d\'armées et batailles compétitives en ligne',
    whyChooseTitle: 'Pourquoi choisir Vevfrontgame ?',
    epicBattlesTitle: 'Batailles Vevfrontgame Épiques',
    epicBattlesDesc: 'Guerre Vevfrontgame stratégique avec profondeur tactique',
    multiplayerTitle: 'Multijoueur Vevfrontgame',
    multiplayerDesc: 'Rejoignez les lobbies Vevfrontgame du monde entier',
    freeGameTitle: 'Jeu de Stratégie Gratuit',
    freeGameDesc: 'Expérience Vevfrontgame complète, totalement gratuite',
    // SEO Content Section
    seoTitle1: 'Maîtrisez la Stratégie Vevfrontgame et la Guerre Tactique',
    seoContent1: 'Vevfrontgame révolutionne le jeu de guerre tactique avec son système de bataille Vevfrontgame innovant. Notre jeu de stratégie multijoueur combine les tactiques de champ de bataille classiques avec les mécaniques de jeu compétitif modernes. Rejoignez des milliers de joueurs dans les batailles Vevfrontgame où la réflexion stratégique, la gestion des armées et les alliances tactiques déterminent la victoire sur le champ de bataille.',
    seoTitle2: 'Pourquoi choisir Vevfrontgame comme votre jeu de stratégie ?',
    seoContent2: 'En tant que premier jeu de stratégie Vevfrontgame, Vevfrontgame offre une profondeur tactique inégalée dans un environnement entièrement gratuit. Commandez diverses armées, construisez des alliances stratégiques avec d\'autres joueurs et maîtrisez l\'art de la guerre dans notre arène multijoueur dynamique. Chaque match Vevfrontgame présente des défis uniques qui testent votre réflexion stratégique et votre adaptabilité sur le champ de bataille.',
    seoContent3: 'Découvrez l\'évolution du jeu de stratégie en ligne avec le système Vevfrontgame innovant d\'Vevfrontgame. Que vous soyez un vétéran chevronné des jeux de stratégie ou nouveau dans la guerre tactique, Vevfrontgame offre l\'équilibre parfait entre accessibilité et profondeur pour vous garder engagé pendant des heures.',
    // FAQ Section
    faqTitle: 'Questions Fréquemment Posées sur Vevfrontgame',
    faq1Question: 'Qu\'est-ce qu\'Vevfrontgame et comment fonctionne le système Vevfrontgame ?',
    faq1Answer: 'Vevfrontgame est une arène de bataille multijoueur stratégique gratuite où les joueurs commandent des armées dans une guerre tactique. Le système Vevfrontgame permet un positionnement dynamique sur le champ de bataille et un déploiement stratégique des armées sur plusieurs fronts simultanément.',
    faq2Question: 'Vevfrontgame est-il complètement gratuit ?',
    faq2Answer: 'Oui ! Vevfrontgame est 100% gratuit sans mécaniques pay-to-win. Toutes les fonctionnalités de gameplay stratégique sont disponibles pour chaque joueur sans aucune exigence d\'achat.',
    faq3Question: 'Comment rejoindre les batailles multijoueurs Vevfrontgame ?',
    faq3Answer: 'Créez simplement un compte, choisissez votre nom d\'utilisateur et votre drapeau, puis rejoignez des lobbies publics ou créez des lobbies Vevfrontgame privés avec des amis. Notre système de matchmaking vous connecte avec des joueurs de niveaux similaires.',
    faq4Question: 'Qu\'est-ce qui rend Vevfrontgame différent des autres jeux de stratégie ?',
    faq4Answer: 'Vevfrontgame propose le système de bataille Vevfrontgame unique, une guerre tactique en temps réel, un multijoueur multiplateforme et un accent sur la profondeur stratégique plutôt que sur des mécaniques complexes. Notre approche axée sur la communauté garantit des améliorations constantes basées sur les retours des joueurs.',
    faq5Question: 'Puis-je jouer à Vevfrontgame sur des appareils mobiles ?',
    faq5Answer: 'Oui ! Vevfrontgame est conçu pour fonctionner parfaitement sur tous les appareils, y compris les téléphones mobiles, les tablettes et les ordinateurs de bureau. Vivez le même gameplay stratégique sur n\'importe quelle plateforme.',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions d\'Utilisation',
    contact: 'Contact'
  },
  'de': {
    title: 'Vevfrontgame - Strategiespiel | Vevfrontgame Multiplayer-Kampfarena',
    description: 'Vevfrontgame ist die ultimative strategische Multiplayer-Kampfarena. Erstelle Lobbys, nimm an Vevfrontgame Schlachten teil und dominiere in diesem kostenlosen Strategiespiel. Spiele Vevfrontgame jetzt!',
    ogDescription: 'Erlebe intensive taktische Kriegsführung in Vevfrontgame. Befehlige Armeen, schmiede Allianzen und erobere Gebiete in diesem epischen Strategiespiel.',
    keywords: 'Vevfrontgame, Vevfrontgame, Strategiespiel, Multiplayer, Kampfarena, Online-Spiel, taktische Kriegsführung, kostenloses Spiel',
    heroTitle: 'Willkommen bei Vevfrontgame',
    heroSubtitle: 'Strategische Multiplayer-Kampfarena',
    heroDescription: 'Befehlige Armeen, schmiede Allianzen und dominiere das Schlachtfeld in Vevfrontgame - dem ultimativen kostenlosen Strategiespiel. Erlebe taktische Kriegsführung wie nie zuvor auf unseren Vevfrontgame-Schlachtfeldern, wo jede Entscheidung zählt.',
    schemaDescription: 'Strategisches Multiplayer-Kampfarena-Spiel mit taktischer Kriegsführung, Armeekommando und kompetitiven Online-Schlachten',
    whyChooseTitle: 'Warum Vevfrontgame wählen?',
    epicBattlesTitle: 'Epische Vevfrontgame-Schlachten',
    epicBattlesDesc: 'Strategische Vevfrontgame-Kriegsführung mit taktischer Tiefe',
    multiplayerTitle: 'Vevfrontgame Multiplayer',
    multiplayerDesc: 'Tritt Vevfrontgame-Lobbys weltweit bei',
    freeGameTitle: 'Kostenloses Strategiespiel',
    freeGameDesc: 'Komplette Vevfrontgame-Erfahrung, völlig kostenlos',
    // SEO Content Section
    seoTitle1: 'Meistere Vevfrontgame-Strategie & Taktische Kriegsführung',
    seoContent1: 'Vevfrontgame revolutioniert das taktische Kriegsspiel mit seinem innovativen Vevfrontgame-Kampfsystem. Unser Multiplayer-Strategiespiel kombiniert klassische Schlachtfeldtaktiken mit modernen kompetitiven Spielmechaniken. Schließe dich Tausenden von Spielern in Vevfrontgame-Schlachten an, wo strategisches Denken, Armeeverwaltung und taktische Allianzen den Sieg auf dem Schlachtfeld bestimmen.',
    seoTitle2: 'Warum Vevfrontgame als dein Strategiespiel wählen?',
    seoContent2: 'Als das führende Vevfrontgame-Strategiespiel bietet Vevfrontgame unvergleichliche taktische Tiefe in einer vollständig kostenlosen Umgebung. Befehlige verschiedene Armeen, baue strategische Allianzen mit anderen Spielern auf und meistere die Kunst der Kriegsführung in unserer dynamischen Multiplayer-Arena. Jedes Vevfrontgame-Match präsentiert einzigartige Herausforderungen, die dein strategisches Denken und deine Anpassungsfähigkeit auf dem Schlachtfeld testen.',
    seoContent3: 'Erlebe die Evolution des Online-Strategiespiels mit Vevfrontgames innovativem Vevfrontgame-System. Egal ob du ein erfahrener Strategiespiel-Veteran oder neu in der taktischen Kriegsführung bist, Vevfrontgame bietet die perfekte Balance zwischen Zugänglichkeit und Tiefe, um dich stundenlang zu fesseln.',
    // FAQ Section
    faqTitle: 'Häufig gestellte Fragen zu Vevfrontgame',
    faq1Question: 'Was ist Vevfrontgame und wie funktioniert das Vevfrontgame-System?',
    faq1Answer: 'Vevfrontgame ist eine kostenlose strategische Multiplayer-Kampfarena, in der Spieler Armeen in taktischer Kriegsführung befehligen. Das Vevfrontgame-System ermöglicht dynamische Schlachtfeldpositionierung und strategischen Armeeeinsatz an mehreren Fronten gleichzeitig.',
    faq2Question: 'Ist Vevfrontgame komplett kostenlos?',
    faq2Answer: 'Ja! Vevfrontgame ist 100% kostenlos ohne Pay-to-Win-Mechaniken. Alle strategischen Gameplay-Features sind für jeden Spieler ohne Kaufanforderungen verfügbar.',
    faq3Question: 'Wie trete ich Vevfrontgame-Multiplayer-Schlachten bei?',
    faq3Answer: 'Erstelle einfach ein Konto, wähle deinen Benutzernamen und deine Flagge und tritt dann öffentlichen Lobbys bei oder erstelle private Vevfrontgame-Lobbys mit Freunden. Unser Matchmaking-System verbindet dich mit Spielern ähnlicher Fähigkeitsstufen.',
    faq4Question: 'Was macht Vevfrontgame anders als andere Strategiespiele?',
    faq4Answer: 'Vevfrontgame bietet das einzigartige Vevfrontgame-Kampfsystem, Echtzeit-taktische Kriegsführung, plattformübergreifenden Multiplayer und einen Fokus auf strategische Tiefe statt komplexe Mechaniken. Unser Community-orientierter Ansatz gewährleistet ständige Verbesserungen basierend auf Spieler-Feedback.',
    faq5Question: 'Kann ich Vevfrontgame auf mobilen Geräten spielen?',
    faq5Answer: 'Ja! Vevfrontgame ist so konzipiert, dass es nahtlos auf allen Geräten funktioniert, einschließlich Mobiltelefonen, Tablets und Desktop-Computern. Erlebe das gleiche strategische Gameplay auf jeder Plattform.',
    privacyPolicy: 'Datenschutzerklärung',
    termsOfService: 'Nutzungsbedingungen',
    contact: 'Kontakt'
  },
  'es': {
    title: 'Vevfrontgame - Juego de Estrategia | Arena de Batalla Multijugador Vevfrontgame',
    description: 'Vevfrontgame es la arena de batalla estratégica multijugador definitiva. Crea lobbies, únete a las batallas de Vevfrontgame y domina en este juego de estrategia gratuito. ¡Juega a Vevfrontgame ahora!',
    ogDescription: 'Experimenta una intensa guerra táctica en Vevfrontgame. Comanda ejércitos, forja alianzas y conquista territorios en este épico juego de estrategia.',
    keywords: 'Vevfrontgame, Vevfrontgame, juego de estrategia, multijugador, arena de batalla, juego en línea, guerra táctica, juego gratis',
    heroTitle: 'Bienvenido a Vevfrontgame',
    heroSubtitle: 'Arena de Batalla Multijugador Estratégica',
    heroDescription: 'Comanda ejércitos, forja alianzas y domina el campo de batalla en Vevfrontgame - el juego de estrategia gratuito definitivo. Experimenta la guerra táctica como nunca antes en nuestros campos de batalla Vevfrontgame donde cada decisión importa.',
    schemaDescription: 'Juego de arena de batalla multijugador estratégico con guerra táctica, comando de ejércitos y batallas competitivas en línea',
    whyChooseTitle: '¿Por qué elegir Vevfrontgame?',
    epicBattlesTitle: 'Batallas Épicas de Vevfrontgame',
    epicBattlesDesc: 'Guerra estratégica Vevfrontgame con profundidad táctica',
    multiplayerTitle: 'Multijugador Vevfrontgame',
    multiplayerDesc: 'Únete a lobbies de Vevfrontgame en todo el mundo',
    freeGameTitle: 'Juego de Estrategia Gratis',
    freeGameDesc: 'Experiencia completa de Vevfrontgame, totalmente gratis',
    // SEO Content Section
    seoTitle1: 'Domina la Estrategia Vevfrontgame y la Guerra Táctica',
    seoContent1: 'Vevfrontgame revoluciona los juegos de guerra táctica con su innovador sistema de batalla Vevfrontgame. Nuestro juego de estrategia multijugador combina tácticas clásicas del campo de batalla con mecánicas de juego competitivo modernas. Únete a miles de jugadores en batallas Vevfrontgame donde el pensamiento estratégico, la gestión de ejércitos y las alianzas tácticas determinan la victoria en el campo de batalla.',
    seoTitle2: '¿Por qué elegir Vevfrontgame como tu juego de estrategia?',
    seoContent2: 'Como el principal juego de estrategia Vevfrontgame, Vevfrontgame ofrece una profundidad táctica sin igual en un entorno completamente gratuito. Comanda diversos ejércitos, construye alianzas estratégicas con otros jugadores y domina el arte de la guerra en nuestra dinámica arena multijugador. Cada partida de Vevfrontgame presenta desafíos únicos que prueban tu pensamiento estratégico y tu adaptabilidad en el campo de batalla.',
    seoContent3: 'Experimenta la evolución de los juegos de estrategia en línea con el innovador sistema Vevfrontgame de Vevfrontgame. Ya seas un veterano experimentado en juegos de estrategia o nuevo en la guerra táctica, Vevfrontgame proporciona el equilibrio perfecto entre accesibilidad y profundidad para mantenerte comprometido durante horas.',
    // FAQ Section
    faqTitle: 'Preguntas Frecuentes sobre Vevfrontgame',
    faq1Question: '¿Qué es Vevfrontgame y cómo funciona el sistema Vevfrontgame?',
    faq1Answer: 'Vevfrontgame es una arena de batalla multijugador estratégica gratuita donde los jugadores comandan ejércitos en guerra táctica. El sistema Vevfrontgame permite el posicionamiento dinámico en el campo de batalla y el despliegue estratégico de ejércitos en múltiples frentes simultáneamente.',
    faq2Question: '¿Es Vevfrontgame completamente gratis?',
    faq2Answer: '¡Sí! Vevfrontgame es 100% gratuito sin mecánicas pay-to-win. Todas las características de juego estratégico están disponibles para cada jugador sin requisitos de compra.',
    faq3Question: '¿Cómo me uno a las batallas multijugador de Vevfrontgame?',
    faq3Answer: 'Simplemente crea una cuenta, elige tu nombre de usuario y bandera, luego únete a lobbies públicos o crea lobbies privados de Vevfrontgame con amigos. Nuestro sistema de emparejamiento te conecta con jugadores de niveles de habilidad similares.',
    faq4Question: '¿Qué hace a Vevfrontgame diferente de otros juegos de estrategia?',
    faq4Answer: 'Vevfrontgame presenta el sistema único de batalla Vevfrontgame, guerra táctica en tiempo real, multijugador multiplataforma y un enfoque en la profundidad estratégica sobre mecánicas complejas. Nuestro enfoque impulsado por la comunidad garantiza mejoras constantes basadas en los comentarios de los jugadores.',
    faq5Question: '¿Puedo jugar Vevfrontgame en dispositivos móviles?',
    faq5Answer: '¡Sí! Vevfrontgame está diseñado para funcionar sin problemas en todos los dispositivos, incluidos teléfonos móviles, tabletas y computadoras de escritorio. Experimenta el mismo juego estratégico en cualquier plataforma.',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    contact: 'Contacto'
  },
  'it': {
    title: 'Vevfrontgame - Gioco di Strategia | Arena di Battaglia Multiplayer Vevfrontgame',
    description: 'Vevfrontgame è l\'arena di battaglia strategica multiplayer definitiva. Crea lobby, unisciti alle battaglie di Vevfrontgame e domina in questo gioco di strategia gratuito. Gioca a Vevfrontgame ora!',
    ogDescription: 'Vivi un\'intensa guerra tattica in Vevfrontgame. Comanda eserciti, forgia alleanze e conquista territori in questo epico gioco di strategia.',
    keywords: 'Vevfrontgame, Vevfrontgame, gioco di strategia, multiplayer, arena di battaglia, gioco online, guerra tattica, gioco gratuito',
    heroTitle: 'Benvenuto su Vevfrontgame',
    heroSubtitle: 'Arena di Battaglia Multiplayer Strategica',
    heroDescription: 'Comanda eserciti, forgia alleanze e domina il campo di battaglia in Vevfrontgame - il gioco di strategia gratuito definitivo. Vivi la guerra tattica come mai prima d\'ora nei nostri campi di battaglia Vevfrontgame dove ogni decisione conta.',
    schemaDescription: 'Gioco di arena di battaglia multiplayer strategico con guerra tattica, comando di eserciti e battaglie competitive online',
    whyChooseTitle: 'Perché scegliere Vevfrontgame?',
    epicBattlesTitle: 'Battaglie Epiche di Vevfrontgame',
    epicBattlesDesc: 'Guerra strategica Vevfrontgame con profondità tattica',
    multiplayerTitle: 'Multiplayer Vevfrontgame',
    multiplayerDesc: 'Unisciti alle lobby Vevfrontgame in tutto il mondo',
    freeGameTitle: 'Gioco di Strategia Gratuito',
    freeGameDesc: 'Esperienza Vevfrontgame completa, totalmente gratuita',
    // SEO Content Section
    seoTitle1: 'Padroneggia la Strategia Vevfrontgame e la Guerra Tattica',
    seoContent1: 'Vevfrontgame rivoluziona il gaming di guerra tattica con il suo innovativo sistema di battaglia Vevfrontgame. Il nostro gioco di strategia multiplayer combina tattiche classiche del campo di battaglia con moderne meccaniche di gioco competitive. Unisciti a migliaia di giocatori nelle battaglie Vevfrontgame dove il pensiero strategico, la gestione degli eserciti e le alleanze tattiche determinano la vittoria sul campo di battaglia.',
    seoTitle2: 'Perché scegliere Vevfrontgame come tuo gioco di strategia?',
    seoContent2: 'Come il principale gioco di strategia Vevfrontgame, Vevfrontgame offre una profondità tattica senza pari in un ambiente completamente gratuito. Comanda diversi eserciti, costruisci alleanze strategiche con altri giocatori e padroneggia l\'arte della guerra nella nostra dinamica arena multiplayer. Ogni partita Vevfrontgame presenta sfide uniche che mettono alla prova il tuo pensiero strategico e la tua adattabilità sul campo di battaglia.',
    seoContent3: 'Sperimenta l\'evoluzione del gioco di strategia online con l\'innovativo sistema Vevfrontgame di Vevfrontgame. Che tu sia un veterano esperto di giochi di strategia o nuovo alla guerra tattica, Vevfrontgame fornisce il perfetto equilibrio tra accessibilità e profondità per tenerti impegnato per ore.',
    // FAQ Section
    faqTitle: 'Domande Frequenti su Vevfrontgame',
    faq1Question: 'Cos\'è Vevfrontgame e come funziona il sistema Vevfrontgame?',
    faq1Answer: 'Vevfrontgame è un\'arena di battaglia multiplayer strategica gratuita dove i giocatori comandano eserciti in guerra tattica. Il sistema Vevfrontgame permette il posizionamento dinamico sul campo di battaglia e il dispiegamento strategico degli eserciti su più fronti simultaneamente.',
    faq2Question: 'Vevfrontgame è completamente gratuito?',
    faq2Answer: 'Sì! Vevfrontgame è 100% gratuito senza meccaniche pay-to-win. Tutte le funzionalità di gioco strategico sono disponibili per ogni giocatore senza requisiti di acquisto.',
    faq3Question: 'Come mi unisco alle battaglie multiplayer di Vevfrontgame?',
    faq3Answer: 'Crea semplicemente un account, scegli il tuo nome utente e bandiera, poi unisciti alle lobby pubbliche o crea lobby private di Vevfrontgame con gli amici. Il nostro sistema di matchmaking ti connette con giocatori di livelli di abilità simili.',
    faq4Question: 'Cosa rende Vevfrontgame diverso dagli altri giochi di strategia?',
    faq4Answer: 'Vevfrontgame presenta l\'unico sistema di battaglia Vevfrontgame, guerra tattica in tempo reale, multiplayer multipiattaforma e un focus sulla profondità strategica piuttosto che su meccaniche complesse. Il nostro approccio guidato dalla comunità garantisce miglioramenti costanti basati sul feedback dei giocatori.',
    faq5Question: 'Posso giocare a Vevfrontgame su dispositivi mobili?',
    faq5Answer: 'Sì! Vevfrontgame è progettato per funzionare perfettamente su tutti i dispositivi inclusi telefoni cellulari, tablet e computer desktop. Sperimenta lo stesso gameplay strategico su qualsiasi piattaforma.',
    privacyPolicy: 'Informativa sulla Privacy',
    termsOfService: 'Termini di Servizio',
    contact: 'Contatto'
  },

  'pt': {
    title: 'Vevfrontgame - Jogo de Estratégia | Arena de Batalha Multiplayer Vevfrontgame',
    description: 'Vevfrontgame é a arena de batalha estratégica multijogador definitiva. Crie lobbies, junte-se às batalhas do Vevfrontgame e domine neste jogo de estratégia gratuito. Jogue Vevfrontgame agora!',
    ogDescription: 'Experimente guerra tática intensa no Vevfrontgame. Comande exércitos, forje alianças e conquiste territórios neste épico jogo de estratégia.',
    keywords: 'Vevfrontgame, Vevfrontgame, jogo de estratégia, multiplayer, arena de batalha, jogo online, guerra tática, jogo grátis',
    heroTitle: 'Bem-vindo ao Vevfrontgame',
    heroSubtitle: 'Arena de Batalha Multiplayer Estratégica',
    heroDescription: 'Comande exércitos, forje alianças e domine o campo de batalha no Vevfrontgame - o jogo de estratégia gratuito definitivo. Experimente a guerra tática como nunca antes nos nossos campos de batalha Vevfrontgame onde cada decisão importa.',
    schemaDescription: 'Jogo de arena de batalha multiplayer estratégico com guerra tática, comando de exércitos e batalhas competitivas online',
    whyChooseTitle: 'Por que escolher Vevfrontgame?',
    epicBattlesTitle: 'Batalhas Épicas Vevfrontgame',
    epicBattlesDesc: 'Guerra estratégica Vevfrontgame com profundidade tática',
    multiplayerTitle: 'Multiplayer Vevfrontgame',
    multiplayerDesc: 'Junte-se aos lobbies Vevfrontgame em todo o mundo',
    freeGameTitle: 'Jogo de Estratégia Grátis',
    freeGameDesc: 'Experiência Vevfrontgame completa, totalmente grátis',
    // SEO Content Section
    seoTitle1: 'Domine a Estratégia Vevfrontgame e Guerra Tática',
    seoContent1: 'Vevfrontgame revoluciona os jogos de guerra tática com o seu inovador sistema de batalha Vevfrontgame. O nosso jogo de estratégia multiplayer combina táticas clássicas de campo de batalha com mecânicas de jogo competitivas modernas. Junte-se a milhares de jogadores nas batalhas Vevfrontgame onde o pensamento estratégico, gestão de exércitos e alianças táticas determinam a vitória no campo de batalha.',
    seoTitle2: 'Porquê escolher Vevfrontgame como o seu jogo de estratégia?',
    seoContent2: 'Como o principal jogo de estratégia Vevfrontgame, Vevfrontgame oferece profundidade tática incomparável num ambiente completamente gratuito. Comande diversos exércitos, construa alianças estratégicas com outros jogadores e domine a arte da guerra na nossa arena multiplayer dinâmica. Cada partida Vevfrontgame apresenta desafios únicos que testam o seu pensamento estratégico e adaptabilidade no campo de batalha.',
    seoContent3: 'Experimente a evolução dos jogos de estratégia online com o inovador sistema Vevfrontgame do Vevfrontgame. Quer seja um veterano experiente em jogos de estratégia ou novo na guerra tática, Vevfrontgame fornece o equilíbrio perfeito entre acessibilidade e profundidade para o manter envolvido durante horas.',
    // FAQ Section
    faqTitle: 'Perguntas Frequentes sobre Vevfrontgame',
    faq1Question: 'O que é Vevfrontgame e como funciona o sistema Vevfrontgame?',
    faq1Answer: 'Vevfrontgame é uma arena de batalha multiplayer estratégica gratuita onde os jogadores comandam exércitos em guerra tática. O sistema Vevfrontgame permite posicionamento dinâmico no campo de batalha e implementação estratégica de exércitos em múltiplas frentes simultaneamente.',
    faq2Question: 'Vevfrontgame é completamente gratuito?',
    faq2Answer: 'Sim! Vevfrontgame é 100% gratuito sem mecânicas pay-to-win. Todas as funcionalidades de jogabilidade estratégica estão disponíveis para todos os jogadores sem requisitos de compra.',
    faq3Question: 'Como me junto às batalhas multiplayer Vevfrontgame?',
    faq3Answer: 'Simplesmente crie uma conta, escolha o seu nome de utilizador e bandeira, depois junte-se a lobbies públicos ou crie lobbies privados Vevfrontgame com amigos. O nosso sistema de matchmaking conecta-o com jogadores de níveis de habilidade semelhantes.',
    faq4Question: 'O que torna Vevfrontgame diferente de outros jogos de estratégia?',
    faq4Answer: 'Vevfrontgame apresenta o sistema único de batalha Vevfrontgame, guerra tática em tempo real, multiplayer multiplataforma e foco na profundidade estratégica em vez de mecânicas complexas. A nossa abordagem orientada pela comunidade garante melhorias constantes baseadas no feedback dos jogadores.',
    faq5Question: 'Posso jogar Vevfrontgame em dispositivos móveis?',
    faq5Answer: 'Sim! Vevfrontgame foi concebido para funcionar perfeitamente em todos os dispositivos, incluindo telemóveis, tablets e computadores desktop. Experimente a mesma jogabilidade estratégica em qualquer plataforma.',
    privacyPolicy: 'Política de Privacidade',
    termsOfService: 'Termos de Serviço',
    contact: 'Contacto'
  },

  'ru': {
    title: 'Vevfrontgame - Стратегическая игра | Многопользовательская боевая арена Vevfrontgame',
    description: 'Vevfrontgame - это идеальная стратегическая многопользовательская боевая арена. Создавайте лобби, участвуйте в битвах Vevfrontgame и доминируйте в этой бесплатной стратегической игре. Играйте в Vevfrontgame прямо сейчас!',
    ogDescription: 'Испытайте интенсивную тактическую войну в Vevfrontgame. Командуйте армиями, заключайте союзы и завоевывайте территории в этой эпической стратегической игре.',
    keywords: 'Vevfrontgame, Vevfrontgame, стратегическая игра, многопользовательская игра, боевая арена, онлайн игра, тактическая война, бесплатная игра',
    heroTitle: 'Добро пожаловать в Vevfrontgame',
    heroSubtitle: 'Стратегическая многопользовательская боевая арена',
    heroDescription: 'Командуйте армиями, заключайте союзы и доминируйте на поле боя в Vevfrontgame - лучшей бесплатной стратегической игре. Испытайте тактическую войну как никогда раньше на наших полях сражений Vevfrontgame, где каждое решение имеет значение.',
    schemaDescription: 'Стратегическая многопользовательская игра с боевой ареной, тактической войной, командованием армиями и соревновательными онлайн-битвами',
    whyChooseTitle: 'Почему выбрать Vevfrontgame?',
    epicBattlesTitle: 'Эпические битвы Vevfrontgame',
    epicBattlesDesc: 'Стратегическая война Vevfrontgame с тактической глубиной',
    multiplayerTitle: 'Многопользовательский Vevfrontgame',
    multiplayerDesc: 'Присоединяйтесь к лобби Vevfrontgame по всему миру',
    freeGameTitle: 'Бесплатная стратегическая игра',
    freeGameDesc: 'Полный опыт Vevfrontgame, совершенно бесплатно',
    // SEO Content Section
    seoTitle1: 'Освойте стратегию Vevfrontgame и тактическую войну',
    seoContent1: 'Vevfrontgame революционизирует игры с тактической войной благодаря своей инновационной системе битв Vevfrontgame. Наша многопользовательская стратегическая игра сочетает классическую тактику поля боя с современными соревновательными игровыми механиками. Присоединяйтесь к тысячам игроков в битвах Vevfrontgame, где стратегическое мышление, управление армиями и тактические союзы определяют победу на поле боя.',
    seoTitle2: 'Почему выбрать Vevfrontgame в качестве вашей стратегической игры?',
    seoContent2: 'Как ведущая стратегическая игра Vevfrontgame, Vevfrontgame предлагает непревзойденную тактическую глубину в полностью бесплатной среде. Командуйте разнообразными армиями, стройте стратегические союзы с другими игроками и овладейте искусством войны на нашей динамичной многопользовательской арене. Каждый матч Vevfrontgame представляет уникальные вызовы, которые проверяют ваше стратегическое мышление и адаптивность на поле боя.',
    seoContent3: 'Испытайте эволюцию онлайн-стратегических игр с инновационной системой Vevfrontgame от Vevfrontgame. Независимо от того, являетесь ли вы опытным ветераном стратегических игр или новичком в тактической войне, Vevfrontgame обеспечивает идеальный баланс между доступностью и глубиной, чтобы держать вас в напряжении часами.',
    // FAQ Section
    faqTitle: 'Часто задаваемые вопросы об Vevfrontgame',
    faq1Question: 'Что такое Vevfrontgame и как работает система Vevfrontgame?',
    faq1Answer: 'Vevfrontgame - это бесплатная стратегическая многопользовательская боевая арена, где игроки командуют армиями в тактической войне. Система Vevfrontgame позволяет динамически позиционировать войска на поле боя и стратегически развертывать армии на нескольких фронтах одновременно.',
    faq2Question: 'Vevfrontgame полностью бесплатный?',
    faq2Answer: 'Да! Vevfrontgame на 100% бесплатный без механик pay-to-win. Все функции стратегического геймплея доступны каждому игроку без каких-либо требований к покупке.',
    faq3Question: 'Как присоединиться к многопользовательским битвам Vevfrontgame?',
    faq3Answer: 'Просто создайте учетную запись, выберите имя пользователя и флаг, затем присоединяйтесь к публичным лобби или создавайте частные лобби Vevfrontgame с друзьями. Наша система подбора игроков соединяет вас с игроками аналогичного уровня навыков.',
    faq4Question: 'Что делает Vevfrontgame отличным от других стратегических игр?',
    faq4Answer: 'Vevfrontgame предлагает уникальную систему битв Vevfrontgame, тактическую войну в реальном времени, кроссплатформенный мультиплеер и фокус на стратегической глубине, а не на сложных механиках. Наш подход, ориентированный на сообщество, обеспечивает постоянные улучшения на основе отзывов игроков.',
    faq5Question: 'Могу ли я играть в Vevfrontgame на мобильных устройствах?',
    faq5Answer: 'Да! Vevfrontgame разработан для бесперебойной работы на всех устройствах, включая мобильные телефоны, планшеты и настольные компьютеры. Испытайте одинаковый стратегический геймплей на любой платформе.',
    privacyPolicy: 'Политика конфиденциальности',
    termsOfService: 'Условия использования',
    contact: 'Контакт'
  },

  'pt-br': {
    title: 'Vevfrontgame - Jogo de Estratégia | Arena de Batalha Multiplayer Vevfrontgame',
    description: 'Vevfrontgame é a arena de batalha estratégica multijogador definitiva. Crie lobbies, participe das batalhas do Vevfrontgame e domine neste jogo de estratégia gratuito. Jogue Vevfrontgame agora!',
    ogDescription: 'Experimente guerra tática intensa no Vevfrontgame. Comande exércitos, forje alianças e conquiste territórios neste épico jogo de estratégia.',
    keywords: 'Vevfrontgame, Vevfrontgame, jogo de estratégia, multiplayer, arena de batalha, jogo online, guerra tática, jogo grátis',
    heroTitle: 'Bem-vindo ao Vevfrontgame',
    heroSubtitle: 'Arena de Batalha Multiplayer Estratégica',
    heroDescription: 'Comande exércitos, forje alianças e domine o campo de batalha no Vevfrontgame - o jogo de estratégia gratuito definitivo. Experimente a guerra tática como nunca antes nos nossos campos de batalha Vevfrontgame onde cada decisão importa.',
    schemaDescription: 'Jogo de arena de batalha multiplayer estratégico com guerra tática, comando de exércitos e batalhas competitivas online',
    whyChooseTitle: 'Por que escolher Vevfrontgame?',
    epicBattlesTitle: 'Batalhas Épicas Vevfrontgame',
    epicBattlesDesc: 'Guerra estratégica Vevfrontgame com profundidade tática',
    multiplayerTitle: 'Multiplayer Vevfrontgame',
    multiplayerDesc: 'Entre nas salas Vevfrontgame ao redor do mundo',
    freeGameTitle: 'Jogo de Estratégia Grátis',
    freeGameDesc: 'Experiência Vevfrontgame completa, totalmente grátis',
    // SEO Content Section
    seoTitle1: 'Domine a Estratégia Vevfrontgame e Guerra Tática',
    seoContent1: 'Vevfrontgame revoluciona os jogos de guerra tática com o seu inovador sistema de batalha Vevfrontgame. O nosso jogo de estratégia multiplayer combina táticas clássicas de campo de batalha com mecânicas de jogo competitivas modernas. Junte-se a milhares de jogadores nas batalhas Vevfrontgame onde o pensamento estratégico, gestão de exércitos e alianças táticas determinam a vitória no campo de batalha.',
    seoTitle2: 'Por que escolher Vevfrontgame como o seu jogo de estratégia?',
    seoContent2: 'Como o principal jogo de estratégia Vevfrontgame, Vevfrontgame oferece profundidade tática incomparável num ambiente completamente gratuito. Comande diversos exércitos, construa alianças estratégicas com outros jogadores e domine a arte da guerra na nossa arena multiplayer dinâmica. Cada partida Vevfrontgame apresenta desafios únicos que testam o seu pensamento estratégico e adaptabilidade no campo de batalha.',
    seoContent3: 'Experimente a evolução dos jogos de estratégia online com o inovador sistema Vevfrontgame do Vevfrontgame. Seja você um veterano experiente em jogos de estratégia ou novo na guerra tática, Vevfrontgame fornece o equilíbrio perfeito entre acessibilidade e profundidade para mantê-lo envolvido durante horas.',
    // FAQ Section
    faqTitle: 'Perguntas Frequentes sobre Vevfrontgame',
    faq1Question: 'O que é Vevfrontgame e como funciona o sistema Vevfrontgame?',
    faq1Answer: 'Vevfrontgame é uma arena de batalha multiplayer estratégica gratuita onde os jogadores comandam exércitos em guerra tática. O sistema Vevfrontgame permite posicionamento dinâmico no campo de batalha e implementação estratégica de exércitos em múltiplas frentes simultaneamente.',
    faq2Question: 'Vevfrontgame é completamente gratuito?',
    faq2Answer: 'Sim! Vevfrontgame é 100% gratuito sem mecânicas pay-to-win. Todas as funcionalidades de jogabilidade estratégica estão disponíveis para todos os jogadores sem requisitos de compra.',
    faq3Question: 'Como me junto às batalhas multiplayer Vevfrontgame?',
    faq3Answer: 'Simplesmente crie uma conta, escolha o seu nome de usuário e bandeira, depois junte-se a salas públicas ou crie salas privadas Vevfrontgame com amigos. O nosso sistema de matchmaking conecta você com jogadores de níveis de habilidade semelhantes.',
    faq4Question: 'O que torna Vevfrontgame diferente de outros jogos de estratégia?',
    faq4Answer: 'Vevfrontgame apresenta o sistema único de batalha Vevfrontgame, guerra tática em tempo real, multiplayer multiplataforma e foco na profundidade estratégica em vez de mecânicas complexas. A nossa abordagem orientada pela comunidade garante melhorias constantes baseadas no feedback dos jogadores.',
    faq5Question: 'Posso jogar Vevfrontgame em dispositivos móveis?',
    faq5Answer: 'Sim! Vevfrontgame foi concebido para funcionar perfeitamente em todos os dispositivos, incluindo celulares, tablets e computadores desktop. Experimente a mesma jogabilidade estratégica em qualquer plataforma.',
    privacyPolicy: 'Política de Privacidade',
    termsOfService: 'Termos de Serviço',
    contact: 'Contato'
  },

  'nl': {
    title: 'Vevfrontgame - Strategiespel | Vevfrontgame Multiplayer Gevechtarena',
    description: 'Vevfrontgame is de ultieme strategische multiplayer gevechtarena. Maak lobby\'s, doe mee aan Vevfrontgame gevechten en domineer in dit gratis strategiespel. Speel Vevfrontgame nu!',
    ogDescription: 'Ervaar intense tactische oorlogsvoering in Vevfrontgame. Commandeer legers, smeed allianties en verover gebieden in dit epische strategiespel.',
    keywords: 'Vevfrontgame, Vevfrontgame, strategiespel, multiplayer, gevechtarena, online spel, tactische oorlogsvoering, gratis spel',
    heroTitle: 'Welkom bij Vevfrontgame',
    heroSubtitle: 'Strategische Multiplayer Gevechtarena',
    heroDescription: 'Commandeer legers, smeed allianties en domineer het slagveld in Vevfrontgame - het ultieme gratis strategiespel. Ervaar tactische oorlogsvoering als nooit tevoren op onze Vevfrontgame slagvelden waar elke beslissing telt.',
    schemaDescription: 'Strategisch multiplayer gevechtarena spel met tactische oorlogsvoering, legercommando en competitieve online gevechten',
    whyChooseTitle: 'Waarom Vevfrontgame kiezen?',
    epicBattlesTitle: 'Epische Vevfrontgame Gevechten',
    epicBattlesDesc: 'Strategische Vevfrontgame oorlogsvoering met tactische diepte',
    multiplayerTitle: 'Vevfrontgame Multiplayer',
    multiplayerDesc: 'Doe mee aan Vevfrontgame lobby\'s wereldwijd',
    freeGameTitle: 'Gratis Strategiespel',
    freeGameDesc: 'Complete Vevfrontgame ervaring, helemaal gratis',
    // SEO Content Section
    seoTitle1: 'Beheers Vevfrontgame Strategie & Tactische Oorlogsvoering',
    seoContent1: 'Vevfrontgame revolutioneert tactische oorlogsspellen met zijn innovatieve Vevfrontgame gevechtsysteem. Ons multiplayer strategiespel combineert klassieke slagveldtactieken met moderne competitieve spelmechanieken. Sluit je aan bij duizenden spelers in Vevfrontgame gevechten waar strategisch denken, legermanagement en tactische allianties de overwinning op het slagveld bepalen.',
    seoTitle2: 'Waarom Vevfrontgame kiezen als jouw strategiespel?',
    seoContent2: 'Als het toonaangevende Vevfrontgame strategiespel biedt Vevfrontgame ongeëvenaarde tactische diepte in een volledig gratis omgeving. Commandeer diverse legers, bouw strategische allianties met andere spelers en beheers de kunst van oorlogsvoering in onze dynamische multiplayer arena. Elk Vevfrontgame gevecht presenteert unieke uitdagingen die je strategisch denken en aanpassingsvermogen op het slagveld testen.',
    seoContent3: 'Ervaar de evolutie van online strategiespellen met Vevfrontgame\'s innovatieve Vevfrontgame systeem. Of je nu een doorgewinterde strategiespelveteraan bent of nieuw in tactische oorlogsvoering, Vevfrontgame biedt de perfecte balans tussen toegankelijkheid en diepte om je urenlang geboeid te houden.',
    // FAQ Section
    faqTitle: 'Veelgestelde vragen over Vevfrontgame',
    faq1Question: 'Wat is Vevfrontgame en hoe werkt het Vevfrontgame systeem?',
    faq1Answer: 'Vevfrontgame is een gratis strategische multiplayer gevechtarena waar spelers legers commanderen in tactische oorlogsvoering. Het Vevfrontgame systeem maakt dynamische slagveldpositionering en strategische legerinzet op meerdere fronten tegelijkertijd mogelijk.',
    faq2Question: 'Is Vevfrontgame volledig gratis?',
    faq2Answer: 'Ja! Vevfrontgame is 100% gratis zonder pay-to-win mechanieken. Alle strategische gameplay-functies zijn beschikbaar voor elke speler zonder aankoopvereisten.',
    faq3Question: 'Hoe doe ik mee aan Vevfrontgame multiplayer gevechten?',
    faq3Answer: 'Maak simpelweg een account aan, kies je gebruikersnaam en vlag, en doe dan mee aan openbare lobby\'s of maak privé Vevfrontgame lobby\'s met vrienden. Ons matchmaking systeem verbindt je met spelers van vergelijkbare vaardigheidsniveaus.',
    faq4Question: 'Wat maakt Vevfrontgame anders dan andere strategiespellen?',
    faq4Answer: 'Vevfrontgame heeft het unieke Vevfrontgame gevechtsysteem, real-time tactische oorlogsvoering, cross-platform multiplayer en een focus op strategische diepte in plaats van complexe mechanieken. Onze community-gedreven aanpak zorgt voor constante verbeteringen op basis van spelersfeedback.',
    faq5Question: 'Kan ik Vevfrontgame spelen op mobiele apparaten?',
    faq5Answer: 'Ja! Vevfrontgame is ontworpen om naadloos te werken op alle apparaten, inclusief mobiele telefoons, tablets en desktopcomputers. Ervaar dezelfde strategische gameplay op elk platform.',
    privacyPolicy: 'Privacybeleid',
    termsOfService: 'Servicevoorwaarden',
    contact: 'Contact'
  },

  'pl': {
    title: 'Vevfrontgame - Gra Strategiczna | Arena Bitew Multiplayer Vevfrontgame',
    description: 'Vevfrontgame to najlepsza strategiczna wieloosobowa arena bitewna. Twórz lobby, dołączaj do bitew Vevfrontgame i dominuj w tej darmowej grze strategicznej. Zagraj w Vevfrontgame teraz!',
    ogDescription: 'Doświadcz intensywnej wojny taktycznej w Vevfrontgame. Dowodź armiami, zawieraj sojusze i zdobywaj terytoria w tej epickiej grze strategicznej.',
    keywords: 'Vevfrontgame, Vevfrontgame, gra strategiczna, multiplayer, arena bitew, gra online, wojna taktyczna, darmowa gra',
    heroTitle: 'Witaj w Vevfrontgame',
    heroSubtitle: 'Strategiczna Arena Bitew Multiplayer',
    heroDescription: 'Dowodź armiami, zawieraj sojusze i dominuj na polu bitwy w Vevfrontgame - najlepszej darmowej grze strategicznej. Doświadcz wojny taktycznej jak nigdy wcześniej na naszych polach bitew Vevfrontgame, gdzie każda decyzja ma znaczenie.',
    schemaDescription: 'Strategiczna gra multiplayer z areną bitew, wojną taktyczną, dowodzeniem armiami i konkurencyjnymi bitwami online',
    whyChooseTitle: 'Dlaczego wybrać Vevfrontgame?',
    epicBattlesTitle: 'Epickie Bitwy Vevfrontgame',
    epicBattlesDesc: 'Strategiczna wojna Vevfrontgame z taktyczną głębią',
    multiplayerTitle: 'Multiplayer Vevfrontgame',
    multiplayerDesc: 'Dołącz do lobby Vevfrontgame na całym świecie',
    freeGameTitle: 'Darmowa Gra Strategiczna',
    freeGameDesc: 'Pełne doświadczenie Vevfrontgame, całkowicie za darmo',
    // SEO Content Section
    seoTitle1: 'Opanuj Strategię Vevfrontgame i Wojnę Taktyczną',
    seoContent1: 'Vevfrontgame rewolucjonizuje gry z wojną taktyczną dzięki innowacyjnemu systemowi bitew Vevfrontgame. Nasza strategiczna gra multiplayer łączy klasyczne taktyki pola bitwy z nowoczesnymi mechanizmami gier konkurencyjnych. Dołącz do tysięcy graczy w bitwach Vevfrontgame, gdzie strategiczne myślenie, zarządzanie armiami i taktyczne sojusze determinują zwycięstwo na polu bitwy.',
    seoTitle2: 'Dlaczego wybrać Vevfrontgame jako swoją grę strategiczną?',
    seoContent2: 'Jako wiodąca gra strategiczna Vevfrontgame, Vevfrontgame oferuje niezrównaną głębię taktyczną w całkowicie darmowym środowisku. Dowodź różnorodnymi armiami, buduj strategiczne sojusze z innymi graczami i opanuj sztukę wojowania na naszej dynamicznej arenie multiplayer. Każdy mecz Vevfrontgame przedstawia unikalne wyzwania, które testują twoje strategiczne myślenie i zdolność adaptacji na polu bitwy.',
    seoContent3: 'Doświadcz ewolucji gier strategicznych online z innowacyjnym systemem Vevfrontgame od Vevfrontgame. Niezależnie od tego, czy jesteś doświadczonym weteranem gier strategicznych, czy nowicjuszem w wojnie taktycznej, Vevfrontgame zapewnia idealną równowagę między dostępnością a głębią, aby trzymać cię w napięciu przez wiele godzin.',
    // FAQ Section
    faqTitle: 'Najczęściej zadawane pytania o Vevfrontgame',
    faq1Question: 'Co to jest Vevfrontgame i jak działa system Vevfrontgame?',
    faq1Answer: 'Vevfrontgame to darmowa strategiczna arena bitew multiplayer, gdzie gracze dowodzą armiami w wojnie taktycznej. System Vevfrontgame umożliwia dynamiczne pozycjonowanie na polu bitwy i strategiczne rozmieszczenie armii na wielu frontach jednocześnie.',
    faq2Question: 'Czy Vevfrontgame jest całkowicie darmowy?',
    faq2Answer: 'Tak! Vevfrontgame jest w 100% darmowy bez mechanizmów pay-to-win. Wszystkie funkcje strategicznej rozgrywki są dostępne dla każdego gracza bez wymagań zakupowych.',
    faq3Question: 'Jak dołączyć do bitew multiplayer Vevfrontgame?',
    faq3Answer: 'Po prostu załóż konto, wybierz swoją nazwę użytkownika i flagę, a następnie dołącz do publicznych lobby lub twórz prywatne lobby Vevfrontgame z przyjaciółmi. Nasz system doboru graczy łączy cię z graczami o podobnym poziomie umiejętności.',
    faq4Question: 'Co wyróżnia Vevfrontgame spośród innych gier strategicznych?',
    faq4Answer: 'Vevfrontgame oferuje unikalny system bitew Vevfrontgame, wojnę taktyczną w czasie rzeczywistym, wieloplatformowy multiplayer i skupienie na głębi strategicznej zamiast skomplikowanych mechanizmów. Nasze podejście zorientowane na społeczność zapewnia ciągłe ulepszenia oparte na opiniach graczy.',
    faq5Question: 'Czy mogę grać w Vevfrontgame na urządzeniach mobilnych?',
    faq5Answer: 'Tak! Vevfrontgame został zaprojektowany tak, aby działał płynnie na wszystkich urządzeniach, w tym telefonach komórkowych, tabletach i komputerach stacjonarnych. Doświadcz tej samej strategicznej rozgrywki na dowolnej platformie.',
    privacyPolicy: 'Polityka Prywatności',
    termsOfService: 'Warunki Użytkowania',
    contact: 'Kontakt'
  },

  'tr': {
    title: 'Vevfrontgame - Strateji Oyunu | Vevfrontgame Çok Oyunculu Savaş Arenası',
    description: 'Vevfrontgame en üst düzey stratejik çok oyunculu savaş arenasıdır. Lobby\'ler oluşturun, Vevfrontgame savaşlarına katılın ve bu ücretsiz strateji oyununda hâkim olun. Vevfrontgame\'u şimdi oynayın!',
    ogDescription: 'Vevfrontgame\'ta yoğun taktik savaşı deneyimleyin. Ordulara komuta edin, ittifaklar kurun ve bu epik strateji oyununda toprakları fethedin.',
    keywords: 'Vevfrontgame, Vevfrontgame, strateji oyunu, çok oyunculu, savaş arenası, çevrimiçi oyun, taktik savaş, ücretsiz oyun',
    heroTitle: 'Vevfrontgame\'a Hoş Geldiniz',
    heroSubtitle: 'Stratejik Çok Oyunculu Savaş Arenası',
    heroDescription: 'Vevfrontgame\'ta ordulara komuta edin, ittifaklar kurun ve savaş alanına hükmedin - en iyi ücretsiz strateji oyunu. Her kararın önemli olduğu Vevfrontgame savaş alanlarımızda taktik savaşı daha önce hiç olmadığı gibi deneyimleyin.',
    schemaDescription: 'Taktik savaş, ordu komutanlığı ve rekabetçi çevrimiçi savaşlar içeren stratejik çok oyunculu savaş arenası oyunu',
    whyChooseTitle: 'Neden Vevfrontgame\'u Seçmelisiniz?',
    epicBattlesTitle: 'Epik Vevfrontgame Savaşları',
    epicBattlesDesc: 'Taktik derinlikle stratejik Vevfrontgame savaşı',
    multiplayerTitle: 'Vevfrontgame Çok Oyunculu',
    multiplayerDesc: 'Dünya çapında Vevfrontgame lobilerine katılın',
    freeGameTitle: 'Ücretsiz Strateji Oyunu',
    freeGameDesc: 'Tam Vevfrontgame deneyimi, tamamen ücretsiz',
    // SEO Content Section
    seoTitle1: 'Vevfrontgame Stratejisini ve Taktik Savaşı Ustalaştırın',
    seoContent1: 'Vevfrontgame, yenilikçi Vevfrontgame savaş sistemiyle taktik savaş oyunlarında devrim yaratıyor. Çok oyunculu strateji oyunumuz, klasik savaş alanı taktiklerini modern rekabetçi oyun mekanikleriyle birleştiriyor. Stratejik düşünce, ordu yönetimi ve taktik ittifakların savaş alanında zaferi belirlediği Vevfrontgame savaşlarında binlerce oyuncuya katılın.',
    seoTitle2: 'Neden strateji oyununuz olarak Vevfrontgame\'u seçmelisiniz?',
    seoContent2: 'Önde gelen Vevfrontgame strateji oyunu olarak Vevfrontgame, tamamen ücretsiz bir ortamda eşsiz taktik derinlik sunuyor. Çeşitli ordulara komuta edin, diğer oyuncularla stratejik ittifaklar kurun ve dinamik çok oyunculu arenamızda savaş sanatında ustalaşın. Her Vevfrontgame maçı, stratejik düşüncenizi ve savaş alanındaki uyum yeteneğinizi test eden benzersiz zorluklar sunar.',
    seoContent3: 'Vevfrontgame\'un yenilikçi Vevfrontgame sistemiyle çevrimiçi strateji oyunlarının evrimini deneyimleyin. İster deneyimli bir strateji oyunu gazisi olun, ister taktik savaşta yeni olun, Vevfrontgame sizi saatlerce meşgul edecek erişilebilirlik ve derinlik arasında mükemmel dengeyi sağlar.',
    // FAQ Section
    faqTitle: 'Vevfrontgame Hakkında Sık Sorulan Sorular',
    faq1Question: 'Vevfrontgame nedir ve Vevfrontgame sistemi nasıl çalışır?',
    faq1Answer: 'Vevfrontgame, oyuncuların taktik savaşta ordulara komuta ettiği ücretsiz bir stratejik çok oyunculu savaş arenasıdır. Vevfrontgame sistemi, dinamik savaş alanı konumlandırması ve aynı anda birden fazla cephede stratejik ordu dağıtımı sağlar.',
    faq2Question: 'Vevfrontgame tamamen ücretsiz mi?',
    faq2Answer: 'Evet! Vevfrontgame, ödeme-kazan mekanikleri olmadan %100 ücretsizdir. Tüm stratejik oynanış özellikleri, satın alma gereksinimleri olmadan her oyuncu için mevcuttur.',
    faq3Question: 'Vevfrontgame çok oyunculu savaşlarına nasıl katılırım?',
    faq3Answer: 'Basitçe bir hesap oluşturun, kullanıcı adınızı ve bayrağınızı seçin, ardından halka açık lobilere katılın veya arkadaşlarınızla özel Vevfrontgame lobileri oluşturun. Eşleştirme sistemimiz sizi benzer beceri seviyelerindeki oyuncularla bağlar.',
    faq4Question: 'Vevfrontgame\'u diğer strateji oyunlarından farklı kılan nedir?',
    faq4Answer: 'Vevfrontgame, benzersiz Vevfrontgame savaş sistemi, gerçek zamanlı taktik savaş, platformlar arası çok oyunculu ve karmaşık mekanikler yerine stratejik derinliğe odaklanma özelliklerine sahiptir. Topluluk odaklı yaklaşımımız, oyuncu geri bildirimlerine dayalı sürekli iyileştirmeler sağlar.',
    faq5Question: 'Vevfrontgame\'u mobil cihazlarda oynayabilir miyim?',
    faq5Answer: 'Evet! Vevfrontgame, cep telefonları, tabletler ve masaüstü bilgisayarlar dahil tüm cihazlarda sorunsuz çalışacak şekilde tasarlanmıştır. Herhangi bir platformda aynı stratejik oynanışı deneyimleyin.',
    privacyPolicy: 'Gizlilik Politikası',
    termsOfService: 'Hizmet Şartları',
    contact: 'İletişim'
  },
  'ko': {
    title: 'Vevfrontgame - 전략 게임 | Vevfrontgame 멀티플레이어 전투 아레나',
    description: 'Vevfrontgame는 최고의 전략적 멀티플레이어 전투 아레나입니다. 로비를 생성하고, Vevfrontgame 전투에 참여하여 이 무료 전략 게임에서 지배하세요. 지금 Vevfrontgame를 플레이하세요!',
    ogDescription: 'Vevfrontgame에서 강렬한 전술 전쟁을 경험하세요. 군대를 지휘하고, 동맹을 맺고, 이 서사시적인 전략 게임에서 영토를 정복하세요.',
    keywords: 'Vevfrontgame, Vevfrontgame, 전략 게임, 멀티플레이어, 전투 아레나, 온라인 게임, 전술 전쟁, 무료 게임',
    heroTitle: 'Vevfrontgame에 오신 것을 환영합니다',
    heroSubtitle: '전략적 멀티플레이어 전투 아레나',
    heroDescription: 'Vevfrontgame에서 군대를 지휘하고, 동맹을 맺고, 전장을 지배하세요 - 최고의 무료 전략 게임. 모든 결정이 중요한 Vevfrontgame 전장에서 이전과는 다른 전술 전쟁을 경험하세요.',
    schemaDescription: '전술 전쟁, 군대 지휘 및 경쟁적인 온라인 전투를 특징으로 하는 전략적 멀티플레이어 전투 아레나 게임',
    whyChooseTitle: '왜 Vevfrontgame를 선택해야 할까요?',
    epicBattlesTitle: '에픽 Vevfrontgame 전투',
    epicBattlesDesc: '전술적 깊이를 갖춘 전략적 Vevfrontgame 전쟁',
    multiplayerTitle: 'Vevfrontgame 멀티플레이어',
    multiplayerDesc: '전 세계 Vevfrontgame 로비에 참여하세요',
    freeGameTitle: '무료 전략 게임',
    freeGameDesc: '완전한 Vevfrontgame 경험, 완전 무료',
    // SEO Content Section
    seoTitle1: 'Vevfrontgame 전략과 전술 전쟁을 마스터하세요',
    seoContent1: 'Vevfrontgame는 혁신적인 Vevfrontgame 전투 시스템으로 전술 전쟁 게임에 혁명을 일으킵니다. 우리의 멀티플레이어 전략 게임은 클래식한 전장 전술과 현대적인 경쟁 게임 메커니즘을 결합합니다. 전략적 사고, 군대 관리, 그리고 전술적 동맹이 전장에서의 승리를 결정하는 Vevfrontgame 전투에서 수천 명의 플레이어와 함께하세요.',
    seoTitle2: '왜 Vevfrontgame를 당신의 전략 게임으로 선택해야 할까요?',
    seoContent2: '최고의 Vevfrontgame 전략 게임으로서, Vevfrontgame는 완전 무료 환경에서 비교할 수 없는 전술적 깊이를 제공합니다. 다양한 군대를 지휘하고, 다른 플레이어들과 전략적 동맹을 구축하며, 우리의 역동적인 멀티플레이어 아레나에서 전쟁의 기술을 마스터하세요. 모든 Vevfrontgame 경기는 당신의 전략적 사고와 전장 적응력을 시험하는 독특한 도전을 제시합니다.',
    seoContent3: 'Vevfrontgame의 혁신적인 Vevfrontgame 시스템으로 온라인 전략 게임의 진화를 경험하세요. 숙련된 전략 게임 베테랑이든 전술 전쟁의 초보자든, Vevfrontgame는 수 시간 동안 당신을 몰입시킬 접근성과 깊이의 완벽한 균형을 제공합니다.',
    // FAQ Section
    faqTitle: 'Vevfrontgame에 대한 자주 묻는 질문',
    faq1Question: 'Vevfrontgame란 무엇이며 Vevfrontgame 시스템은 어떻게 작동하나요?',
    faq1Answer: 'Vevfrontgame는 플레이어가 전술 전쟁에서 군대를 지휘하는 무료 전략적 멀티플레이어 전투 아레나입니다. Vevfrontgame 시스템은 동적 전장 포지셔닝과 여러 전선에서 동시에 전략적 군대 배치를 가능하게 합니다.',
    faq2Question: 'Vevfrontgame는 완전히 무료인가요?',
    faq2Answer: '네! Vevfrontgame는 페이 투 윈 메커니즘 없이 100% 무료입니다. 모든 전략적 게임플레이 기능은 구매 요구사항 없이 모든 플레이어가 이용할 수 있습니다.',
    faq3Question: 'Vevfrontgame 멀티플레이어 전투에 어떻게 참여하나요?',
    faq3Answer: '계정을 만들고, 사용자명과 국기를 선택한 후, 공개 로비에 참여하거나 친구들과 비공개 Vevfrontgame 로비를 만드세요. 우리의 매치메이킹 시스템이 비슷한 실력 수준의 플레이어들과 연결해드립니다.',
    faq4Question: 'Vevfrontgame를 다른 전략 게임들과 다르게 만드는 것은 무엇인가요?',
    faq4Answer: 'Vevfrontgame는 독특한 Vevfrontgame 전투 시스템, 실시간 전술 전쟁, 크로스 플랫폼 멀티플레이어, 그리고 복잡한 메커니즘보다는 전략적 깊이에 중점을 둡니다. 우리의 커뮤니티 중심 접근법은 플레이어 피드백을 바탕으로 지속적인 개선을 보장합니다.',
    faq5Question: '모바일 기기에서 Vevfrontgame를 플레이할 수 있나요?',
    faq5Answer: '네! Vevfrontgame는 휴대폰, 태블릿, 데스크톱 컴퓨터를 포함한 모든 기기에서 원활하게 작동하도록 설계되었습니다. 어떤 플랫폼에서든 동일한 전략적 게임플레이를 경험하세요.',
    privacyPolicy: '개인정보 처리방침',
    termsOfService: '서비스 약관',
    contact: '연락처'
  },

  'ja': {
    title: 'Vevfrontgame - 戦略ゲーム | Vevfrontgame マルチプレイヤーバトルアリーナ',
    description: 'Vevfrontgameは究極の戦略的マルチプレイヤーバトルアリーナです。ロビーを作成し、Vevfrontgameの戦いに参加して、この無料戦略ゲームで支配しましょう。今すぐVevfrontgameをプレイしよう！',
    ogDescription: 'Vevfrontgameで激しい戦術戦争を体験してください。軍隊を指揮し、同盟を築き、この壮大な戦略ゲームで領土を征服しましょう。',
    keywords: 'Vevfrontgame, Vevfrontgame, 戦略ゲーム, マルチプレイヤー, バトルアリーナ, オンラインゲーム, 戦術戦争, 無料ゲーム',
    heroTitle: 'Vevfrontgameへようこそ',
    heroSubtitle: '戦略的マルチプレイヤーバトルアリーナ',
    heroDescription: 'Vevfrontgameで軍隊を指揮し、同盟を築き、戦場を支配しましょう - 究極の無料戦略ゲーム。すべての決定が重要なVevfrontgame戦場でこれまでにない戦術戦争を体験してください。',
    schemaDescription: '戦術戦争、軍隊指揮、競争的なオンラインバトルを特徴とする戦略的マルチプレイヤーバトルアリーナゲーム',
    whyChooseTitle: 'なぜVevfrontgameを選ぶべきか？',
    epicBattlesTitle: 'エピックなVevfrontgameバトル',
    epicBattlesDesc: '戦術的な深さを持つ戦略的Vevfrontgame戦争',
    multiplayerTitle: 'Vevfrontgameマルチプレイヤー',
    multiplayerDesc: '世界中のVevfrontgameロビーに参加',
    freeGameTitle: '無料戦略ゲーム',
    freeGameDesc: '完全なVevfrontgame体験、完全無料',
    // SEO Content Section
    seoTitle1: 'Vevfrontgame戦略と戦術戦争をマスターしよう',
    seoContent1: 'Vevfrontgameは革新的なVevfrontgameバトルシステムで戦術戦争ゲームに革命をもたらします。私たちのマルチプレイヤー戦略ゲームは、クラシックな戦場戦術と現代の競争的ゲームメカニクスを組み合わせています。戦略的思考、軍隊管理、そして戦術的同盟が戦場での勝利を決定するVevfrontgameバトルで数千人のプレイヤーと共に戦いましょう。',
    seoTitle2: 'なぜVevfrontgameをあなたの戦略ゲームとして選ぶべきか？',
    seoContent2: '主要なVevfrontgame戦略ゲームとして、Vevfrontgameは完全無料環境で比類のない戦術的深さを提供します。多様な軍隊を指揮し、他のプレイヤーと戦略的同盟を築き、ダイナミックなマルチプレイヤーアリーナで戦争の芸術をマスターしてください。すべてのVevfrontgameマッチは、あなたの戦略的思考と戦場での適応力をテストするユニークな挑戦を提示します。',
    seoContent3: 'Vevfrontgameの革新的なVevfrontgameシステムでオンライン戦略ゲームの進化を体験してください。熟練した戦略ゲームベテランでも戦術戦争の初心者でも、Vevfrontgameは何時間もあなたを夢中にさせるアクセシビリティと深さの完璧なバランスを提供します。',
    // FAQ Section
    faqTitle: 'Vevfrontgameについてよくある質問',
    faq1Question: 'Vevfrontgameとは何ですか？Vevfrontgameシステムはどのように機能しますか？',
    faq1Answer: 'Vevfrontgameは、プレイヤーが戦術戦争で軍隊を指揮する無料の戦略的マルチプレイヤーバトルアリーナです。Vevfrontgameシステムは、動的戦場ポジショニングと複数の戦線での同時戦略的軍隊展開を可能にします。',
    faq2Question: 'Vevfrontgameは完全に無料ですか？',
    faq2Answer: 'はい！Vevfrontgameはペイ・トゥ・ウィンメカニクスなしで100％無料です。すべての戦略的ゲームプレイ機能は、購入要件なしですべてのプレイヤーが利用できます。',
    faq3Question: 'Vevfrontgameマルチプレイヤーバトルにはどうやって参加しますか？',
    faq3Answer: 'アカウントを作成し、ユーザー名と国旗を選択してから、パブリックロビーに参加するか、友達とプライベートVevfrontgameロビーを作成してください。私たちのマッチメイキングシステムが同じスキルレベルのプレイヤーと接続します。',
    faq4Question: 'Vevfrontgameを他の戦略ゲームと違うものにしているのは何ですか？',
    faq4Answer: 'Vevfrontgameは、ユニークなVevfrontgameバトルシステム、リアルタイム戦術戦争、クロスプラットフォームマルチプレイヤー、そして複雑なメカニクスよりも戦略的深さに焦点を当てています。私たちのコミュニティ主導のアプローチは、プレイヤーフィードバックに基づく継続的な改善を保証します。',
    faq5Question: 'モバイルデバイスでVevfrontgameをプレイできますか？',
    faq5Answer: 'はい！Vevfrontgameは携帯電話、タブレット、デスクトップコンピューターを含むすべてのデバイスでシームレスに動作するよう設計されています。どのプラットフォームでも同じ戦略的ゲームプレイを体験してください。',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    contact: 'お問い合わせ'
  },
   'zh': {
    title: 'Vevfrontgame - 策略游戏 | Vevfrontgame 多人战斗竞技场',
    description: 'Vevfrontgame 是终极战略多人战斗竞技场。创建大厅，加入 Vevfrontgame 战斗，在这款免费策略游戏中占据主导地位。立即玩 Vevfrontgame！',
    ogDescription: '在 Vevfrontgame 中体验激烈的战术战争。指挥军队，建立联盟，在这款史诗般的策略游戏中征服领土。',
    keywords: 'Vevfrontgame, Vevfrontgame, 策略游戏, 多人游戏, 战斗竞技场, 在线游戏, 战术战争, 免费游戏',
    heroTitle: '欢迎来到 Vevfrontgame',
    heroSubtitle: '战略多人战斗竞技场',
    heroDescription: '在 Vevfrontgame 中指挥军队、建立联盟并主宰战场 - 终极免费策略游戏。在我们的 Vevfrontgame 战场上体验前所未有的战术战争，每个决定都至关重要。',
    schemaDescription: '具有战术战争、军队指挥和竞争性在线战斗的战略多人战斗竞技场游戏',
    whyChooseTitle: '为什么选择 Vevfrontgame？',
    epicBattlesTitle: '史诗级 Vevfrontgame 战斗',
    epicBattlesDesc: '具有战术深度的战略 Vevfrontgame 战争',
    multiplayerTitle: 'Vevfrontgame 多人游戏',
    multiplayerDesc: '加入全球 Vevfrontgame 大厅',
    freeGameTitle: '免费策略游戏',
    freeGameDesc: '完整的 Vevfrontgame 体验，完全免费',
    seoTitle1: '掌握 Vevfrontgame 策略与战术战争',
    seoContent1: 'Vevfrontgame 通过其创新的 Vevfrontgame 战斗系统彻底改变了战术战争游戏。我们的多人策略游戏将经典战场战术与现代竞技游戏机制相结合。在 Vevfrontgame 战斗中加入数千名玩家，战略思维、军队管理和战术联盟决定战场上的胜利。',
    seoTitle2: '为什么选择 Vevfrontgame 作为您的策略游戏？',
    seoContent2: '作为首屈一指的 Vevfrontgame 策略游戏，Vevfrontgame 在完全免费的环境中提供无与伦比的战术深度。指挥多样化的军队，与其他玩家建立战略联盟，在我们的动态多人竞技场中掌握战争艺术。每场 Vevfrontgame 比赛都呈现独特的挑战，考验您的战略思维和战场适应能力。',
    seoContent3: '通过 Vevfrontgame 创新的 Vevfrontgame 系统体验在线策略游戏的演变。无论您是经验丰富的策略游戏老手还是战术战争新手，Vevfrontgame 都提供了可访问性和深度的完美平衡，让您沉浸数小时。',
    faqTitle: '关于 Vevfrontgame 的常见问题',
    faq1Question: '什么是 Vevfrontgame，Vevfrontgame 系统如何工作？',
    faq1Answer: 'Vevfrontgame 是一款免费的战略多人战斗竞技场，玩家在战术战争中指挥军队。Vevfrontgame 系统允许动态战场定位和同时在多个战线上进行战略军队部署。',
    faq2Question: 'Vevfrontgame 完全免费吗？',
    faq2Answer: '是的！Vevfrontgame 是 100% 免费游戏，没有付费获胜机制。所有战略游戏功能均可供每位玩家使用，无需任何购买要求。',
    faq3Question: '如何加入 Vevfrontgame 多人战斗？',
    faq3Answer: '只需创建一个账户，选择您的用户名和旗帜，然后加入公共大厅或与朋友创建私人 Vevfrontgame 大厅。我们的匹配系统将您与技能水平相似的玩家连接起来。',
    faq4Question: '是什么让 Vevfrontgame 与其他策略游戏不同？',
    faq4Answer: 'Vevfrontgame 具有独特的 Vevfrontgame 战斗系统、实时战术战争、跨平台多人游戏，并专注于战略深度而非复杂机制。我们的社区驱动方法确保根据玩家反馈持续改进。',
    faq5Question: '我可以在移动设备上玩 Vevfrontgame 吗？',
    faq5Answer: '可以！Vevfrontgame 旨在无缝运行于所有设备，包括手机、平板电脑和台式电脑。在任何平台上体验相同的战略游戏。',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    contact: '联系我们'
  }
};

// Fonction pour générer le HTML pour une langue

function generateHTMLForLanguage(baseHTML, lang) {
  let html = baseHTML;
  const translations = SEO_TRANSLATIONS[lang] || SEO_TRANSLATIONS['en'];
  const langConfig = LANGUAGES[lang] || LANGUAGES['en'];

  // Remplacer l'attribut lang
  html = html.replace(/<html[^>]*>/, `<html lang="${lang}">`);

  // Remplacer le titre
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${translations.title}</title>`
  );

  // Remplacer la meta description - avec le flag 'g' pour remplacer TOUTES les occurrences
  html = html.replace(
    /<meta name="description" content="[^"]*"/g,
    `<meta name="description" content="${translations.description}"`
  );

  // Remplacer les meta keywords - avec le flag 'g' pour remplacer TOUTES les occurrences
  html = html.replace(
    /<meta name="keywords" content="[^"]*"/g,
    `<meta name="keywords" content="${translations.keywords}"`
  );

  // Remplacer les meta og - avec le flag 'g' pour remplacer TOUTES les occurrences
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/g,
    `<meta property="og:title" content="${translations.title}"`
  );

  // IMPORTANT: Utiliser ogDescription au lieu de description pour og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/g,
    `<meta property="og:description" content="${translations.ogDescription}"`
  );

  // Remplacer og:url (sans trailing slash sauf pour la racine)
  const ogUrl = lang === 'en' ? 'https://example.invalid/' : `https://example.invalid/${lang}`;
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/g,
    `<meta property="og:url" content="${ogUrl}"`
  );

  // Remplacer og:locale
  html = html.replace(
    /<meta property="og:locale" content="[^"]*"/g,
    `<meta property="og:locale" content="${langConfig.locale}"`
  );

  // Remplacer les meta Twitter - avec le flag 'g' pour remplacer TOUTES les occurrences
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/g,
    `<meta name="twitter:title" content="${translations.title}"`
  );

  // IMPORTANT: Utiliser ogDescription pour twitter:description aussi
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/g,
    `<meta name="twitter:description" content="${translations.ogDescription}"`
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

  // Remplacer le "Why Choose Vevfrontgame?"
  html = html.replace(
    /<h3>Why Choose Vevfrontgame\?<\/h3>/,
    `<h3>${translations.whyChooseTitle}</h3>`
  );

  // Remplacer les feature cards
  html = html.replace(
    /<h4 class="feature-title">Epic Vevfrontgame Battles<\/h4>/,
    `<h4 class="feature-title">${translations.epicBattlesTitle}</h4>`
  );

  html = html.replace(
    /<p class="feature-desc">Strategic Vevfrontgame warfare with tactical depth<\/p>/,
    `<p class="feature-desc">${translations.epicBattlesDesc}</p>`
  );

  html = html.replace(
    /<h4 class="feature-title">Vevfrontgame Multiplayer<\/h4>/,
    `<h4 class="feature-title">${translations.multiplayerTitle}</h4>`
  );

  html = html.replace(
    /<p class="feature-desc">Join Vevfrontgame lobbies worldwide<\/p>/,
    `<p class="feature-desc">${translations.multiplayerDesc}</p>`
  );

  html = html.replace(
    /<h4 class="feature-title">Free Strategy Game<\/h4>/,
    `<h4 class="feature-title">${translations.freeGameTitle}</h4>`
  );

  html = html.replace(
    /<p class="feature-desc">Complete Vevfrontgame experience, totally free<\/p>/,
    `<p class="feature-desc">${translations.freeGameDesc}</p>`
  );

  // Remplacer la section SEO Content
  // Titre principal SEO
  html = html.replace(
    /<h2>Master Vevfrontgame Strategy & Tactical Warfare<\/h2>/,
    `<h2>${translations.seoTitle1}</h2>`
  );

  // Premier paragraphe SEO
  html = html.replace(
    /<p>\s*Vevfrontgame revolutionizes tactical warfare[\s\S]*?<\/p>/,
    `<p>\n          ${translations.seoContent1}\n        </p>`
  );

  // Sous-titre SEO
  html = html.replace(
    /<h3>Why Choose Vevfrontgame as Your Strategy Game\?<\/h3>/,
    `<h3>${translations.seoTitle2}</h3>`
  );

  // Deuxième paragraphe SEO
  html = html.replace(
    /<p>\s*As the premier Vevfrontgame strategy game[\s\S]*?<\/p>/,
    `<p>\n          ${translations.seoContent2}\n        </p>`
  );

  // Troisième paragraphe SEO
  html = html.replace(
    /<p>\s*Experience the evolution of online strategy gaming[\s\S]*?<\/p>/,
    `<p>\n          ${translations.seoContent3}\n        </p>`
  );

  // Remplacer la section FAQ
  // Titre FAQ
  html = html.replace(
    /<h2 class="faq-title">Frequently Asked Questions About Vevfrontgame<\/h2>/,
    `<h2 class="faq-title">${translations.faqTitle}</h2>`
  );

  // FAQ 1 - Question
  html = html.replace(
    /<div class="faq-question"[^>]*>\s*What is Vevfrontgame and how does the Vevfrontgame system work\?\s*<\/div>/,
    `<div class="faq-question" onclick="toggleFAQ(this)">\n            ${translations.faq1Question}\n          </div>`
  );

  // FAQ 1 - Réponse
  html = html.replace(
    /<div class="faq-answer"[^>]*>\s*Vevfrontgame is a free-to-play strategic multiplayer[\s\S]*?The Vevfrontgame system[\s\S]*?simultaneously\.\s*<\/div>/,
    `<div class="faq-answer" style="display: none;">\n            ${translations.faq1Answer}\n          </div>`
  );

  // FAQ 2 - Question
  html = html.replace(
    /<div class="faq-question"[^>]*>\s*Is Vevfrontgame completely free to play\?\s*<\/div>/,
    `<div class="faq-question" onclick="toggleFAQ(this)">\n            ${translations.faq2Question}\n          </div>`
  );

  // FAQ 2 - Réponse
  html = html.replace(
    /<div class="faq-answer"[^>]*>\s*Yes! Vevfrontgame is 100% free-to-play[\s\S]*?purchase requirements\.\s*<\/div>/,
    `<div class="faq-answer" style="display: none;">\n            ${translations.faq2Answer}\n          </div>`
  );

  // FAQ 3 - Question
  html = html.replace(
    /<div class="faq-question"[^>]*>\s*How do I join Vevfrontgame multiplayer battles\?\s*<\/div>/,
    `<div class="faq-question" onclick="toggleFAQ(this)">\n            ${translations.faq3Question}\n          </div>`
  );

  // FAQ 3 - Réponse
  html = html.replace(
    /<div class="faq-answer"[^>]*>\s*Simply create an account[\s\S]*?skill levels\.\s*<\/div>/,
    `<div class="faq-answer" style="display: none;">\n            ${translations.faq3Answer}\n          </div>`
  );

  // FAQ 4 - Question
  html = html.replace(
    /<div class="faq-question"[^>]*>\s*What makes Vevfrontgame different from other strategy games\?\s*<\/div>/,
    `<div class="faq-question" onclick="toggleFAQ(this)">\n            ${translations.faq4Question}\n          </div>`
  );

  // FAQ 4 - Réponse
  html = html.replace(
    /<div class="faq-answer"[^>]*>\s*Vevfrontgame features the unique Vevfrontgame[\s\S]*?player feedback\.\s*<\/div>/,
    `<div class="faq-answer" style="display: none;">\n            ${translations.faq4Answer}\n          </div>`
  );

  // FAQ 5 - Question
  html = html.replace(
    /<div class="faq-question"[^>]*>\s*Can I play Vevfrontgame on mobile devices\?\s*<\/div>/,
    `<div class="faq-question" onclick="toggleFAQ(this)">\n            ${translations.faq5Question}\n          </div>`
  );

  // FAQ 5 - Réponse
  html = html.replace(
    /<div class="faq-answer"[^>]*>\s*Yes! Vevfrontgame is designed[\s\S]*?any platform\.\s*<\/div>/,
    `<div class="faq-answer" style="display: none;">\n            ${translations.faq5Answer}\n          </div>`
  );

  // Remplacer les liens du footer
  html = html.replace(
    />Privacy Policy</g,
    `>${translations.privacyPolicy}<`
  );

  html = html.replace(
    />Terms of Service</g,
    `>${translations.termsOfService}<`
  );

  html = html.replace(
    />Contact</g,
    `>${translations.contact}<`
  );



  // Remplacer l'URL canonique
  const canonicalUrl = lang === 'en' ? 'https://example.invalid' : `https://example.invalid/${lang}`;
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${canonicalUrl}"`
  );

  // Remplacer le JSON-LD Schema
  const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (schemaMatch) {
    try {
      const schema = JSON.parse(schemaMatch[1]);

      // Traduire les propriétés du schema
      schema.description = translations.schemaDescription;
      schema.url = ogUrl;

      // Ajouter l'image (uniforme pour toutes les langues)
      schema.image = "https://example.invalid/images/logo-main-1200x630.jpg";

      // Ajouter les avis agrégés (uniformes pour toutes les langues)
      schema.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "897",
        "bestRating": "5",
        "worstRating": "1"
      };

      // Traduire les genres selon la langue
      const schemaTranslations = {
        'fr': {
          genre: ["Stratégie", "Tactique", "Multijoueur"],
          gamePlatform: ["Navigateur Web", "PC", "Mobile"],
          gameLocation: "En ligne",
          numberOfPlayers: "Multijoueur",
          applicationCategory: "Jeu",
          operatingSystem: "Tous",
          priceCurrency: "EUR"
        },
        'de': {
          genre: ["Strategie", "Taktik", "Mehrspieler"],
          gamePlatform: ["Webbrowser", "PC", "Mobil"],
          gameLocation: "Online",
          numberOfPlayers: "Mehrspieler",
          applicationCategory: "Spiel",
          operatingSystem: "Alle",
          priceCurrency: "EUR"
        },
        'es': {
          genre: ["Estrategia", "Táctica", "Multijugador"],
          gamePlatform: ["Navegador Web", "PC", "Móvil"],
          gameLocation: "En línea",
          numberOfPlayers: "Multijugador",
          applicationCategory: "Juego",
          operatingSystem: "Todos",
          priceCurrency: "EUR"
        },
        'it': {
          genre: ["Strategia", "Tattica", "Multigiocatore"],
          gamePlatform: ["Browser Web", "PC", "Mobile"],
          gameLocation: "Online",
          numberOfPlayers: "Multigiocatore",
          applicationCategory: "Gioco",
          operatingSystem: "Tutti",
          priceCurrency: "EUR"
        },
        'pt': {
          genre: ["Estratégia", "Tática", "Multijogador"],
          gamePlatform: ["Navegador Web", "PC", "Móvel"],
          gameLocation: "Online",
          numberOfPlayers: "Multijogador",
          applicationCategory: "Jogo",
          operatingSystem: "Todos",
          priceCurrency: "EUR"
        },
        'pt-br': {
          genre: ["Estratégia", "Tática", "Multijogador"],
          gamePlatform: ["Navegador Web", "PC", "Móvel"],
          gameLocation: "Online",
          numberOfPlayers: "Multijogador",
          applicationCategory: "Jogo",
          operatingSystem: "Todos",
          priceCurrency: "BRL"
        },
        'ru': {
          genre: ["Стратегия", "Тактика", "Многопользовательская"],
          gamePlatform: ["Веб-браузер", "ПК", "Мобильный"],
          gameLocation: "Онлайн",
          numberOfPlayers: "Многопользовательская",
          applicationCategory: "Игра",
          operatingSystem: "Все",
          priceCurrency: "RUB"
        },
        'nl': {
          genre: ["Strategie", "Tactiek", "Multiplayer"],
          gamePlatform: ["Webbrowser", "PC", "Mobiel"],
          gameLocation: "Online",
          numberOfPlayers: "Multiplayer",
          applicationCategory: "Spel",
          operatingSystem: "Alle",
          priceCurrency: "EUR"
        },
        'pl': {
          genre: ["Strategia", "Taktyka", "Wieloosobowa"],
          gamePlatform: ["Przeglądarka", "PC", "Mobilna"],
          gameLocation: "Online",
          numberOfPlayers: "Wieloosobowa",
          applicationCategory: "Gra",
          operatingSystem: "Wszystkie",
          priceCurrency: "PLN"
        },
        'tr': {
          genre: ["Strateji", "Taktik", "Çok Oyunculu"],
          gamePlatform: ["Web Tarayıcısı", "PC", "Mobil"],
          gameLocation: "Çevrimiçi",
          numberOfPlayers: "Çok Oyunculu",
          applicationCategory: "Oyun",
          operatingSystem: "Tümü",
          priceCurrency: "TRY"
        },
        'ko': {
          genre: ["전략", "전술", "멀티플레이어"],
          gamePlatform: ["웹 브라우저", "PC", "모바일"],
          gameLocation: "온라인",
          numberOfPlayers: "멀티플레이어",
          applicationCategory: "게임",
          operatingSystem: "모두",
          priceCurrency: "KRW"
        },
        'ja': {
          genre: ["戦略", "戦術", "マルチプレイヤー"],
          gamePlatform: ["ウェブブラウザ", "PC", "モバイル"],
          gameLocation: "オンライン",
          numberOfPlayers: "マルチプレイヤー",
          applicationCategory: "ゲーム",
          operatingSystem: "すべて",
          priceCurrency: "JPY"
        },
         'zh': {
          genre: ["策略", "战术", "多人游戏"],
          gamePlatform: ["网页浏览器", "PC", "移动端"],
          gameLocation: "在线",
          numberOfPlayers: "多人游戏",
          applicationCategory: "游戏",
          operatingSystem: "全部",
          priceCurrency: "CNY"
        }
      };

      if (lang !== 'en' && schemaTranslations[lang]) {
        const trans = schemaTranslations[lang];
        schema.genre = trans.genre;
        schema.gamePlatform = trans.gamePlatform;
        schema.gameLocation = trans.gameLocation;
        schema.numberOfPlayers = trans.numberOfPlayers;
        schema.applicationCategory = trans.applicationCategory;
        schema.operatingSystem = trans.operatingSystem;
        if (schema.offers) {
          schema.offers.priceCurrency = trans.priceCurrency;
        }
      }

      const newSchemaJson = JSON.stringify(schema, null, 2);
      html = html.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
        `<script type="application/ld+json">\n${newSchemaJson}\n</script>`
      );
    } catch (e) {
      console.error('Erreur lors du parsing du JSON-LD:', e);
    }
  }

  // Mettre à jour le FAQ Schema JSON-LD
  const faqSchemaMatch = html.match(/<script type="application\/ld\+json">\s*{\s*"@context":\s*"https:\/\/schema\.org",\s*"@type":\s*"FAQPage"[\s\S]*?<\/script>/);
  if (faqSchemaMatch) {
    try {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": translations.faq1Question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations.faq1Answer
            }
          },
          {
            "@type": "Question",
            "name": translations.faq2Question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations.faq2Answer
            }
          },
          {
            "@type": "Question",
            "name": translations.faq3Question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations.faq3Answer
            }
          },
          {
            "@type": "Question",
            "name": translations.faq4Question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations.faq4Answer
            }
          },
          {
            "@type": "Question",
            "name": translations.faq5Question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations.faq5Answer
            }
          }
        ]
      };

      const newFaqSchemaJson = JSON.stringify(faqSchema, null, 4);
      html = html.replace(
        faqSchemaMatch[0],
        `<script type="application/ld+json">\n    ${newFaqSchemaJson}\n  </script>`
      );
    } catch (e) {
      console.error('Erreur lors du parsing du FAQ JSON-LD:', e);
    }
  }

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
  const staticPath = path.join(__dirname, 'static');
  const builtHTMLPath = path.join(staticPath, 'index.html');

  // Vérifier si le fichier build existe
  if (!fs.existsSync(builtHTMLPath)) {
    console.error('❌ ERREUR: Le fichier static/index.html n\'existe pas!');
    console.error('⚠️  Assurez-vous de lancer "npm run build" AVANT "npm run build:lang"');
    process.exit(1);
  }

  // Lire le HTML généré par Webpack (pas le source)
  const baseHTML = fs.readFileSync(builtHTMLPath, 'utf8');

  // Générer une page pour chaque langue
  Object.keys(LANGUAGES).forEach(lang => {
    if (lang !== 'en') {
      // Pour les autres langues, créer un dossier et générer le HTML
      const langPath = path.join(staticPath, lang);
      if (!fs.existsSync(langPath)) {
        fs.mkdirSync(langPath, { recursive: true });
      }

      const langHTML = generateHTMLForLanguage(baseHTML, lang);
      fs.writeFileSync(path.join(langPath, 'index.html'), langHTML);

      // Copier aussi la page 404 si elle existe
      const notFoundPath = path.join(staticPath, '404.html');
      if (fs.existsSync(notFoundPath)) {
        const notFoundHTML = fs.readFileSync(notFoundPath, 'utf8');
        const translated404 = generateHTMLForLanguage(notFoundHTML, lang);
        fs.writeFileSync(path.join(langPath, '404.html'), translated404);
      }
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
  console.log('\n💡 Important: Ce script doit être exécuté APRÈS le build webpack');
}

// Exécuter le script
generateLanguagePages();