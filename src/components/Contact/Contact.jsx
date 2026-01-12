import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ContactForm from './ContactForm';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hassan.shahid031998@gmail.com',
      href: 'mailto:hassan.shahid031998@gmail.com',
      color: '#2563eb'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+92 306 9167328',
      href: 'tel:+923069167328',
      color: '#059669'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Pakistan (Remote Available)',
      href: null,
      color: '#7c3aed'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hassan-shahid-3006751b1/',
      icon: FaLinkedin,
      color: '#0077B5',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Hassan031998',
      icon: FaGithub,
      color: '#333',
      description: 'Code repositories'
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01ff511319638b362f',
      icon: SiUpwork,
      color: '#6FDA44',
      description: 'Freelance profile'
    }
  ];

  return (
    <section className="py-5 bg-white" id="contact" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-medium">
            📬 Get In Touch
          </span>
          <h2 className="display-4 fw-bold mb-4">Let's Work Together</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="lead text-muted">
                Have a project in mind or want to collaborate? I'd love to hear from you! 
                Let's discuss how we can bring your ideas to life.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Contact Methods */}
              <div className="mb-5">
                <h3 className="h4 fw-bold mb-4">Contact Information</h3>
                <div className="d-flex flex-column gap-3">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      className="d-flex align-items-center p-3 bg-light rounded-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div 
                        className="rounded-3 p-3 me-3 d-flex align-items-center justify-content-center"
                        style={{ 
                          backgroundColor: `${method.color}15`,
                          width: '50px',
                          height: '50px'
                        }}
                      >
                        <method.icon size={20} style={{ color: method.color }} />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="fw-semibold mb-1">{method.title}</h6>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-muted text-decoration-none"
                            style={{ fontSize: '0.9rem' }}
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="text-muted" style={{ fontSize: '0.9rem' }}>
                            {method.value}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-5">
                <h4 className="h5 fw-bold mb-4">Connect With Me</h4>
                <div className="row g-3">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="col-12">
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center p-3 bg-light rounded-3 text-decoration-none text-dark"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div 
                          className="rounded-3 p-2 me-3 d-flex align-items-center justify-content-center"
                          style={{ 
                            backgroundColor: `${link.color}15`,
                            width: '40px',
                            height: '40px'
                          }}
                        >
                          <link.icon size={18} style={{ color: link.color }} />
                        </div>
                        <div>
                          <h6 className="fw-semibold mb-0">{link.name}</h6>
                          <small className="text-muted">{link.description}</small>
                        </div>
                      </motion.a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="bg-success bg-opacity-10 border border-success border-opacity-25 rounded-3 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-success rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                  <h6 className="fw-semibold mb-0 text-success">Available for Projects</h6>
                </div>
                <p className="small text-muted mb-0">
                  Currently accepting new projects and collaborations. 
                  Let's discuss your requirements!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <motion.div
              className="bg-light rounded-4 p-5 h-100"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-4">
                <h3 className="h4 fw-bold mb-2">Send Me a Message</h3>
                <p className="text-muted mb-0">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-5 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div 
            className="position-relative overflow-hidden rounded-4 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0f766e 100%)',
              padding: '4rem 3rem'
            }}
          >
            {/* Animated Background Elements */}
            <div 
              className="position-absolute"
              style={{
                top: '20%',
                right: '10%',
                width: '100px',
                height: '100px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
              }}
            ></div>
            <div 
              className="position-absolute"
              style={{
                bottom: '15%',
                left: '15%',
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '50%',
                animation: 'float 4s ease-in-out infinite 2s'
              }}
            ></div>
            
            {/* Content */}
            <div className="position-relative">
              <div className="mb-4">
                <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-20 rounded-circle p-3 mb-4">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 6.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7 0-.84.16-1.65.43-2.4l2.71 1.49L12 10.5l3.86.59 2.71-1.49c.27.75.43 1.56.43 2.4 0 3.87-3.13 7-7 7z"/>
                  </svg>
                </div>
                <h3 className="display-6 fw-bold text-white mb-4">Let's Build Something Amazing Together</h3>
                <p className="text-white text-opacity-90 mb-0 fs-5 col-lg-8 mx-auto" style={{ lineHeight: '1.6' }}>
                  Whether you need a full-stack web application, UI development, or agile project management, 
                  I'm here to help turn your vision into reality. Ready to discuss your next project?
                </p>
              </div>
              
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a 
                  href="mailto:hassan.shahid031998@gmail.com"
                  className="btn btn-light btn-lg px-5 py-3 fw-semibold d-flex align-items-center gap-2"
                  style={{ 
                    borderRadius: '50px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    border: 'none'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-success">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Get In Touch
                </a>
                <a 
                  href="https://www.linkedin.com/in/hassan-shahid-3006751b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold d-flex align-items-center gap-2"
                  style={{ 
                    borderRadius: '50px',
                    borderWidth: '2px',
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.3)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            
            {/* Custom animations */}
            <style jsx>{`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-20px);
                }
              }
            `}</style>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
