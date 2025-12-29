import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "DevOps/Tools", items: ["Docker", "AWS", "GitHub Actions", "Terraform", "Git", "Vite"] }
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              className="skill-category"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map(skill => (
                  <motion.div 
                    key={skill} 
                    className="skill-badge"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
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
