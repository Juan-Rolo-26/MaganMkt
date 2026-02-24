import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/images/ROJO_LETRAS BLANCAS.jpg";
import heroImg from "../assets/images/Frente.png";

const Hero = () => {
    return (
        <section
            className="hero-minimal"
            id="home"
            style={{
                position: "relative",
                height: "100vh", // Ocupa toda la pantalla
                width: "100%",
                display: "flex",
                alignItems: "center",
                overflow: "hidden" // Evita el scroll
            }}
        >
            {/* Background con overlay sutil */}
            <div
                className="hero-bg-overlay"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    inset: 0,
                    zIndex: -1,
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
                    justifyContent: "space-between", // Aprovecha mejor el ancho
                    gap: "2rem",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-content-minimal"
                    style={{ flex: "1.2", textAlign: "left" }} // Un poco más de peso al texto
                >
                    <h1
                        className="hero-title-large"
                        style={{
                            margin: "0 0 25px 0",
                            lineHeight: "1.1",
                            fontSize: "clamp(2.5rem, 5vw, 4rem)" // Tamaño adaptable
                        }}
                    >
                        Impulsamos empresas como la tuya a través <br />
                        del <span className="text-accent">marketing.</span>
                    </h1>

                    <p
                        className="hero-subtitle"
                        style={{
                            margin: "0 0 40px 0",
                            textAlign: "left",
                            fontSize: "1.2rem",
                            maxWidth: "600px"
                        }}
                    >
                        Estrategia, creatividad y performance trabajando en conjunto.
                        <br />
                        Resultados medibles. Crecimiento sostenible.
                    </p>

                    <div
                        className="hero-cta-group"
                        style={{
                            display: "flex",
                            gap: "1.5rem",
                            justifyContent: "flex-start"
                        }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://calendly.com/dballerini"
                            className="btn-main"
                        >
                            Reserva tu consultoría
                        </motion.a>
                        <a href="#servicios" className="btn-secondary">
                            Nuestros proyectos
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hero-founder-image"
                    style={{
                        flex: "1",
                        display: "flex",
                        justifyContent: "flex-end", // Empuja la imagen a la derecha
                        position: "relative",
                        maxHeight: "80vh", // Evita que la imagen sea muy alta
                    }}
                >
                    <img
                        src={heroImg}
                        alt="Diego Ballerini"
                        style={{
                            width: "auto",
                            maxHeight: "75vh", // La imagen no se sale de la pantalla
                            maxWidth: "100%",
                            objectFit: "contain",
                            borderRadius: "24px",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                    />
                    {/* Efecto rojizo de fondo */}
                    <div
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
                    ></div>
                </motion.div>
            </div>

            {/* Scroll indicator - Posicionado abajo de todo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1, duration: 2 }}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)"
                }}
                className="scroll-indicator"
            />
        </section>
    );
};

export default Hero;