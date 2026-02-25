import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/images/ROJO_LETRAS BLANCAS.jpg";
import heroImg from "../assets/images/Frente.png";

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
                overflow: "hidden",
            }}
        >
            {/* Background animado con zoom-in */}
            <motion.div
                className="hero-bg-overlay"
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    inset: 0,
                    zIndex: -1,
                }}
            />

            {/* Orb rojo decorativo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.35, scale: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "-5%",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(227,28,37,0.4), transparent 70%)",
                    filter: "blur(80px)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />

            <div
                className="container-centered"
                style={{
                    display: "flex",
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 2rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "2rem",
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {/* ── IZQUIERDA: CONTENIDO ── */}
                <div className="hero-content-minimal" style={{ flex: "1.2", textAlign: "left" }}>

                    {/* Badge pulsante */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "24px",
                            padding: "6px 18px",
                            border: "1px solid rgba(227,28,37,0.4)",
                            borderRadius: "30px",
                            background: "rgba(227,28,37,0.08)",
                        }}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                            style={{
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                background: "#E31C25",
                                display: "inline-block",
                            }}
                        />
                        <span style={{ fontSize: "0.75rem", letterSpacing: "2px", color: "#E31C25", fontWeight: "700", textTransform: "uppercase" }}>
                            Agencia de Marketing
                        </span>
                    </motion.div>

                    {/* Título principal */}
                    <motion.h1
                        className="hero-title-large"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.2, ease }}
                        style={{
                            margin: "0 0 25px 0",
                            lineHeight: "1.1",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        }}
                    >
                        Impulsamos empresas como la tuya a través <br />
                        del <span className="text-accent">marketing.</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.35, ease }}
                        style={{
                            margin: "0 0 40px 0",
                            textAlign: "left",
                            fontSize: "1.2rem",
                            maxWidth: "600px",
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
                            justifyContent: "flex-start",
                        }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.07, boxShadow: "0 15px 40px rgba(227,28,37,0.45)" }}
                            whileTap={{ scale: 0.95 }}
                            href="https://calendly.com/dballerini"
                            className="btn-main"
                        >
                            Reserva tu consultoría
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            href="#servicios"
                            className="btn-secondary"
                        >
                            Nuestros proyectos
                        </motion.a>
                    </motion.div>
                </div>

                {/* ── DERECHA: IMAGEN ── */}
                <motion.div
                    className="hero-founder-image"
                    initial={{ opacity: 0, x: 70, scale: 0.93 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease }}
                    style={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "relative",
                        maxHeight: "80vh",
                    }}
                >
                    <motion.img
                        src={heroImg}
                        alt="Diego Ballerini"
                        whileHover={{ scale: 1.03, rotate: 0.8 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            width: "auto",
                            maxHeight: "75vh",
                            maxWidth: "100%",
                            objectFit: "contain",
                            borderRadius: "24px",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                    />
                    {/* Efecto rojizo de fondo */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "120%",
                            height: "120%",
                            background: "radial-gradient(circle, rgba(227, 28, 37, 0.25), transparent 70%)",
                            filter: "blur(60px)",
                            zIndex: -1,
                        }}
                    />
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
