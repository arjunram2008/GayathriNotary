import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-beige">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
