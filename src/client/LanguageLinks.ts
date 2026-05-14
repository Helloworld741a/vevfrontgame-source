// src/client/LanguageLinks.ts
export class LanguageLinks extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.render();
  }
  
  // Méthode pour obtenir la traduction
  private getTranslation(key: string): string {
    // Si vous avez un système de traduction global
    if (typeof window !== 'undefined' && (window as any).translations) {
      return (window as any).translations.get(key) || key;
    }
    
    // Sinon, utiliser des traductions locales
    const currentLang = this.getCurrentLanguage();
    const translations: Record<string, Record<string, string>> = {
      'en': { 'languages': 'Languages' },
      'fr': { 'languages': 'Langues' },
      'de': { 'languages': 'Sprachen' },
      'es': { 'languages': 'Idiomas' },
      'it': { 'languages': 'Lingue' },
      'pt': { 'languages': 'Idiomas' },
      'ru': { 'languages': 'Языки' },
      'pt-br': { 'languages': 'Idiomas' },
      'nl': { 'languages': 'Talen' },
      'pl': { 'languages': 'Języki' },
      'tr': { 'languages': 'Diller' },
      'ko': { 'languages': '언어' },
      'ja': { 'languages': '言語' },
      'zh': { 'languages': '语言' }
    };
    
    return translations[currentLang]?.[key] || translations['en'][key] || key;
  }
  
  private getCurrentLanguage(): string {
    // Déterminer la langue depuis l'URL
    const pathParts = window.location.pathname.split('/').filter(p => p);
    if (pathParts[0] && pathParts[0].match(/^[a-z]{2}(-[a-z]{2})?$/)) {
      return pathParts[0];
    }
    
    // Ou depuis localStorage
    return localStorage.getItem('selectedLanguage') || 'en';
  }
  
  render() {
    // Langues avec pages dédiées pour le SEO
    const seoLanguages = [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'it', name: 'Italiano', flag: '🇮🇹' },
      { code: 'pt', name: 'Português', flag: '🇵🇹' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷' },
      { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
      { code: 'pl', name: 'Polski', flag: '🇵🇱' },
      { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
      { code: 'ko', name: '한국어', flag: '🇰🇷' },
      { code: 'ja', name: '日本語', flag: '🇯🇵' },
      { code: 'zh-CN', name: '中文', flag: '🇨🇳' }
    ];
    
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split('/').filter(p => p);
   
    // Déterminer la langue actuelle depuis l'URL
    let currentLang = 'en';
    let basePath = '';
   
    if (pathParts[0] && pathParts[0].match(/^[a-z]{2}(-[a-z]{2})?$/)) {
      currentLang = pathParts[0];
      pathParts.shift(); // Retirer la langue du path
    }
   
    // Reconstruire le chemin de base sans la langue
    if (pathParts.length > 0) {
      basePath = '/' + pathParts.join('/');
    }
    
    const links = seoLanguages.map(lang => {
      const href = lang.code === 'en' ? (basePath || '/') : `/${lang.code}${basePath}`;
      const isActive = lang.code === currentLang;
      const className = isActive ? 't-link active-lang' : 't-link';
     
      return `<a href="${href}" class="${className}" title="${lang.name}" data-lang="${lang.code}">${lang.flag} ${lang.name}</a>`;
    }).join(' ');
    
    // Utiliser la traduction pour "Languages"
    const languagesLabel = this.getTranslation('languages');
    
    this.innerHTML = `
      <div class="language-links-container" style="margin-top: 10px;">
        <span style="font-weight: bold;">${languagesLabel}:</span> ${links}
      </div>
      <style>
        .language-links-container .active-lang {
          font-weight: bold;
          text-decoration: underline;
        }
      </style>
    `;
    
    // Ajouter des écouteurs pour synchroniser avec le localStorage
    this.querySelectorAll('a[data-lang]').forEach(link => {
      link.addEventListener('click', (e) => {
        const lang = (e.currentTarget as HTMLElement).getAttribute('data-lang');
        if (lang) {
          localStorage.setItem('selectedLanguage', lang);
        }
      });
    });
  }
}

// Enregistrer le composant
customElements.define('language-links', LanguageLinks);