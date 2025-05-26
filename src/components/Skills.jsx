import '../css/Skills.css';
import { data } from '../test.js';
import { useLanguage } from './LanguageProvider.jsx';

export default function Skills() {

  const { lang } = useLanguage();
  const skillsData = data[lang].skillsSection;


  return (
    <section className="skills">
      <h1>{skillsData.title}</h1>
      <div className="img-skills">
        {skillsData.skills.map((item, index) => {
          return (
            <div className="skill-item" key={index}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
        <img src="./img/Rectangle22.png" className="skills-bimg" />
        <img src="./img/Ellipse11.png" className="skills-bimg2" />
      </div>
    </section>
  );
}
