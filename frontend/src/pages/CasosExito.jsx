import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Logos de marcas ──────────────────────────── */
import logoGolf from "../assets/images/marcas (71).png";
import logoAquasansa from "../assets/images/marcas (72).png";
import logoTradigital from "../assets/images/marcas (73).png";
import logoAldeitas from "../assets/images/marcas (74).png";
import logoAPuroPelo from "../assets/images/marcas (75).png";
import logoAdmiUp from "../assets/images/marcas (76).png";
import logoBecominds from "../assets/images/marcas (77).png";
import logoNimmus from "../assets/images/marcas (78).png";
import logoImpacto from "../assets/images/marcas (79).png";
import logoAmes from "../assets/images/marcas (80).png";

const ease = [0.22, 1, 0.36, 1];

const casos = [
    {
        id: 1,
        logo: logoGolf,
        nombre: "Golf Argentino Store",
        sector: "E-commerce",
        color: "#22c55e",
        tagline: "Tienda especializada en equipamiento y accesorios de golf premium.",
        descripcion: "Tienda especializada en equipamiento y accesorios de golf, orientada a jugadores que buscan marcas premium, asesoramiento técnico y experiencia profesional de compra.",
        estrategia: "Desde Magna trabajamos la estrategia digital integral, con foco en crecimiento del ecommerce, tracción de tráfico calificado y campañas de conversión directa a venta. Desarrollamos el ecosistema de performance, optimización de embudos y posicionamiento dentro de un nicho altamente específico, priorizando rentabilidad, escalabilidad y construcción de marca.",
        tags: ["E-commerce", "Performance", "Branding"],
        resultados: ["Crecimiento ecommerce", "Tráfico calificado", "Conversión directa"],
    },
    {
        id: 2,
        logo: logoAquasansa,
        nombre: "Aquasansa Piscinas",
        sector: "Construcción",
        color: "#38bdf8",
        tagline: "Empresa líder en piscinas de fibra de vidrio con foco en calidad.",
        descripcion: "Empresa dedicada a la comercialización e instalación de piscinas de fibra de vidrio, con fuerte orientación al servicio personalizado y calidad constructiva.",
        estrategia: "En Magna desarrollamos su estrategia de marketing digital con foco en generación de leads de alta intención, campañas de captación y optimización comercial en temporada alta. Trabajamos la tracción de tráfico segmentado y el diseño del embudo de conversión para transformar inversión publicitaria en oportunidades reales de venta.",
        tags: ["Lead Generation", "Temporada Alta", "Embudo de Conversión"],
        resultados: ["Leads de alta intención", "Optimización comercial", "Mayor conversión"],
    },
    {
        id: 3,
        logo: logoTradigital,
        nombre: "TraDigital",
        sector: "Consultoría B2B",
        color: "#a78bfa",
        tagline: "Consultora en transformación digital para empresas tradicionales.",
        descripcion: "Consultora especializada en transformación digital para empresas tradicionales que buscan evolucionar su modelo de negocio.",
        estrategia: "Acompañamos el desarrollo estratégico, la definición de propuesta de valor y la estructuración del posicionamiento digital. Implementamos estrategias de tracción B2B orientadas a generación de prospectos calificados, fortaleciendo su presencia online como partner estratégico para procesos de digitalización empresarial.",
        tags: ["B2B", "Posicionamiento", "Transformación Digital"],
        resultados: ["Propuesta de valor clara", "Prospectos calificados", "Presencia digital sólida"],
    },
    {
        id: 4,
        logo: logoAPuroPelo,
        nombre: "A Puro Pelo",
        sector: "Belleza",
        color: "#facc15",
        tagline: "Referente en belleza profesional con canal ecommerce activo.",
        descripcion: "Empresa referente en el rubro belleza profesional, con amplia trayectoria en el mercado B2B y desarrollo del canal ecommerce.",
        estrategia: "Desde Magna trabajamos la reorganización estratégica del área de marketing y comercial, activación y optimización del ecommerce y campañas de tráfico orientadas tanto a generación de demanda como a conversión directa a venta. El foco está puesto en crecimiento sostenible, eficiencia operativa y escalabilidad digital.",
        tags: ["E-commerce", "B2B", "Escalabilidad"],
        resultados: ["Reorganización estratégica", "Ecommerce activo", "Crecimiento sostenible"],
    },
    {
        id: 5,
        logo: logoAdmiUp,
        nombre: "AdmiUp",
        sector: "Fintech",
        color: "#fb923c",
        tagline: "Plataforma de soluciones financieras para emprendedores.",
        descripcion: "Plataforma de soluciones financieras orientada a emprendedores y pequeñas empresas.",
        estrategia: "Desarrollamos su estrategia de posicionamiento digital, estructuración del mensaje comercial y construcción del embudo de conversión. Trabajamos campañas de tracción enfocadas en adquisición de usuarios, optimización del costo por lead y crecimiento sostenido del ecosistema digital.",
        tags: ["Fintech", "Adquisición de Usuarios", "CPL"],
        resultados: ["Posicionamiento digital", "Costo por lead optimizado", "Ecosistema creciente"],
    },
    {
        id: 6,
        logo: logoBecominds,
        nombre: "Becominds Digital Consulting",
        sector: "Consultoría Digital",
        color: "#2dd4bf",
        tagline: "Estrategia digital, innovación y desarrollo de negocios B2B.",
        descripcion: "Consultora especializada en estrategia digital, innovación y desarrollo de negocios.",
        estrategia: "Acompañamos la consolidación de su identidad estratégica y el fortalecimiento de su propuesta de valor en el mercado B2B. Implementamos acciones de marketing digital orientadas a generación de oportunidades comerciales, posicionamiento y expansión de su alcance profesional.",
        tags: ["B2B", "Identidad de Marca", "Expansion"],
        resultados: ["Identidad estratégica sólida", "Oportunidades comerciales", "Mayor alcance"],
    },
    {
        id: 7,
        logo: logoNimmus,
        nombre: "NimMus",
        sector: "Tecnología",
        color: "#e31c25",
        tagline: "Soluciones de analítica y optimización de negocios.",
        descripcion: "Empresa tecnológica orientada a soluciones de analítica y optimización de negocios.",
        estrategia: "Desde Magna colaboramos en la definición estratégica de comunicación y en la construcción de su narrativa comercial. Implementamos estrategias de tracción digital enfocadas en generación de leads calificados y posicionamiento como solución tecnológica de alto impacto.",
        tags: ["Tecnología", "Narrativa Comercial", "Lead Qualificado"],
        resultados: ["Narrativa clara", "Leads calificados", "Posicionamiento tech"],
    },
    {
        id: 8,
        logo: logoImpacto,
        nombre: "Impacto by AMES",
        sector: "Comunidad",
        color: "#a855f7",
        tagline: "Aceleradora y comunidad de emprendedores para formación y networking.",
        descripcion: "Aceleradora y comunidad de emprendedores impulsada por AMES, orientada a formación, networking e inversión.",
        estrategia: "Participamos en la estrategia de captación digital, diseño del sistema de conversión y campañas de adquisición de nuevos miembros. El foco está puesto en tracción de tráfico segmentado, conversión a membresías y consolidación de la propuesta como espacio de referencia para emprendedores en crecimiento.",
        tags: ["Comunidad", "Membresías", "Captación"],
        resultados: ["Sistema de captación", "Conversión a membresías", "Referente emprendedor"],
    },
    {
        id: 9,
        logo: logoAmes,
        nombre: "AMES",
        sector: "Mutual / Institución",
        color: "#3b82f6",
        tagline: "Asociación Mutual de Emprendedores de Santa Fe.",
        descripcion: "Asociación Mutual de Emprendedores de Santa Fe, dedicada a brindar herramientas financieras y acompañamiento a proyectos productivos.",
        estrategia: "Trabajamos la estrategia de comunicación institucional, posicionamiento digital y activación de campañas orientadas a captación de nuevos asociados. El enfoque combina branding, tracción de tráfico y generación de oportunidades comerciales para fortalecer su expansión.",
        tags: ["Institucional", "Branding", "Captación de Asociados"],
        resultados: ["Comunicación institucional", "Nuevos asociados", "Expansión territorial"],
    },
    {
        id: 10,
        logo: logoAldeitas,
        nombre: "Aldeitas Food",
        sector: "Alimentación",
        color: "#84cc16",
        tagline: "Producción y distribución de alimentos B2B y B2C con calidad casera.",
        descripcion: "Empresa dedicada a la producción y distribución de alimentos prácticos, con foco en calidad casera y soluciones tanto B2B como B2C.",
        estrategia: "En Magna trabajamos la estrategia comercial y digital integral, priorizando el desarrollo del canal B2B mediante generación de prospectos calificados y expansión territorial. Complementariamente, diseñamos acciones de tracción digital orientadas a crecimiento de demanda y posicionamiento de marca en el mercado gastronómico.",
        tags: ["Alimentos", "B2B", "Expansión Territorial"],
        resultados: ["Canal B2B desarrollado", "Expansión territorial", "Marca posicionada"],
    },
];

