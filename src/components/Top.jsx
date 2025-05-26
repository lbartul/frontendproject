import { useEffect } from 'react';
import '../css/Top.css';
import { data } from '../test.js';
import { useLanguage } from './LanguageProvider.jsx';
import { useTheme } from './temaProvider.jsx';

export default function Top() {
  const { lang, setLang } = useLanguage();
  const darkModeText = data[lang].dmode;

  const { darkMode, setDarkMode } = useTheme();

  const toggleLanguage = (e) => {
    e.preventDefault();
    const newLang = lang === 'en' ? 'tr' : 'en';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="preference">
      <nav>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
        <p className="top-p1">
          {darkMode ? darkModeText.textOn : darkModeText.textOff}
        </p>
        <span className="divider">|</span>
        <a href="#" className="lang-link" role="button" onClick={toggleLanguage}>
          {lang === 'en' ? 'TRANSLATE TO TURKISH' : 'INGILIZCEYE CEVIR'}
        </a>
      </nav>
    </div>
  );
}
