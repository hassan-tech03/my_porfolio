import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Timeline from './Timeline';
import styles from './About.module.scss';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const timelineEvents = [
    {
      id: '1',
      year: '2020',
      title: 'Started UI Development Journey',
      type: 'work',
      organization: 'Freelance',
      description: 'Began my career as a UI developer, focusing on creating responsive and interactive web interfaces using modern technologies.'
    },
    {
      id: '2',
      year: '2021',
      title: 'ReactJS Specialist',
      type: 'work',
      organization: 'Tech Company',
      description: 'Specialized in ReactJS development, building complex single-page applications and component libraries for enterprise clients.'
    },
    {
      id: '3',
      year: '2022',
      title: 'Scrum Master Certification',
      type: 'achievement',
      description: 'Obtained Scrum Master certification and began leading agile development teams, bridging the gap between development and project management.'
    },
    {
      id: '4',
      year: '2023',
      title: 'Full-Stack Development',
      type: 'work',
      organization: 'Software Agency',
      description: 'Expanded expertise to full-stack development, working with NextJS and Ruby on Rails to deliver end-to-end solutions.'
    },
    {
      id: '5',
      year: '2024',
      title: 'Senior Developer & Team Lead',
      type: 'work',
      organization: 'Current Position',
      description: 'Leading development teams as a Senior Full-Stack Developer and Scrum Master, mentoring junior developers and delivering high-quality projects.'
    }
  ];

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.aboutHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.aboutTitle}>About Me</h2>
          <p className={styles.aboutSubtitle}>
            My journey as a developer and leader
          </p>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutBio}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.bioText}>
              <h3>Hassan Shahid</h3>
              <p className={styles.bioRole}>Full-Stack Developer & Scrum Master</p>
              
              <p>
                I'm a passionate full-stack developer with <strong>5 years of specialized UI development experience</strong>. 
                My journey in web development has been driven by a commitment to creating beautiful, functional, 
                and user-centric applications that make a real impact.
              </p>
              
              <p>
                I specialize in building modern web applications using <strong>ReactJS</strong> and <strong>NextJS</strong> 
                for dynamic frontends, combined with <strong>Ruby on Rails</strong> for robust backend solutions. 
                My expertise in responsive design ensures seamless experiences across all devices and screen sizes.
              </p>
              
              <p>
                As a certified <strong>Scrum Master</strong>, I bring leadership and agile methodology expertise to every project. 
                I excel at facilitating team collaboration, removing blockers, and ensuring timely delivery of high-quality solutions. 
                My unique blend of technical skills and project management experience makes me a valuable asset to any development team.
              </p>
            </div>

            <div className={styles.bioStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Completed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.aboutTimeline}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.timelineHeading}>My Journey</h3>
            <Timeline events={timelineEvents} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
