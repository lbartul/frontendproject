import '../css/Project.css';
import { data } from '../test.js';
import { useLanguage } from './LanguageProvider.jsx';

export default function Project ()  {

  const { lang } = useLanguage();
  const projectData = data[lang].projectsSection;

  const prj1 = projectData.projectone[0];
  const p1span = projectData.projectone.slice(1); 
  const prja = projectData.projectsa;
  const prj2 = projectData.projecttwo[0];
  const p2span = projectData.projecttwo.slice(1);

  return (
    <section className="Projects">
      <h1 className="prj1-h1">{projectData.title}</h1>
      <div className="prj-boxes">
        <div className="prj1">
          <h2 className="prj1-h2">{prj1.title}</h2>
          <p className="prj1-p1">{prj1.ptext1}</p>
          <div className="library1">
            {p1span.map((item, index) => (
              <span key={index}>{item.span}</span>
            ))}
          </div>
          <div className="prj-btn1">
            {prja.map((item, index) => (
              <a href="" key={index}>{item.projecta}</a>
            ))}
          </div>
          <img src="./img/laptop1.png" className="prj-img1" />
          <img src="./img/ekran1.png" className="ekran1" />
        </div>
        <div className="prj2">
          <h2 className="prj2-h2">{prj2.title}</h2>
          <p className="prj2-p1">{prj2.ptext1}</p>
          <div className="library2">
            {p2span.map((item, index) => (
              <span key={index}>{item.span}</span>
            ))}
          </div>
          <div className="prj-btn2">
            {prja.map((item, index) => (
              <a href="" key={index}>{item.projecta}</a>
            ))}
          </div>
          <img src="./img/laptop1.png" className="prj-img2" />
          <img src="./img/ekran2.png" className="ekran2" />
        </div>
      </div>
    </section>
  );
}
