import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  ArrowRightIcon,
  ChartIcon,
  IncBadgeIcon,
  MegaphoneIcon,
  PaletteIcon,
  PenIcon,
  UsersIcon,
} from "./SiteIcons";

const services = [
  {
    title: "Estrategia de Marketing",
    slug: "estrategia-de-marketing",
    Icon: IncBadgeIcon,
    num: "01",
    tag: "Estrategia",
    description: [
      "Auditoria de estrategias actuales",
      "Planificacion estrategica personalizada",
      "Identificacion de oportunidades clave",
    ],
    accent: "#E31C25",
  },
  {
    title: "Marketing Digital",
    slug: "marketing-digital",
    Icon: ChartIcon,
    num: "02",
    tag: "Digital",
    description: [
      "SEO tecnico y local",
      "Campanas SEM en Google Ads",
      "Gestion estrategica de redes sociales",
    ],
    accent: "#E31C25",
  },
  {
    title: "Identidad de Marca y Diseno",
    slug: "branding-y-diseno",
    Icon: PaletteIcon,
    num: "03",
    tag: "Marca",
    description: [
      "Identidad visual y renovacion de marca",
      "Diseno UX/UI moderno",
      "Desarrollo web y comercio electronico",
    ],
    accent: "#E31C25",
    featured: true,
  },
  {
    title: "Publicidad y Medios",
    slug: "publicidad-y-medios",
    Icon: MegaphoneIcon,
    num: "04",
    tag: "Anuncios",
    description: [
      "Campanas en medios digitales",
      "Remarketing avanzado",
      "Optimizacion de retorno (ROI)",
    ],
    accent: "#E31C25",
  },
  {
    title: "Relaciones Públicas y Activaciones",
    slug: "relaciones-publicas-y-activaciones",
    Icon: UsersIcon,
    num: "05",
    tag: "RR. PP.",
    description: [
      "Estrategias de relaciones publicas",
      "Gestion de eventos corporativos",
      "Activaciones de marca memorables",
    ],
    accent: "#E31C25",
  },
  {
    title: "Marketing de Contenidos",
    slug: "marketing-de-contenidos",
    Icon: PenIcon,
    num: "06",
    tag: "Contenido",
    description: [
      "Blogs y articulos estrategicos",
      "Produccion audiovisual",
      "Redaccion persuasiva",
    ],
    accent: "#E31C25",
  },
];

// ── animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const chipVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
};

const counterVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

