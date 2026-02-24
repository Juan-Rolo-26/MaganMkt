import React from 'react';
import { motion as Motion } from 'framer-motion';
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
  'Branding y Desarrollo Web',
  'Publicidad y Medios'
];

const contactItems = [
  {
    label: 'Rosario - Santa Fe, Argentina',
    href: null,
    Icon: MapPinIcon
  },
  {
    label: '+54 9 341 642-2073',
    href: 'https://wa.me/5493416422073',
    Icon: PhoneIcon
  },
  {
    label: 'diegob@magnamkt.com',
    href: 'mailto:diegob@magnamkt.com',
    Icon: MailIcon
  }
];

const socialLinks = [
  { href: '#', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: '#', label: 'Instagram', Icon: InstagramIcon },
  { href: '#', label: 'YouTube', Icon: YoutubeIcon }
];

const columnVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <footer className="site-footer">
      <div className="footer-bg" />

      <Motion.div
        className="footer-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <Motion.div custom={0} variants={columnVariants} className="footer-col">
          <Link to="/" className="footer-brand">
            <img src={logo} alt="Magna MKT" />
            <span>
              <strong>MAGNA</strong> MKT
            </span>
          </Link>
          <p>
            Transformamos negocios con estrategias digitales claras, medibles y enfocadas en
            crecimiento real.
          </p>

          <div className="footer-social">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </Motion.div>

        <Motion.div custom={1} variants={columnVariants} className="footer-col">
          <h3>Navegacion</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
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
              </li>
            ))}
          </ul>
        </Motion.div>

        <Motion.div custom={2} variants={columnVariants} className="footer-col">
          <h3>Servicios Clave</h3>
          <ul>
            {serviceLinks.map((item) => (
              <li key={item}>
                <a href="#services" onClick={handleGoToServices}>
                  <ArrowRightIcon size={13} />
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </Motion.div>

        <Motion.div custom={3} variants={columnVariants} className="footer-col">
          <h3>Contacto</h3>
          <ul className="footer-contact-list">
            {contactItems.map((item) => (
              <li key={item.label}>
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
              </li>
            ))}
          </ul>
        </Motion.div>
      </Motion.div>

      <div className="footer-bottom">
        <p>MAGNA © {new Date().getFullYear()} - Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <Link to="/privacidad">Privacidad</Link>
          <Link to="/legal">Aviso Legal</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
