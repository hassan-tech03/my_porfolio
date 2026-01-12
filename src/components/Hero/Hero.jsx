import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-vh-100 d-flex align-items-center position-relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        paddingTop: '80px' // Account for fixed navbar
      }}
    >
      {/* Background Decorative Elements */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      ></div>

      <div className="container position-relative">
        <motion.div
          className="row align-items-center g-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="col-lg-7 col-xl-6">
            <motion.div variants={itemVariants}>
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-medium">
                👋 Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="display-1 fw-bold mb-4"
              style={{ lineHeight: '1.1' }}
            >
              Hi, I'm{' '}
              <span 
                className="text-primary position-relative"
                style={{
                  background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Hassan Shahid
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants} 
              className="fs-2 fw-semibold text-secondary mb-4"
            >
              Full-Stack Developer & Scrum Master
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="lead text-muted mb-5"
              style={{ maxWidth: '600px', lineHeight: '1.7' }}
            >
              With <strong className="text-dark">5 years of UI development experience</strong>, I craft beautiful, 
              responsive, and interactive web applications using <strong className="text-dark">ReactJS</strong>, <strong className="text-dark">NextJS</strong>, 
              and <strong className="text-dark">Ruby on Rails</strong>. As a certified Scrum Master, I bridge the gap 
              between design and development, leading teams to deliver exceptional digital experiences.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="d-flex flex-wrap gap-3 mb-5">
              <button 
                className="btn btn-primary btn-lg px-4 py-3 fw-semibold d-flex align-items-center gap-2"
                onClick={handleScrollToProjects}
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                }}
              >
                View My Work
                <FaArrowRight size={16} />
              </button>
              <a 
                href="#contact" 
                className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold"
                onClick={handleScrollToContact}
                style={{ borderRadius: '12px' }}
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="d-flex align-items-center gap-4">
              <span className="text-muted fw-medium">Connect with me:</span>
              <div className="d-flex gap-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <FaGithub size={18} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <FaLinkedin size={18} />
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                  style={{ width: '40px', height: '40px' }}
                  title="Download Resume"
                >
                  <FaDownload size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <div className="col-lg-5 col-xl-6 text-center">
            <motion.div 
              variants={imageVariants}
              className="position-relative d-inline-block"
            >
              {/* Decorative Background */}
              <div 
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: '120%',
                  height: '120%',
                  background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(124, 58, 237, 0.1))',
                  animation: 'pulse 3s ease-in-out infinite',
                  zIndex: 1
                }}
              ></div>
              
              {/* Profile Image */}
              <div 
                className="position-relative rounded-circle overflow-hidden border border-4 border-white shadow-lg"
                style={{
                  width: '350px',
                  height: '350px',
                  zIndex: 2
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Hassan Shahid - Full-Stack Developer & Scrum Master"
                  className="w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.05) brightness(1.02) saturate(1.1)',
                    transform: 'scale(1.01)',
                    transition: 'transform 0.3s ease',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden'
                  }}
                  loading="eager"
                  decoding="sync"
                  onLoad={(e) => {
                    // Ensure image is sharp after loading
                    e.target.style.imageRendering = 'auto';
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Floating Elements */}
              <div 
                className="position-absolute bg-white rounded-3 shadow-sm p-3 d-flex align-items-center gap-2"
                style={{
                  top: '20%',
                  right: '-10%',
                  animation: 'float 3s ease-in-out infinite',
                  zIndex: 3
                }}
              >
                <div className="bg-success bg-opacity-10 rounded-circle p-2">
                  <div className="bg-success rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                </div>
                <span className="small fw-medium text-dark">Available for work</span>
              </div>

              <div 
                className="position-absolute bg-white rounded-3 shadow-sm p-3"
                style={{
                  bottom: '20%',
                  left: '-15%',
                  animation: 'float 3s ease-in-out infinite 1s',
                  zIndex: 3
                }}
              >
                <div className="text-center">
                  <div className="fw-bold text-primary fs-5">5+</div>
                  <div className="small text-muted">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.4;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @media (max-width: 991px) {
          .display-1 {
            font-size: 3rem !important;
          }
        }
        
        @media (max-width: 767px) {
          .display-1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
