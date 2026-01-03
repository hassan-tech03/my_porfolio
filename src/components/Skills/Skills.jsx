import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skillsData } from '../../data/skills';
import SkillCard from './SkillCard';
import styles from './Skills.module.scss';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.skillsHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.skillsTitle}>Skills & Expertise</h2>
          <p className={styles.skillsSubtitle}>
            With <strong>5 years of UI development experience</strong>, I've mastered a diverse 
            set of technologies and methodologies to deliver exceptional web applications.
          </p>
        </motion.div>

        <div className={styles.skillsContent}>
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
