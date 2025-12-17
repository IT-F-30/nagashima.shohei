import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="logo">
          <span className="text-gradient">Portfolio.</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">自己紹介</a></li>
          <li><a href="#skills">スキル</a></li>
          <li><a href="#projects">実績</a></li>
          <li><a href="#contact">お問い合わせ</a></li>
        </ul>
        <a href="#contact" className="btn btn-primary hide-mobile">相談する</a>
      </div>
    </nav>
  );
};

export default Navbar;
