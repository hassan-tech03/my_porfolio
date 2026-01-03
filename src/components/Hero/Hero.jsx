import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

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

  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.heroText}>
            <motion.h1 variants={itemVariants} className={styles.heroName}>
              Hi, I'm <span className={styles.highlight}>Hassan Shahid</span>
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className={styles.heroTitle}>
              Full-Stack Developer & Scrum Master
            </motion.h2>
            
            <motion.p variants={itemVariants} className={styles.heroDescription}>
              With <strong>5 years of UI development experience</strong>, I craft beautiful, 
              responsive, and interactive web applications using <strong>ReactJS</strong>, <strong>NextJS</strong>, 
              and <strong>Ruby on Rails</strong>. As a certified Scrum Master, I bridge the gap 
              between design and development, leading teams to deliver exceptional digital experiences.
            </motion.p>
            
            <motion.div variants={itemVariants} className={styles.heroCta}>
              <button 
                className={styles.ctaPrimary}
                onClick={handleScrollToProjects}
                aria-label="View my work"
              >
                View My Work
              </button>
              <a 
                href="#contact" 
                className={styles.ctaSecondary}
                aria-label="Get in touch"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          <motion.div 
            className={styles.heroImage}
            variants={imageVariants}
          >
            <div className={styles.imageWrapper}>
              <img 
                src="/profile.jpg" 
                alt="Professional portrait of a full-stack developer"
                className={styles.profileImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
