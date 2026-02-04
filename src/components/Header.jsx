import { useState, useEffect } from 'react';
import '../index.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.2em',
        fontSize: '1.2rem',
        textTransform: 'uppercase'
      }}>
        Léon
      </div>
      <nav className="nav-links">
        <a href="#portfolio">Portfolio</a>
        <a href="#about">À Propos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
