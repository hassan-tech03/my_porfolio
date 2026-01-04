import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ContactForm from './ContactForm';
import styles from './Contact.module.scss';

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hassan-shahid-3006751b1/',
      icon: <FaLinkedin />,
      color: '#0077B5'
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01ff511319638b362f',
      icon: <SiUpwork />,
      color: '#6FDA44'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Hassan031998',
      icon: <FaGithub />,
      color: '#333'
    },
    {
      name: 'Email',
      url: 'mailto:hassan.shahid031998@gmail.com',
      icon: <FaEnvelope />,
      color: '#EA4335'
    }
  ];

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.contactHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.contactTitle}>Get In Touch</h2>
          <p className={styles.contactSubtitle}>
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out through any of these channels:
            </p>

            <div className={styles.contactDetails}>
              <a href="mailto:hassan.shahid031998@gmail.com" className={styles.contactDetail}>
                <FaEnvelope className={styles.contactIcon} />
                <span>hassan.shahid031998@gmail.com</span>
              </a>
              
              <a href="tel:+923069167328" className={styles.contactDetail}>
                <FaPhone className={styles.contactIcon} />
                <span>+92 306 9167328</span>
              </a>
            </div>

            <div className={styles.socialLinks}>
              <h4>Find me on</h4>
              <div className={styles.socialIcons}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    style={{ '--hover-color': link.color }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactFormWrapper}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
