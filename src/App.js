import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
   <div className='p-0 m-0 '>
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    <Content/>
    <ContactUs/>
    <Footer/>
   </div>
  );
}

export default App;
