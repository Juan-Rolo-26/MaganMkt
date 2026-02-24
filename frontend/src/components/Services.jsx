import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  ArrowRightIcon,
  ChartIcon,
  ChevronRightIcon,
  IncBadgeIcon,
  MegaphoneIcon,
  PaletteIcon,
  PenIcon,
  UsersIcon,
} from "./SiteIcons";

const services = [
  { title: "Estrategia de Marketing", slug: "estrategia-de-marketing", Icon: IncBadgeIcon, description: ["Auditoria de estrategias actuales", "Planificacion estrategica personalizada", "Identificacion de oportunidades clave"] },
  { title: "Marketing Digital", slug: "marketing-digital", Icon: ChartIcon, description: ["SEO tecnico y local", "Campanas SEM en Google Ads", "Gestion estrategica de redes sociales"] },
  { title: "Branding y Diseño", slug: "branding-y-diseno", Icon: PaletteIcon, highlight: true, description: ["Identidad visual y rebranding", "Diseno UX/UI moderno", "Desarrollo web y e-commerce"] },
  { title: "Publicidad y Medios", slug: "publicidad-y-medios", Icon: MegaphoneIcon, description: ["Campanas en medios digitales", "Remarketing avanzado", "Optimizacion de retorno (ROI)"] },
  { title: "Relaciones Públicas y Activaciones", slug: "relaciones-publicas-y-activaciones", Icon: UsersIcon, description: ["Estrategias de PR", "Gestion de eventos corporativos", "Activaciones de marca memorables"] },
  { title: "Marketing de Contenidos", slug: "marketing-de-contenidos", Icon: PenIcon, description: ["Blogs y articulos estrategicos", "Produccion audiovisual", "Copywriting persuasivo"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
  },
};

const Services = () => {
  return (
    <>
      <section id="services" className="services-section" style={{ background: '#050505', padding: '120px 0' }}>
        <div className="services-container" style={{ maxWidth: '1580px' }}>
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="services-header"
            style={{ marginBottom: '80px', textAlign: 'center' }}
          >
            <Motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-chip"
              style={{
                background: '#000',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '10px 24px',
                borderRadius: '30px',
                fontWeight: '700',
                fontSize: '0.8rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'inline-block',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              Nuestra Experticia
            </Motion.span>

            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ color: '#000', fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: '1', marginTop: '30px', fontWeight: '900' }}
            >
              Soluciones de <br />
              <span style={{ color: '#000' }}>Alto Rendimiento.</span>
            </Motion.h2>
          </Motion.div>

          <Motion.div
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, i) => {
              const Icon = service.Icon;
              return (
                <Motion.article
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`service-card ${service.highlight ? "service-card-large" : ""}`}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(145deg, #0a0a0a 0%, #050505 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '28px',
                    minHeight: '470px',
                    padding: '50px 42px',
                    backdropFilter: 'blur(15px)'
                  }}
                >
                  {/* Efecto de luz interna en hover */}
                  <div className="card-glow" style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'radial-gradient(circle at 50% 0%, rgba(227, 28, 37, 0.08), transparent 70%)',
                    opacity: 0.5
                  }} />

                  <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="icon-box" style={{
                      background: 'rgba(227, 28, 37, 0.12)',
                      width: '62px', height: '62px',
                      borderRadius: '16px', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      marginBottom: '26px', color: '#E31C25'
                    }}>
                      <Icon size={30} />
                    </div>

                    <h3 style={{ fontSize: '1.72rem', marginBottom: '22px', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{service.title}</h3>

                    <ul className="service-list" style={{ flexGrow: 1, listStyle: 'none', padding: 0 }}>
                      {service.description.map((item, idx) => (
                        <Motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + (idx * 0.1) }}
                          style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}
                        >
                          <ChevronRightIcon size={13} style={{ color: '#E31C25', marginTop: '3px' }} />
                          {item}
                        </Motion.li>
                      ))}
                    </ul>

                    <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
                      <Link
                        to={`/servicios/${service.slug}`}
                        className="pa-btn-cta text-decoration-none"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: '8px',
                          padding: '13px 28px', fontSize: '0.84rem', fontWeight: '700',
                          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)',
                          color: '#fff', borderRadius: '100px', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          textTransform: 'uppercase', letterSpacing: '1.5px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#E31C25';
                          e.currentTarget.style.borderColor = '#E31C25';
                          e.currentTarget.style.boxShadow = '0 10px 20px rgba(227, 28, 37, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Explorar <ArrowRightIcon size={12} />
                      </Link>
                    </div>
                  </div>
                </Motion.article>
              );
            })}
          </Motion.div>
        </div>
      </section>

      {/* CTA SECTION MEJORADA */}
      <section style={{ backgroundColor: "#000", position: 'relative' }}>
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="services-cta"
          style={{ marginTop: 0, padding: "120px 20px", textAlign: "center" }}
        >
          <div
            className="services-cta-card"
            style={{
              maxWidth: "1100px", margin: "0 auto", padding: "100px 40px",
              borderRadius: "54px", background: "#0A0A0A",
              border: "1px solid rgba(227, 28, 37, 0.1)", position: "relative",
              overflow: "hidden", boxShadow: "0 50px 100px -20px rgba(0,0,0,0.8)",
              transform: "translateZ(0)"
            }}
          >
            {/* Animación de fondo (Glow Dinámico) */}
            <Motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                position: "absolute", top: "-50%", left: "-10%", width: "600px", height: "600px",
                background: "radial-gradient(circle, rgba(227, 28, 37, 0.15), transparent 70%)",
                filter: "blur(80px)", zIndex: 0
              }}
            />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <Motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: "800", color: "#fff", lineHeight: "1", marginBottom: "30px" }}
              >
                ¿Listo para dejar de improvisar <br />
                en tu <span style={{ color: "#E31C25", textShadow: '0 0 30px rgba(227, 28, 37, 0.3)' }}>marketing?</span>
              </Motion.h3>

              <Motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.5)", maxWidth: "700px", margin: "0 auto 50px", fontWeight: "300" }}
              >
                En <strong>MagnaMKT</strong> diseñamos estrategias claras y medibles para convertir tus objetivos en resultados reales.
              </Motion.p>

              <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contacto"
                  style={{
                    display: "inline-block", padding: "24px 60px", backgroundColor: "#E31C25",
                    color: "#fff", borderRadius: "100px", textDecoration: "none",
                    fontWeight: "700", fontSize: "1rem", letterSpacing: "2px",
                    boxShadow: "0 20px 40px rgba(227, 28, 37, 0.4)", textTransform: "uppercase"
                  }}
                >
                  Comenzar el cambio
                </Link>
              </Motion.div>
            </div>
          </div>
        </Motion.div>
      </section>
    </>
  );
};

export default Services;
