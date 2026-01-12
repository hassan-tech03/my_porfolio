import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { skillsData } from '../../data/skills';
import SkillCard from './SkillCard';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-5 bg-light" id="skills" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-medium">
                💼 My Expertise
              </span>
              <h2 className="display-4 fw-bold mb-4 text-dark">Skills & Technologies</h2>
              <p className="lead text-muted">
                With <strong className="text-dark">5+ years of development experience</strong>, I've mastered 
                a comprehensive set of technologies and methodologies to deliver exceptional web applications 
                and lead high-performing teams.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="row g-5">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="col-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="d-flex align-items-center mb-4">
                <div 
                  className="bg-primary rounded me-3"
                  style={{ width: '4px', height: '40px' }}
                ></div>
                <div>
                  <h3 className="h4 fw-bold mb-1 text-dark">{category.category}</h3>
                  <p className="text-muted mb-0 small">
                    {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                  </p>
                </div>
              </div>
              
              {/* Skills Grid */}
              <div className="row g-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="col-lg-3 col-md-4 col-sm-6">
                    <SkillCard 
                      skill={skill} 
                      index={skillIndex}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-5 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white rounded-4 shadow-sm p-5">
            <h4 className="fw-bold mb-3 text-dark">Ready to work together?</h4>
            <p className="text-muted mb-4">
              Let's discuss how my skills can help bring your project to life.
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg px-4 py-3 fw-semibold"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ borderRadius: '12px' }}
            >
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
