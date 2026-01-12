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
        
        {/* Modern Projects Section */}
        <section id="projects" className="py-5 bg-light">
          <div className="container">
            {/* Section Header */}
            <div className="text-center mb-5">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-medium">
                🚀 My Work
              </span>
              <h2 className="display-4 fw-bold mb-4">Featured Projects</h2>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <p className="lead text-muted">
                    Here are some of the projects I've worked on, showcasing my expertise in 
                    full-stack development, UI/UX design, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Cards */}
            <div className="row g-4 mb-5">
              {/* Project 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <div 
                      className="w-100 h-100 d-flex align-items-center justify-content-center bg-primary bg-opacity-10"
                      style={{ 
                        background: 'linear-gradient(135deg, #2563eb15, #7c3aed15)',
                      }}
                    >
                      <div className="text-center">
                        <div className="bg-primary bg-opacity-20 rounded-3 p-3 d-inline-flex mb-2">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                          </svg>
                        </div>
                        <p className="small text-muted mb-0">Project Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-2">E-Commerce Platform</h5>
                    <p className="card-text text-muted mb-3">
                      Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. 
                      Features include user authentication, payment processing, and admin dashboard.
                    </p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      <span className="badge bg-primary bg-opacity-10 text-primary">React</span>
                      <span className="badge bg-primary bg-opacity-10 text-primary">Node.js</span>
                      <span className="badge bg-primary bg-opacity-10 text-primary">PostgreSQL</span>
                    </div>
                    <div className="d-flex gap-2">
                      <a href="#" className="btn btn-outline-primary btn-sm">Live Demo</a>
                      <a href="#" className="btn btn-outline-secondary btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <div 
                      className="w-100 h-100 d-flex align-items-center justify-content-center bg-success bg-opacity-10"
                      style={{ 
                        background: 'linear-gradient(135deg, #05966915, #d9770615)',
                      }}
                    >
                      <div className="text-center">
                        <div className="bg-success bg-opacity-20 rounded-3 p-3 d-inline-flex mb-2">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-success">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                          </svg>
                        </div>
                        <p className="small text-muted mb-0">Project Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-2">Task Management App</h5>
                    <p className="card-text text-muted mb-3">
                      Collaborative task management application with real-time updates, 
                      team collaboration features, and advanced project tracking capabilities.
                    </p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      <span className="badge bg-success bg-opacity-10 text-success">Next.js</span>
                      <span className="badge bg-success bg-opacity-10 text-success">TypeScript</span>
                      <span className="badge bg-success bg-opacity-10 text-success">MongoDB</span>
                    </div>
                    <div className="d-flex gap-2">
                      <a href="#" className="btn btn-outline-success btn-sm">Live Demo</a>
                      <a href="#" className="btn btn-outline-secondary btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                    <div 
                      className="w-100 h-100 d-flex align-items-center justify-content-center bg-warning bg-opacity-10"
                      style={{ 
                        background: 'linear-gradient(135deg, #d9770615, #7c3aed15)',
                      }}
                    >
                      <div className="text-center">
                        <div className="bg-warning bg-opacity-20 rounded-3 p-3 d-inline-flex mb-2">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-warning">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <p className="small text-muted mb-0">Project Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-2">Portfolio Website</h5>
                    <p className="card-text text-muted mb-3">
                      Modern, responsive portfolio website built with React and Bootstrap. 
                      Features smooth animations, contact forms, and optimized performance.
                    </p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      <span className="badge bg-warning bg-opacity-10 text-warning">React</span>
                      <span className="badge bg-warning bg-opacity-10 text-warning">Bootstrap</span>
                      <span className="badge bg-warning bg-opacity-10 text-warning">SCSS</span>
                    </div>
                    <div className="d-flex gap-2">
                      <a href="#" className="btn btn-outline-warning btn-sm">Live Demo</a>
                      <a href="#" className="btn btn-outline-secondary btn-sm">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div 
                className="position-relative overflow-hidden rounded-4 shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  padding: '4rem 3rem'
                }}
              >
                {/* Background Pattern */}
                <div 
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }}
                ></div>
                
                {/* Content */}
                <div className="position-relative">
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-20 rounded-circle p-3 mb-3">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="display-6 fw-bold text-white mb-3">Ready to Start Your Project?</h3>
                    <p className="text-white text-opacity-90 mb-0 fs-5 col-lg-8 mx-auto" style={{ lineHeight: '1.6' }}>
                      These are just a few examples of my projects. I'm always working on new and exciting 
                      challenges. Let's discuss how I can help bring your ideas to life.
                    </p>
                  </div>
                  
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a 
                      href="#contact" 
                      className="btn btn-light btn-lg px-5 py-3 fw-semibold d-flex align-items-center gap-2"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{ 
                        borderRadius: '50px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        border: 'none'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      Start a Project
                    </a>
                    <a 
                      href="https://github.com/Hassan031998" 
                      className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold d-flex align-items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        borderRadius: '50px',
                        borderWidth: '2px',
                        color: 'white',
                        borderColor: 'rgba(255,255,255,0.3)'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View All Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <About />
        <Contact />
      </main>
      
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0 small">
            © {new Date().getFullYear()} Hassan Shahid. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
