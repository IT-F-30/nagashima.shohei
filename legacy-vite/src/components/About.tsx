import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Professional software engineer with a passion for creating clean, efficient, and user-friendly applications. 
              My journey in tech started with a curiosity about how things work, which led me to dive deep into web development.
            </p>
            <p>
              I enjoy solving complex problems and staying up-to-date with the latest industry trends. 
              When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Tokyo, Japan</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">shohei.nagashima@example.com</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="image-placeholder">
              <div className="image-glow"></div>
              <span>Profile Image</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
