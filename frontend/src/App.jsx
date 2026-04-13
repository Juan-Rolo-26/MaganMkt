import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';
import CookiesPolicy from './pages/CookiesPolicy';
import ServicePage from './pages/ServicePage';
import CasosExito from './pages/CasosExito';
import AsesoriaEstrategica from './pages/AsesoriaEstrategica';
import { AnimatePresence } from 'framer-motion';
import './new-theme.css';

const routeMeta = {
  '/': {
    title: 'Magna MKT | Agencia de Marketing Digital',
    description:
      'Agencia de marketing digital en Argentina. Estrategia, publicidad, branding y desarrollo web para impulsar tu negocio.'
  },
  '/asesoria-estrategica': {
    title: 'Asesoría Estratégica con Diego Ballerini | MagnaMKT',
    description: '90 minutos de trabajo directo con Diego Ballerini, fundador de MagnaMKT, para diagnosticar exactamente qué está frenando el crecimiento digital de tu negocio. Diagnóstico, análisis y plan de acción concreto.'
  },
  '/nosotros': {
    title: 'Nosotros | Magna MKT',
    description:
      'Conoce al equipo de Magna MKT y como trabajamos estrategias de marketing digital enfocadas en resultados.'
  },
  '/contacto': {
    title: 'Contacto | Magna MKT',
    description:
      'Contacta a Magna MKT en Rosario, Santa Fe. Hablemos de tu proyecto y armemos una estrategia a medida.'
  },
  '/privacidad': {
    title: 'Politica de Privacidad | Magna MKT',
    description: 'Consulta la politica de privacidad de Magna MKT y como tratamos los datos personales.'
  },
  '/legal': {
    title: 'Aviso Legal | Magna MKT',
    description: 'Lee el aviso legal y las condiciones de uso del sitio web de Magna MKT.'
  },
  '/cookies': {
    title: 'Politica de Cookies | Magna MKT',
    description: 'Informacion sobre cookies utilizadas por Magna MKT y opciones de gestion.'
  },
  '/casos-de-exito': {
    title: 'Casos de Éxito | Magna MKT',
    description: 'Conocé los proyectos y marcas que han crecido con Magna MKT. Estrategia digital, performance y resultados reales.'
  }
};

const upsertMeta = (selector, attrName, attrValue, content) => {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const resolvePublicUrl = (fileName) =>
  new URL(`${import.meta.env.BASE_URL}${fileName}`, window.location.origin).toString();

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.targetId) {
      // If we have a target ID, scroll to it
      setTimeout(() => {
        const element = document.getElementById(location.state.targetId);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300); // Delay for page transition
    } else {
      // Otherwise, scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    const meta = routeMeta[location.pathname] || routeMeta['/'];
    const logoUrl = resolvePublicUrl('logo.png');

    document.title = meta.title;
    upsertMeta('meta[name="description"]', 'name', 'description', meta.description);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', logoUrl);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', logoUrl);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/asesoria-estrategica" element={<AsesoriaEstrategica />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/legal" element={<LegalNotice />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/servicios/:slug" element={<ServicePage />} />
          <Route path="/casos-de-exito" element={<CasosExito />} />
        </Routes>
      </AnimatePresence>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}

export default App;
