// Portfolio - Amélie Rousseau (v1.0.1)
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
