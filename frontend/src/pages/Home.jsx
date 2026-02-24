import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import MetricsBar from '../components/MetricsBar';
import WorkProcess from '../components/WorkProcess';

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 }
};

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const element = document.querySelector(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <Motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      <MetricsBar />
      <WorkProcess />
      <Services />
    </Motion.div>
  );
};

export default Home;
