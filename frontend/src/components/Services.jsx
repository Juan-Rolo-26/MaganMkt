import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ChartIcon,
  ChevronRightIcon,
  MegaphoneIcon,
  PaletteIcon,
  PenIcon,
  TargetIcon,
  UsersIcon
} from './SiteIcons';

const services = [
  {
    title: 'Estrategia de Marketing',
    description: [
      'Auditoria de estrategias actuales',
      'Planificacion estrategica personalizada',
      'Identificacion de oportunidades clave'
    ],
    Icon: TargetIcon
  },
  {
    title: 'Marketing Digital',
    description: [
      'SEO tecnico y local',
      'Campanas SEM en Google Ads',
      'Gestion estrategica de redes sociales'
    ],
    Icon: ChartIcon
  },
  {
    title: 'Branding y Desarrollo Web',
    description: [
      'Identidad visual y rebranding',
      'Diseno UX/UI moderno',
      'Desarrollo web y e-commerce'
    ],
    Icon: PaletteIcon,
    highlight: true
  },
  {
    title: 'Publicidad y Medios',
    description: [
      'Campanas en medios digitales',
      'Remarketing avanzado',
      'Optimizacion de retorno (ROI)'
    ],
    Icon: MegaphoneIcon
  },
  {
    title: 'Relaciones Publicas',
    description: [
      'Estrategias de PR',
      'Gestion de eventos corporativos',
      'Activaciones de marca memorables'
    ],
    Icon: UsersIcon
  },
  {
    title: 'Marketing de Contenidos',
    description: [
      'Blogs y articulos estrategicos',
      'Produccion audiovisual',
      'Copywriting persuasivo'
    ],
    Icon: PenIcon
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="services-header"
        >
          <span className="section-chip">Nuestros Servicios</span>
          <h2>
            Soluciones de Marketing para <span className="text-gradient">Impulsar tu Negocio</span>
          </h2>
          <p>
            Diseñamos soluciones que resuelven los desafios de tu empresa y convierten objetivos en
            resultados claros.
          </p>
        </Motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.Icon;
            return (
              <Motion.article
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`service-card ${service.highlight ? 'service-card-highlight' : ''}`}
              >
                {service.highlight && <span className="service-badge">Destacado</span>}

                <div className="service-icon-wrap">
                  <Icon size={30} />
                </div>

                <h3>{service.title}</h3>

                <ul>
                  {service.description.map((item) => (
                    <li key={item}>
                      <ChevronRightIcon size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Motion.article>
            );
          })}
        </div>

        <Motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
        >
          <p>¿Querés saber cual de estos servicios es ideal para tu negocio?</p>
          <a href="https://calendly.com/dballerini" target="_blank" rel="noopener noreferrer">
            <Motion.button className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <span>Hablemos y diseñemos tu estrategia</span>
              <ArrowRightIcon size={16} />
            </Motion.button>
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default Services;
