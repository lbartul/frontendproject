import '../css/Greet.css';
import { data } from '../test';
import { useLanguage } from './LanguageProvider';


export default function Greet() {
  const { lang } = useLanguage();
  const greetData = data[lang].greetSection;

  return (
    <div>
      <div className="greet">
        <main>
          <div className="left-content">
            <p className="grtp1">
              {greetData.greeting}
            </p>

            <div className="logo-main">
              {greetData.socials.map((item, index) => (
                <img key={index} src={item.logo} alt="" />
              ))}
            </div>

            <div className="info-main">
              <p>
                Currently{" "}
                {greetData.ctaHtml.map((item, index) => (
                  <span key={index} className="span-1"> {item.span} </span>
                ))} Contact me!
              </p>
            </div>
          </div>

          <div className="img-main">
            <img src={`./img/${greetData.greetImg}`} className="img1" />
            <img src="./img/Rectangle3.png" className="back-img" />
            <img src="./img/Rectangle18.png" className="back-img2" />
          </div>
        </main>
      </div>
    </div>
  );
}
