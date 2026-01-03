import { motion } from 'framer-motion';
import styles from './About.module.scss';

const Timeline = ({ events }) => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          className={styles.timelineItem}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className={styles.timelineContent}>
            <span className={styles.timelineYear}>{event.year}</span>
            <h4 className={styles.timelineTitle}>{event.title}</h4>
            {event.organization && (
              <p className={styles.timelineOrg}>{event.organization}</p>
            )}
            <p className={styles.timelineDescription}>{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
