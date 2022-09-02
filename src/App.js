import Navigation from './components/Navbar'
import Banner from './components/Banner';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
