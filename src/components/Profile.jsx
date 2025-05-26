import '../css/Profile.css';
import { data } from '../test.js';
import { useLanguage } from './LanguageProvider.jsx';

export default function Profile () {
  const { lang } = useLanguage();
  const profileData = data[lang].profileSection;
  const info = profileData.information[0];
  const about = profileData.about[0];

  return (
    <section className="profile">
      <h1>{profileData.title}</h1>
      <div className="profile-boxes">
        <div className="basicinfo">
          <h2 className="binfo-title">{info.infoTitle}</h2>
          <p className="bday">
            <span className="first-span">{info.birth}</span>
            <span className="second-span">{info.bday}</span>
          </p>
          <p className="city">
            <span className="first-span">{info.livein}</span>
            <span className="second-span">{info.city}</span>
          </p>
          <p className="education">
            <span className="first-span">{info.educate}</span>
            <span className="second-span">{info.education}</span>
          </p>
          <p className="role">
            <span className="first-span">{info.prole}</span>
            <span className="second-span">{info.role}</span>
          </p>
        </div>
        <div className="aboutme">
          <h2 className="about">{about.aboutTitle}</h2>
          <img src="./img/Rectangle39.png" className="p-bimg" />
          <div className="abouttxt">
            <p>{about.aboutText1}</p>
            <p>{about.aboutText2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