// ── ServiceCard ───────────────────────────────────────────────────────────────
const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = service.Icon;

  return (
    <Motion.article
      custom={index}
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: hovered ? "#E31C25" : "#0C0C0C",
        border: "1px solid",
        borderColor: hovered ? "#E31C25" : "rgba(255,255,255,0.07)",
        borderRadius: "4px",
        padding: "44px 40px 36px",
        cursor: "pointer",
        transition: "background 0.45s cubic-bezier(0.4,0,0.2,1), border-color 0.45s ease",
        display: "flex",
        flexDirection: "column",
        minHeight: "340px",
      }}
    >
      {/* Número grande de fondo */}
      <Motion.span
        animate={{ opacity: hovered ? 0.1 : 0.04 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          top: "-24px",
          right: "24px",
          fontSize: "9rem",
          fontWeight: "900",
          lineHeight: 1,
          color: "#fff",
          letterSpacing: "-0.04em",
          userSelect: "none",
          pointerEvents: "none",
          fontFamily: "inherit",
        }}
      >
        {service.num}
      </Motion.span>

      {/* Tag + Icono */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "auto",
        }}
      >
        <Motion.span
          animate={{
            background: hovered ? "rgba(255,255,255,0.18)" : "rgba(227,28,37,0.12)",
            color: hovered ? "#fff" : "#E31C25",
          }}
          transition={{ duration: 0.35 }}
          style={{
            display: "inline-block",
            padding: "5px 14px",
            borderRadius: "2px",
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
          }}
        >
          {service.tag}
        </Motion.span>
        <Motion.div
          animate={{
            background: hovered ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.04)",
            borderColor: hovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.08)",
            color: hovered ? "#fff" : "#E31C25",
            rotate: hovered ? 15 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            border: "1px solid",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={20} />
        </Motion.div>
      </div>

      {/* Línea decorativa */}
      <Motion.div
        animate={{
          width: hovered ? "100%" : "40px",
          background: hovered ? "rgba(255,255,255,0.3)" : "#E31C25",
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          height: "1px",
          margin: "32px 0 24px",
        }}
      />

      {/* Título */}
      <h3
        style={{
          fontSize: "1.45rem",
          fontWeight: "800",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        {service.title}
      </h3>

      {/* Lista */}
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px" }}>
        {service.description.map((item, idx) => (
          <Motion.li
            key={idx}
            animate={{ color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)" }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "0.92rem",
              marginBottom: "10px",
            }}
          >
            <Motion.span
              animate={{ background: hovered ? "#fff" : "#E31C25" }}
              transition={{ duration: 0.35 }}
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            {item}
          </Motion.li>
        ))}
      </ul>

      {/* CTA */}
      <div style={{ marginTop: "auto" }}>
        <Link
          to={`/servicios/${service.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: hovered ? "#fff" : "rgba(255,255,255,0.5)",
            fontSize: "0.78rem",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "color 0.4s ease",
          }}
        >
          Explorar
          <Motion.span
            animate={{ width: hovered ? "40px" : "28px", background: hovered ? "#fff" : "rgba(255,255,255,0.3)" }}
            transition={{ duration: 0.4 }}
            style={{
              height: "1px",
              display: "inline-block",
            }}
          />
          <ArrowRightIcon size={12} />
        </Link>
      </div>
    </Motion.article>
  );
};

// ── Services (main component) ─────────────────────────────────────────────────
const Services = () => {
  return (
    <>
      <section
        id="services"
        style={{
          background: "#080808",
          padding: "130px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Línea vertical decorativa */}
        <Motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent, rgba(227,28,37,0.15) 30%, rgba(227,28,37,0.15) 70%, transparent)",
            transformOrigin: "top",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          {/* ─── HEADER ─────────────────────────────────────── */}
          <Motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "80px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              {/* Chip con línea lateral */}
              <Motion.div
                variants={chipVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
              >
                <Motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "36px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ height: "2px", background: "#E31C25" }}
                />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: "700",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "#E31C25",
                  }}
                >
                  Nuestra Experticia
                </span>
              </Motion.div>

              <Motion.h2
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: "900",
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  color: "#fff",
                  margin: 0,
                }}
              >
                Soluciones de{" "}
                <span
                  style={{
                    WebkitTextStroke: "2px #E31C25",
                    color: "transparent",
                  }}
                >
                  Alto
                </span>
                <br />
                Rendimiento.
              </Motion.h2>
            </div>

            {/* Contador animado */}
            <Motion.div
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ textAlign: "right" }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "8px",
                }}
              >
                Servicios disponibles
              </span>
              <span
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "900",
                  color: "#E31C25",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                06
              </span>
            </Motion.div>
          </Motion.div>

          {/* ─── GRID DE TARJETAS ────────────────────────────── */}
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
          >
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </Motion.div>

          {/* ─── BARRA DE STATS ──────────────────────────────── */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              marginTop: "2px",
              background: "#E31C25",
              padding: "36px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "+200", label: "Clientes satisfechos" },
              { num: "+8", label: "Años de experiencia" },
              { num: "+500", label: "Proyectos completados" },
              { num: "98%", label: "Tasa de retención" },
            ].map(({ num, label }, i) => (
              <Motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "2.2rem",
                    fontWeight: "900",
                    color: "#fff",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.65)",
                    marginTop: "6px",
                    display: "block",
                  }}
                >
                  {label}
                </span>
              </Motion.div>
            ))}
            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#fff",
                  color: "#E31C25",
                  padding: "14px 32px",
                  borderRadius: "2px",
                  fontWeight: "800",
                  fontSize: "0.8rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Comenzar ahora <ArrowRightIcon size={13} />
              </Link>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* ─── CTA SECTION ─────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Motion.div
          initial={{ opacity: 0, scale: 0.92, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{ padding: "120px 20px", textAlign: "center" }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "100px 40px",
              borderRadius: "54px",
              background: "#f5f5f5",
              border: "1px solid rgba(227, 28, 37, 0.15)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 50px 100px -20px rgba(0,0,0,0.1)",
            }}
          >
            <Motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                position: "absolute",
                top: "-50%",
                left: "-10%",
                width: "600px",
                height: "600px",
                background: "radial-gradient(circle, rgba(227, 28, 37, 0.15), transparent 70%)",
                filter: "blur(80px)",
                zIndex: 0,
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <Motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                  fontWeight: "800",
                  color: "#0A0A0A",
                  lineHeight: "1",
                  marginBottom: "30px",
                }}
              >
                ¿Listo para dejar de improvisar <br />
                en tu{" "}
                <span
                  style={{
                    color: "#E31C25",
                    textShadow: "0 0 30px rgba(227, 28, 37, 0.2)",
                  }}
                >
                  marketing?
                </span>
              </Motion.h3>

              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "1.25rem",
                  color: "rgba(20,20,20,0.6)",
                  maxWidth: "700px",
                  margin: "0 auto 50px",
                  fontWeight: "300",
                }}
              >
                En <strong>MagnaMKT</strong> diseñamos estrategias claras y medibles para convertir
                tus objetivos en resultados reales.
              </Motion.p>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contacto"
                  style={{
                    display: "inline-block",
                    padding: "24px 60px",
                    backgroundColor: "#E31C25",
                    color: "#fff",
                    borderRadius: "100px",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "1rem",
                    letterSpacing: "2px",
                    boxShadow: "0 20px 40px rgba(227, 28, 37, 0.4)",
                    textTransform: "uppercase",
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
