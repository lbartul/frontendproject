import '../css/App.css';
import Skills from './Skills';
import Profile from './Profile';
import Project from './Project';
import Footer from './Footer';
import Top from './Top';
import Greet from './Greet';


function App() {
  

  return (
    <>
    <div className='wrapper'>
      <Top />
      <Greet />
      <Skills />
      <Profile />
      <Project />
      <Footer />
    </div>
    </>
  )
}

export default App
