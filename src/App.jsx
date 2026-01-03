import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        
        {/* Placeholder for Projects section */}
        <section id="projects" style={{ minHeight: '100vh', padding: '4rem 0', background: '#fff' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#2D3748' }}>
              Projects
            </h2>
            <p style={{ textAlign: 'center', color: '#718096', maxWidth: '600px', margin: '0 auto' }}>
              My portfolio of projects is coming soon. In the meantime, feel free to check out my GitHub 
              or contact me to discuss my work experience.
            </p>
          </div>
        </section>
        
        <About />
        <Contact />
      </main>
      
      <footer style={{ 
        background: '#2D3748', 
        color: '#fff', 
        textAlign: 'center', 
        padding: '2rem 0',
        marginTop: '0'
      }}>
        <div className="container">
          <p style={{ margin: 0, fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} Hassan Shahid. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
