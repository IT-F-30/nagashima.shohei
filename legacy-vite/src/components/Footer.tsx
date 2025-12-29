import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Nagashima Shohei. All rights reserved.</p>
        <p className="footer-built">Built with React, TypeScript & Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;
