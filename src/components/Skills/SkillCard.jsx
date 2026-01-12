import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const SkillCard = ({ skill, index }) => {
  // Get the icon component dynamically
  const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon] || FaIcons.FaCode;
  
  const getLevelInfo = (level) => {
    switch (level) {
      case 'expert':
        return { 
          color: '#059669', 
          bgColor: '#f0fdf4',
          label: 'Expert',
          percentage: 95
        };
      case 'proficient':
        return { 
          color: '#2563eb', 
          bgColor: '#eff6ff',
          label: 'Proficient',
          percentage: 80
        };
      case 'familiar':
        return { 
          color: '#d97706', 
          bgColor: '#fffbeb',
          label: 'Familiar',
          percentage: 65
        };
      default:
        return { 
          color: '#64748b', 
          bgColor: '#f8fafc',
          label: 'Learning',
          percentage: 50
        };
    }
  };

  const levelInfo = getLevelInfo(skill.level);

  return (
    <motion.div
      className="h-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div 
        className="card h-100 border-0 shadow-sm position-relative overflow-hidden"
        style={{
          background: 'white',
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
        }}
      >
        {/* Level Badge */}
        <div 
          className="position-absolute top-3 end-3 px-2 py-1 rounded-pill"
          style={{ 
            backgroundColor: levelInfo.color,
            color: 'white',
            fontSize: '0.7rem',
            fontWeight: '600'
          }}
        >
          {levelInfo.label}
        </div>

        <div className="card-body text-center p-4">
          {/* Icon */}
          <div 
            className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: levelInfo.bgColor,
              color: levelInfo.color
            }}
          >
            <IconComponent size={32} />
          </div>
          
          {/* Skill Name */}
          <h5 className="card-title fw-semibold mb-3 text-dark" style={{ fontSize: '1rem' }}>
            {skill.name}
          </h5>
          
          {/* Progress Bar */}
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="small text-muted">Proficiency</span>
              <span className="small fw-medium" style={{ color: levelInfo.color }}>
                {levelInfo.percentage}%
              </span>
            </div>
            <div 
              className="progress rounded-pill" 
              style={{ height: '6px', backgroundColor: '#f1f5f9' }}
            >
              <motion.div
                className="progress-bar rounded-pill"
                style={{ backgroundColor: levelInfo.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${levelInfo.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              />
            </div>
          </div>

          {/* Years Experience */}
          {skill.yearsExperience && (
            <div className="mt-auto">
              <span className="badge bg-light text-muted px-3 py-2 rounded-pill">
                {skill.yearsExperience}+ years
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
