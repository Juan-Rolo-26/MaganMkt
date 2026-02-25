import React, { useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logos/logo_new.jpg';
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon
} from './SiteIcons';

const quickLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre Nosotros', to: '/nosotros' },
  { label: 'Servicios', type: 'services' },
  { label: 'Contacto', to: '/contacto' }
];

const serviceLinks = [
  'Estrategia de Marketing',
  'Marketing Digital',
  'Identidad de Marca y Desarrollo Web',
  'Publicidad y Medios'
];

const contactItems = [
  { label: 'Rosario - Santa Fe, Argentina', href: null, Icon: MapPinIcon },
  { label: '+54 9 341 642-2073', href: 'https://wa.me/5493416422073', Icon: PhoneIcon },
  { label: 'diegob@magnamkt.com', href: 'mailto:diegob@magnamkt.com', Icon: MailIcon }
];

const socialLinks = [
  { href: '#', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: '#', label: 'Instagram', Icon: InstagramIcon },
  { href: '#', label: 'YouTube', Icon: YoutubeIcon }
];

const colVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
};

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const handleGoToServices = (event) => {
    event.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { targetId: 'services' } });
      return;
    }
    const section = document.getElementById('services');
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" ref={ref}>
      <div className="footer-bg" />

      {/* Orb decorativo animado */}
      <Motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(227,28,37,0.3), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Motion.div
        className="footer-grid"
        style={{ position: 'relative', zIndex: 1 }}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Columna 1 — Brand */}
        <Motion.div custom={0} variants={colVariants} className="footer-col">
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="footer-brand">
              <img src={logo} alt="Magna MKT" />
              <span><strong>MAGNA</strong> MKT</span>
            </Link>
          </Motion.div>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Transformamos negocios con estrategias digitales claras, medibles y enfocadas en
            crecimiento real.
          </Motion.p>

          <Motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {socialLinks.map((social, si) => (
              <Motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, delay: 0.3 + si * 0.08 }}
                whileHover={{ scale: 1.2, y: -3 }}
              >
                <social.Icon size={18} />
              </Motion.a>
            ))}
          </Motion.div>
        </Motion.div>

        {/* Columna 2 — Navegación */}
        <Motion.div custom={1} variants={colVariants} className="footer-col">
          <h3>Navegacion</h3>
          <ul>
            {quickLinks.map((link, li) => (
              <Motion.li
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + li * 0.09 }}
              >
                {link.type === 'services' ? (
                  <a href="#services" onClick={handleGoToServices}>
                    <ArrowRightIcon size={13} />
                    <span>{link.label}</span>
                  </a>
                ) : (
                  <Link to={link.to}>
                    <ArrowRightIcon size={13} />
                    <span>{link.label}</span>
                  </Link>
                )}
              </Motion.li>
            ))}
          </ul>
        </Motion.div>

        {/* Columna 3 — Servicios */}
        <Motion.div custom={2} variants={colVariants} className="footer-col">
          <h3>Servicios Clave</h3>
          <ul>
            {serviceLinks.map((item, si) => (
              <Motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.28 + si * 0.09 }}
              >
                <a href="#services" onClick={handleGoToServices}>
                  <ArrowRightIcon size={13} />
                  <span>{item}</span>
                </a>
              </Motion.li>
            ))}
          </ul>
        </Motion.div>

        {/* Columna 4 — Contacto */}
        <Motion.div custom={3} variants={colVariants} className="footer-col">
          <h3>Contacto</h3>
          <ul className="footer-contact-list">
            {contactItems.map((item, ci) => (
              <Motion.li
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 + ci * 0.1 }}
              >
                <span className="footer-contact-icon">
                  <item.Icon size={16} />
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <p>{item.label}</p>
                )}
              </Motion.li>
            ))}
          </ul>
        </Motion.div>
      </Motion.div>

      {/* Bottom bar */}
      <Motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.55 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <p>MAGNA © {new Date().getFullYear()} - Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <Link to="/privacidad">Privacidad</Link>
          <Link to="/legal">Aviso Legal</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </Motion.div>
    </footer>
  );
};

export default Footer;
