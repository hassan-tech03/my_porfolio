import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { FaAward, FaUsers, FaProjectDiagram, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const timelineEvents = [
    {
      id: '1',
      year: '2020',
      title: 'Started UI Development Journey',
      type: 'work',
      organization: 'Freelance',
      description: 'Began my career as a UI developer, focusing on creating responsive and interactive web interfaces using modern technologies.',
      icon: FaCode,
      color: '#2563eb'
    },
    {
      id: '2',
      year: '2021',
      title: 'ReactJS Specialist',
      type: 'work',
      organization: 'Tech Company',
      description: 'Specialized in ReactJS development, building complex single-page applications and component libraries for enterprise clients.',
      icon: FaBriefcase,
      color: '#059669'
    },
    {
      id: '3',
      year: '2022',
      title: 'Scrum Master Certification',
      type: 'achievement',
      description: 'Obtained Scrum Master certification and began leading agile development teams, bridging the gap between development and project management.',
      icon: FaAward,
      color: '#d97706'
    },
    {
      id: '4',
      year: '2023',
      title: 'Full-Stack Development',
      type: 'work',
      organization: 'Software Agency',
      description: 'Expanded expertise to full-stack development, working with NextJS and Ruby on Rails to deliver end-to-end solutions.',
      icon: FaProjectDiagram,
      color: '#7c3aed'
    },
    {
      id: '5',
      year: '2024',
      title: 'Senior Developer & Team Lead',
      type: 'work',
      organization: 'Current Position',
      description: 'Leading development teams as a Senior Full-Stack Developer and Scrum Master, mentoring junior developers and delivering high-quality projects.',
      icon: FaUsers,
      color: '#dc2626'
    }
  ];

  const achievements = [
    {
      icon: FaGraduationCap,
      title: 'Certified Scrum Master',
      description: 'Professional Scrum Master I (PSM I) certification',
      color: '#2563eb'
    },
    {
      icon: FaCode,
      title: '5+ Years Experience',
      description: 'Specialized in modern web development',
      color: '#059669'
    },
    {
      icon: FaUsers,
      title: 'Team Leadership',
      description: 'Led multiple development teams successfully',
      color: '#7c3aed'
    },
    {
      icon: FaProjectDiagram,
      title: '50+ Projects',
      description: 'Delivered across various industries',
      color: '#d97706'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience', color: '#2563eb' },
    { number: '50+', label: 'Projects Completed', color: '#059669' },
    { number: '20+', label: 'Happy Clients', color: '#7c3aed' },
    { number: '3+', label: 'Teams Led', color: '#d97706' }
  ];

  return (
    <section className="py-5" id="about" ref={ref} style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)'
    }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-medium">
            👨‍💻 About Me
          </span>
          <h2 className="display-4 fw-bold mb-4">My Journey & Expertise</h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Passionate full-stack developer and certified Scrum Master with a proven track record 
            of delivering exceptional web applications and leading high-performing teams.
          </p>
        </motion.div>

        <div className="row g-5">
          {/* Personal Bio */}
          <div className="col-lg-8">
            <motion.div
              className="bg-white rounded-4 shadow-sm p-5 h-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                  <FaCode className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="h4 fw-bold mb-1">Hassan Shahid</h3>
                  <p className="text-primary fw-semibold mb-0">Full-Stack Developer & Scrum Master</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-muted mb-3" style={{ lineHeight: '1.7' }}>
                  I'm a passionate full-stack developer with <strong className="text-dark">5+ years of specialized UI development experience</strong>. 
                  My journey in web development has been driven by a commitment to creating beautiful, functional, 
                  and user-centric applications that make a real impact.
                </p>
                
                <p className="text-muted mb-3" style={{ lineHeight: '1.7' }}>
                  I specialize in building modern web applications using <strong className="text-dark">ReactJS</strong> and <strong className="text-dark">NextJS</strong> 
                  for dynamic frontends, combined with <strong className="text-dark">Ruby on Rails</strong> for robust backend solutions. 
                  My expertise in responsive design ensures seamless experiences across all devices.
                </p>
                
                <p className="text-muted mb-0" style={{ lineHeight: '1.7' }}>
                  As a certified <strong className="text-dark">Scrum Master</strong>, I bring leadership and agile methodology expertise to every project. 
                  I excel at facilitating team collaboration, removing blockers, and ensuring timely delivery of high-quality solutions.
                </p>
              </div>

              {/* Stats */}
              <div className="row g-3">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6 col-md-3">
                    <div className="text-center p-3 bg-light rounded-3">
                      <div 
                        className="h3 fw-bold mb-1"
                        style={{ color: stat.color }}
                      >
                        {stat.number}
                      </div>
                      <div className="small text-muted fw-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <div className="col-lg-4">
            <motion.div
              className="bg-white rounded-4 shadow-sm p-4 h-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="fw-bold mb-4">Key Achievements</h4>
              <div className="d-flex flex-column gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="d-flex align-items-start">
                    <div 
                      className="rounded-3 p-2 me-3 flex-shrink-0"
                      style={{ backgroundColor: `${achievement.color}15` }}
                    >
                      <achievement.icon 
                        size={20} 
                        style={{ color: achievement.color }}
                      />
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">{achievement.title}</h6>
                      <p className="small text-muted mb-0">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white rounded-4 shadow-sm p-5">
            <div className="text-center mb-5">
              <h3 className="h4 fw-bold mb-2">Professional Journey</h3>
              <p className="text-muted">My career progression and key milestones</p>
            </div>

            <div className="row g-4">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className="col-lg-6">
                  <motion.div
                    className="d-flex h-100"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 me-3">
                      <div 
                        className="rounded-3 p-3 d-flex align-items-center justify-content-center"
                        style={{ 
                          backgroundColor: `${event.color}15`,
                          width: '60px',
                          height: '60px'
                        }}
                      >
                        <event.icon size={24} style={{ color: event.color }} />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div 
                        className="badge rounded-pill px-3 py-2 mb-2"
                        style={{ 
                          backgroundColor: `${event.color}15`,
                          color: event.color,
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}
                      >
                        {event.year}
                      </div>
                      <h5 className="fw-semibold mb-1">{event.title}</h5>
                      {event.organization && (
                        <p className="small fw-medium mb-2" style={{ color: event.color }}>
                          {event.organization}
                        </p>
                      )}
                      <p className="small text-muted mb-0" style={{ lineHeight: '1.6' }}>
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
