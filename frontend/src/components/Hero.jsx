import React from "react";
import { motion } from "framer-motion";
import logoMagna from "../assets/logos/logo.png";
import logoRojo from "../assets/images/NEGRO_LETRAS_ROJAS-removebg-preview.png";

const ease = [0.22, 1, 0.36, 1];

const Hero = () => {
    return (
        <section
            className="hero-minimal"
            id="home"
            style={{
                position: "relative",
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "#0f0104",
            }}
        >
            {/* ── FONDO ROJO OSCURO BORGOÑA ── */}
            {/* Capa base: rojo oscuro profundo y saturado */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(160deg, #2a0308 0%, #180104 35%, #200308 65%, #0e0002 100%)",
                zIndex: 0,
            }} />

            {/* Glow rojo central fuerte */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(220,0,20,0.28) 0%, rgba(160,0,10,0.08) 55%, transparent 80%)",
                zIndex: 1,
                pointerEvents: "none",
            }} />

            {/* Viñeta esquinas oscuras */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse 120% 120% at 50% 50%, transparent 40%, rgba(0,0,0,0.75) 100%)",
                zIndex: 1,
                pointerEvents: "none",
            }} />

            {/* Logo MAGNA con letras ROJAS — marca de agua de fondo bien visible */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -48%)",
                    width: "130vw",
                    maxWidth: "1500px",
                    zIndex: 2,
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Logo rojo principal — letras bien visibles */}
                <img
                    src={logoRojo}
                    alt="Magna MKT watermark"
                    style={{
                        width: "100%",
                        height: "auto",
                        opacity: 0.35,
                        userSelect: "none",
                        filter: "saturate(1.4) brightness(1.2)",
                        mixBlendMode: "screen",
                    }}
                />
            </div>

            {/* Glow rojo extra al centro — refuerza la atmósfera roja */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "1100px",
                height: "700px",
                background: "radial-gradient(ellipse, rgba(220,10,30,0.20) 0%, rgba(180,0,10,0.06) 50%, transparent 70%)",
                filter: "blur(80px)",
                zIndex: 1,
                pointerEvents: "none",
            }} />

            <div
                className="container-centered"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "0 2rem",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 10,
                    textAlign: "center",
                }}
            >
                {/* ── CONTENIDO CENTRADO ── */}
                {/* Eliminado el Badge a petición */}

                {/* Título principal */}
                <motion.h1
                    className="hero-title-large"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease }}
                    style={{
                        margin: "0 0 35px 0",
                        lineHeight: "1.05",
                        fontSize: "clamp(3rem, 7vw, 5.5rem)",
                        fontWeight: "900",
                        letterSpacing: "-0.03em"
                    }}
                >
                    Impulsamos empresas<br /> como la tuya a través <br />
                    del <span className="text-accent" style={{ WebkitTextStroke: "1px transparent" }}>marketing.</span>
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.35, ease }}
                    style={{
                        margin: "0 auto 50px auto",
                        textAlign: "center",
                        fontSize: "1.35rem",
                        maxWidth: "750px",
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: "300",
                        lineHeight: "1.6"
                    }}
                >
                    Estrategia, creatividad y performance trabajando en conjunto.
                    <br />
                    Resultados medibles. Crecimiento sostenible.
                </motion.p>

                {/* Botones CTA */}
                <motion.div
                    className="hero-cta-group"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease }}
                    style={{
                        display: "flex",
                        gap: "1.5rem",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}
                >
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(227,28,37,0.45)" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://calendly.com/dballerini"
                        className="btn-main"
                        style={{ padding: "18px 40px", fontSize: "1.05rem" }}
                    >
                        Reserva tu consultoría
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        href="/casos-de-exito"
                        className="btn-secondary"
                        style={{ padding: "18px 40px", fontSize: "1.05rem" }}
                    >
                        Nuestros proyectos
                    </motion.a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 1.3, duration: 1 }}
                style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                }}
            >
                <span style={{ fontSize: "0.65rem", letterSpacing: "2px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>
                    Desliza
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    style={{
                        width: "1px",
                        height: "32px",
                        background: "linear-gradient(to bottom, rgba(227,28,37,0.8), transparent)",
                    }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
