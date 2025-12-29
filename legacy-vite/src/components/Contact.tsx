import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div 
          className="contact-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="social-links">
            <a href="mailto:shohei.nagashima@example.com" className="social-icon-btn">
              <Mail size={24} />
              <span>Email</span>
            </a>
            <a href="#" className="social-icon-btn">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href="#" className="social-icon-btn">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-icon-btn">
              <Twitter size={24} />
              <span>Twitter</span>
            </a>
          </div>

          <div className="contact-cta">
            <a href="mailto:shohei.nagashima@example.com" className="btn btn-primary">Say Hello</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
