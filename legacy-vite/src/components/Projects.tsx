import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "EcoTrack AI",
    description: "An AI-powered application to track and analyze carbon footprints for corporate sustainability.",
    tags: ["React", "TypeScript", "Node.js", "OpenAI"],
    github: "#",
    demo: "#"
  },
  {
    title: "NexGen E-Commerce",
    description: "A high-performance e-commerce platform with real-time inventory management.",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "SecureVault",
    description: "End-to-end encrypted password manager with biometric authentication support.",
    tags: ["React Native", "Firebase", "CryptoJS"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-window">
                <div className="window-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="icon-link"><Github size={20} /></a>
                    <a href={project.demo} className="icon-link"><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
