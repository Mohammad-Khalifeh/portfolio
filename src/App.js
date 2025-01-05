import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Educations from './components/Educations/educations';
import Trainings from './components/Trainings/trainings';
import Works from './components/Works/works';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Educations />
      <Trainings />
      <Works />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
