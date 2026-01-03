import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import styles from './Skills.module.scss';

const SkillCard = ({ skill, index }) => {
  // Get the icon component dynamically
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons.FaCode;
  
  const getLevelColor = (level) => {
    switch (level) {
      case 'expert':
        return '#10B981'; // green
      case 'proficient':
        return '#4A90E2'; // blue
      case 'familiar':
        return '#F59E0B'; // amber
      default:
        return '#718096'; // gray
    }
  };

  return (
    <motion.div
      className={styles.skillCard}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className={styles.skillIcon} style={{ color: getLevelColor(skill.level) }}>
        <IconComponent size={40} />
      </div>
      
      <h4 className={styles.skillName}>{skill.name}</h4>
      
      <div className={styles.skillMeta}>
        <span className={styles.skillLevel} style={{ color: getLevelColor(skill.level) }}>
          {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
