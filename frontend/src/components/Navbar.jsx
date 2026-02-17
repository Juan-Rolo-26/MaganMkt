import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import { CloseIcon, MenuIcon } from './SiteIcons';

const getPathActiveLink = (pathname, hash = '') => {
  if (pathname === '/nosotros') {
    return 'SOBRE NOSOTROS';
  }

  if (pathname === '/contacto') {
    return 'CONTACTO';
  }

  if (pathname === '/') {
    return hash === '#services' ? 'SERVICIOS' : 'INICIO';
  }

  return '';
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(() =>
    getPathActiveLink(window.location.pathname, window.location.hash)
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== '/') {
        setActiveLink(getPathActiveLink(location.pathname));
        return;
      }

      const sections = ['home', 'services'];
      const scrollPosition = window.scrollY + 160;
      let nextLink = getPathActiveLink(location.pathname, window.location.hash);

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) {
          continue;
        }

        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          nextLink = sectionId === 'home' ? 'INICIO' : 'SERVICIOS';
        }
      }

      setActiveLink(nextLink);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, [location.pathname]);

  const handleNavItemClick = (target) => {
    setMenuOpen(false);

    if (target === 'about') {
      setActiveLink('SOBRE NOSOTROS');
      navigate('/nosotros');
      window.scrollTo(0, 0);
      return;
    }

    if (target === 'contact') {
      setActiveLink('CONTACTO');
      navigate('/contacto');
      window.scrollTo(0, 0);
      return;
    }

    if (target === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => window.scrollTo(0, 0), 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveLink('INICIO');
      return;
    }

    if (target === 'services') {
      if (location.pathname !== '/') {
        navigate('/', { state: { targetId: 'services' } });
      } else {
        const section = document.getElementById('services');
        if (section) {
          const y = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
      setActiveLink('SERVICIOS');
    }
  };

  const navLinks = [
    { name: 'INICIO', action: () => handleNavItemClick('home') },
    { name: 'SOBRE NOSOTROS', action: () => handleNavItemClick('about') },
    { name: 'SERVICIOS', action: () => handleNavItemClick('services') },
    { name: 'CONTACTO', action: () => handleNavItemClick('contact') }
  ];

  return (
    <nav className={`site-nav ${scrolled ? 'site-nav-scrolled' : ''}`}>
      <div className="site-nav-inner">
        <button type="button" className="site-nav-brand" onClick={() => handleNavItemClick('home')}>
          <img src={logo} alt="Magna MKT" />
        </button>

        <button
          type="button"
          className="site-nav-toggle"
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>

        <div className={`site-nav-links ${menuOpen ? 'site-nav-links-open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  type="button"
                  onClick={link.action}
                  className={`site-nav-link ${activeLink === link.name ? 'site-nav-link-active' : ''}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <a href="https://calendly.com/dballerini" target="_blank" rel="noopener noreferrer">
            <button className="btn-primary site-nav-cta" type="button">
              Hablemos
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
