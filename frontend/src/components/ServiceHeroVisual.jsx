import React from 'react';
import { motion as Motion } from 'framer-motion';

const loop = (duration = 4, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut'
});

const getImageUrl = (slug) => {
  switch (slug) {
    case 'estrategia-de-marketing':
      return 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop';
    case 'marketing-digital':
      return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop';
    case 'branding-y-diseno':
      return 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop';
    case 'publicidad-y-medios':
      return 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop';
    case 'relaciones-publicas-y-activaciones':
      return 'https://images.unsplash.com/photo-1557425955-df376b5903c8?q=80&w=1400&auto=format&fit=crop';
    case 'marketing-de-contenidos':
      return 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop';
    default:
      return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop';
  }
};

const ServiceHeroVisual = (props) => {
  return (
    <div className="service-hero-visual-shell">
      <div className="service-hero-visual-surface" style={{ position: 'relative', overflow: 'hidden' }}>
        <Motion.img
          src={getImageUrl(props.slug)}
          alt={props.slug}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'mirror', ease: "linear" }}
        />
        {/* Soft dark overlay to make sure the center icon always pops out */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)' }} />
      </div>

      <Motion.div
        className="service-hero-center-icon"
        style={{
          backgroundColor: '#fff', // Or keep standard classes if defined
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}
        animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
        transition={loop(4.5, 0.2)}
      >
        {props.Icon ? React.createElement(props.Icon, { size: 60, color: '#e50031' }) : null}
      </Motion.div>
    </div>
  );
};

export default ServiceHeroVisual;
