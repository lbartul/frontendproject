import '../css/Footer.css';
import { data } from '../test.js';
import { useLanguage } from './LanguageProvider.jsx';

export default function Footer ()  {


  const { lang } = useLanguage();
  const footerData = data[lang].footerSection;
  

    return (
        <footer className="last-part">
        <div className="footer-left">
          <h2>{footerData.htext}</h2>
          <img src="./img/Rectangle40.png" className="footer-bimg" />
        </div>
        <div className="footer-right">
          {footerData.footeras.map((item,) => (
            <a id={item.id} href="" key={item.id}>{item.footera}</a>
          ))}
        </div>
      </footer>
    )
}