/* ─────────────────────────────────────────────── */
/*  Tarjeta individual                             */
/* ─────────────────────────────────────────────── */
const CasoCard = ({ caso, index }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            id={`caso-${caso.id}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.06, ease }}
            style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                border: `1px solid ${expanded ? caso.color + "44" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                boxShadow: expanded ? `0 0 40px ${caso.color}22` : "0 8px 32px rgba(0,0,0,0.3)",
            }}
            onClick={() => setExpanded(!expanded)}
            whileHover={{
                borderColor: `${caso.color}33`,
                boxShadow: `0 12px 48px ${caso.color}18`,
            }}
        >
            {/* ── Header ── */}
            <div style={{
                padding: "2rem 2rem 1.5rem",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", flex: 1 }}>
                    {/* Logo real de la marca */}
                    <div style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "18px",
                        background: "#111",
                        border: `1px solid ${caso.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        flexShrink: 0,
                        boxShadow: `0 4px 20px ${caso.color}15`,
                    }}>
                        <img
                            src={caso.logo}
                            alt={caso.nombre}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div>
                        <div style={{
                            fontSize: "0.65rem",
                            fontWeight: "700",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: caso.color,
                            marginBottom: "4px",
                        }}>
                            {caso.sector}
                        </div>
                        <h3 style={{
                            fontSize: "1.2rem",
                            fontWeight: "800",
                            color: "#fff",
                            lineHeight: "1.2",
                            margin: 0,
                        }}>
                            {caso.nombre}
                        </h3>
                        <p style={{
                            fontSize: "0.83rem",
                            color: "rgba(255,255,255,0.45)",
                            margin: "4px 0 0",
                            lineHeight: "1.4",
                        }}>
                            {caso.tagline}
                        </p>
                    </div>
                </div>

                {/* Flecha expandir */}
                <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease }}
                    style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "rgba(255,255,255,0.6)",
                    }}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </motion.div>
            </div>

            {/* ── Tags ── */}
            <div style={{ padding: "0 2rem 1.5rem", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {caso.tags.map((tag) => (
                    <span key={tag} style={{
                        fontSize: "0.68rem",
                        fontWeight: "700",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        background: `${caso.color}12`,
                        border: `1px solid ${caso.color}25`,
                        color: caso.color,
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* ── Contenido expandible ── */}
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{
                            padding: "1.5rem 2rem 2rem",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}>
                            {/* Sobre el cliente */}
                            <div style={{ marginBottom: "1.5rem" }}>
                                <span style={{
                                    fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.12em",
                                    textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
                                    display: "block", marginBottom: "8px",
                                }}>
                                    Sobre el cliente
                                </span>
                                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: "1.7", margin: 0 }}>
                                    {caso.descripcion}
                                </p>
                            </div>

                            {/* Nuestra estrategia */}
                            <div style={{ marginBottom: "1.5rem" }}>
                                <span style={{
                                    fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.12em",
                                    textTransform: "uppercase", color: caso.color, opacity: 0.85,
                                    display: "block", marginBottom: "8px",
                                }}>
                                    Nuestra estrategia
                                </span>
                                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", margin: 0 }}>
                                    {caso.estrategia}
                                </p>
                            </div>

                            {/* Áreas de impacto */}
                            <div style={{
                                background: `${caso.color}0a`,
                                border: `1px solid ${caso.color}20`,
                                borderRadius: "16px",
                                padding: "1.2rem 1.5rem",
                            }}>
                                <span style={{
                                    fontSize: "0.65rem", fontWeight: "700", letterSpacing: "0.12em",
                                    textTransform: "uppercase", color: caso.color,
                                    display: "block", marginBottom: "1rem",
                                }}>
                                    Áreas de impacto
                                </span>
                                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                                    {caso.resultados.map((r) => (
                                        <div key={r} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", fontWeight: "600" }}>
                                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: caso.color, flexShrink: 0 }} />
                                            {r}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ─────────────────────────────────────────────── */
/*  Página principal                               */
/* ─────────────────────────────────────────────── */
const CasosExito = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            style={{ background: "#000", minHeight: "100vh" }}
        >
            {/* ── Hero Header ── */}
            <section style={{ position: "relative", paddingTop: "160px", paddingBottom: "80px", padding: "160px 2rem 80px", textAlign: "center", overflow: "hidden" }}>
                <div style={{
                    position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
                    width: "700px", height: "400px",
                    background: "radial-gradient(ellipse, rgba(227,28,37,0.15) 0%, transparent 70%)",
                    filter: "blur(60px)", pointerEvents: "none",
                }} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease }}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        border: "1px solid rgba(227,28,37,0.35)", color: "#ff6b6b",
                        fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.14em",
                        fontWeight: "700", borderRadius: "999px", padding: "6px 16px",
                        background: "rgba(227,28,37,0.08)", marginBottom: "1.5rem",
                    }}
                >
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#e31c25", display: "inline-block" }} />
                    Casos de Éxito
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease }}
                    style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: "900", letterSpacing: "-0.04em", lineHeight: "1.05", color: "#fff", margin: "0 auto 1.5rem", maxWidth: "800px" }}
                >
                    Marcas que <span style={{ color: "#e31c25" }}>crecieron</span><br />con Magna
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35, ease }}
                    style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.55)", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: "1.6", fontWeight: "300" }}
                >
                    Estrategia, ejecución y resultados reales. Conocé cómo trabajamos
                    con cada cliente para impulsar su crecimiento digital.
                </motion.p>
            </section>

            {/* ── Grid de casos ── */}
            <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem 6rem" }}>
                <motion.div
                    layout
                    style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 540px), 1fr))", gap: "1.5rem" }}
                >
                    <AnimatePresence mode="popLayout">
                        {casos.map((caso, index) => (
                            <CasoCard key={caso.id} caso={caso} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* ── CTA bottom ── */}
            <section style={{ padding: "4rem 2rem 8rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7, ease }}
                >
                    <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", marginBottom: "1rem", fontWeight: "700" }}>
                        ¿Tu empresa puede ser el próximo caso?
                    </p>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", letterSpacing: "-0.03em", color: "#fff", marginBottom: "2rem" }}>
                        Hablemos de tu <span style={{ color: "#e31c25" }}>proyecto</span>
                    </h2>
                    <a
                        href="https://calendly.com/dballerini"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "10px",
                            padding: "16px 36px", background: "#e31c25", color: "#fff",
                            borderRadius: "12px", fontWeight: "800", fontSize: "1rem",
                            letterSpacing: "0.02em", textDecoration: "none",
                            transition: "transform 0.25s ease, box-shadow 0.25s ease",
                            boxShadow: "0 8px 32px rgba(227,28,37,0.35)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "0 16px 48px rgba(227,28,37,0.45)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(227,28,37,0.35)";
                        }}
                    >
                        Reserva tu consultoría gratuita
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </a>
                </motion.div>
            </section>
        </motion.div>
    );
};

export default CasosExito;
