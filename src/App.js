import Navigation from './components/Navbar'
import Banner from './components/Banner';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Certificates from './components/Certificates';
function App() {

  return (
    <div className="App">
      <Navigation />
        <Banner />
      <section className='continue-background'>
        <Skills />
        <Projects />
        <Experience />
        <Interests />
        <Certificates />
      </section>

      <Contact />
      
    </div>
  );
}

export default App;
