import React from "react";
import { motion } from "framer-motion";
import BackgroundAnimation from "./BackgroundAnimation"; const ease = [0.22, 1, 0.36, 1];

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
            }}
        >
            {/* Background animado de red */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(10,10,14,0.95), rgba(0,0,0,0.9))", zIndex: -2 }} />
                <BackgroundAnimation />
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 0%, #000 100%)", zIndex: 1, pointerEvents: "none" }} />
            </div>

            {/* Orb rojo decorativo (Centrado) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "800px",
                    height: "800px",
                    background: "radial-gradient(circle, rgba(227,28,37,0.4), transparent 60%)",
                    filter: "blur(90px)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

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
                    zIndex: 1,
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
                        href="#servicios"
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
