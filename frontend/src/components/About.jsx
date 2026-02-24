import React from 'react';
import { motion } from 'framer-motion';
import { ChartIcon, HandshakeIcon, PaletteIcon, TargetIcon, UsersIcon } from './SiteIcons';
import Lottie from 'lottie-react';
import digitalAnimation from '../assets/animations/digital.json';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const values = [
        { icon: <TargetIcon size={32} />, title: "Profesionalismo", desc: "Hacemos las cosas bien desde el principio, sin atajos." },
        { icon: <PaletteIcon size={32} />, title: "Creatividad", desc: "Encontramos soluciones originales que conectan con tu audiencia." },
        { icon: <HandshakeIcon size={32} />, title: "Compromiso", desc: "Nos ponemos la camiseta por tu negocio." },
        { icon: <ChartIcon size={32} />, title: "Resultados", desc: "No solo entregamos estrategias, entregamos impacto." },
        { icon: <UsersIcon size={32} />, title: "Cercanía", desc: "No somos solo tu agencia, somos tu aliado." }
    ];

    return (
        <div className="premium-about-page">
            {/* 1. HERO SECTION */}
            <section className="pa-hero">
                <div className="pa-hero-bg"></div>
                <div className="pa-container">
                    <motion.div className="pa-hero-grid" variants={containerVariants} initial="hidden" animate="visible">
                        <div className="pa-hero-content">
                            <motion.div className="pa-badge" variants={fadeUp}>
                                <span className="pa-badge-dot"></span>
                                El Marketing Sin Excusas
                            </motion.div>
                            <motion.h1 className="pa-hero-title" variants={fadeUp}>
                                El marketing tiene que<br />
                                <span className="pa-text-red">servir a los negocios.</span>
                            </motion.h1>
                            <motion.p className="pa-hero-desc" variants={fadeUp}>
                                Soy Diego Ballerini y en MagnaMKT diseño estrategias pensadas para una sola cosa:
                                <strong className="pa-strong"> resultados reales para empresas reales</strong>.
                            </motion.p>
                        </div>
                        <motion.div className="pa-hero-visual" variants={slideInRight}>
                            <div className="pa-animation-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Lottie
                                    animationData={digitalAnimation}
                                    loop={true}
                                    style={{ width: '100%', maxWidth: '650px', height: 'auto', zIndex: 1, filter: 'drop-shadow(0px 20px 40px rgba(255,0,60,0.15))' }}
                                />
                                <div className="pa-image-backdrop"></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. STORY SECTION */}
            <section className="pa-story">
                <div className="pa-container">
                    <div className="pa-story-grid">
                        <motion.div className="pa-story-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
                            <motion.h2 className="pa-section-title" variants={fadeUp}>
                                Creemos en transformar,<br />
                                <span className="pa-text-red">no solo en prometer.</span>
                            </motion.h2>
                        </motion.div>
                        <motion.div className="pa-story-paragraphs" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                            <motion.p variants={fadeUp}>
                                Después de más de 30 años liderando equipos y proyectos en grandes empresas, me di cuenta de algo fundamental: muchas estrategias de marketing se quedaban cortas. No porque faltara creatividad, sino porque carecían de una conexión real con los objetivos de negocio.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                En 2022 decidí dar un giro y así nació MagnaMKT. Mi proyecto de vida para transformar la forma en que las empresas abordan el marketing. ¿El objetivo? Crear estrategias innovadoras, medibles, rentables y alineadas con la realidad de tu negocio.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. DNA VALUES */}
            <section className="pa-dna">
                <div className="pa-container">
                    <motion.div className="pa-dna-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                        <motion.h2 className="pa-section-title" variants={fadeUp}>Nuestro ADN</motion.h2>
                        <motion.p className="pa-section-subtitle" variants={fadeUp}>Los valores que definen nuestra manera de trabajar.</motion.p>
                    </motion.div>

                    <div className="pa-dna-stack-wrapper">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                className="pa-dna-card-sticky pa-dna-card-stacked"
                                style={{
                                    position: 'sticky',
                                    top: `${130 + idx * 25}px`,
                                    zIndex: idx + 1,
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="pa-dna-icon">
                                    {val.icon}
                                </div>
                                <div className="pa-dna-card-content">
                                    <h3>{val.title}</h3>
                                    <p>{val.desc}</p>
                                </div>
                                <div className="pa-card-glow"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. QUOTE OVERLAY SECTION */}
            <section className="pa-quote">
                <motion.div
                    className="pa-quote-bg"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="pa-container">
                    <motion.div
                        className="pa-quote-content"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <blockquote>"El futuro del marketing no es seguir lo que ya funciona, sino adelantarnos a lo que vendrá."</blockquote>
                        <cite>
                            <span>Diego Ballerini</span>
                            <small>CEO & Fundador</small>
                        </cite>
                    </motion.div>
                </div>
            </section>

            {/* 5. CTA SECTION */}
            <section className="pa-cta">
                <div className="pa-container">
                    <motion.div
                        className="pa-cta-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="pa-cta-text">
                            <h2>Una invitación a <span className="pa-text-red">Crecer Juntos</span></h2>
                            <p>MagnaMKT no es solo una agencia de marketing. Es el socio que precisás para potenciar tu estrategia y alcanzar el nivel que buscás. Si de verdad querés resultados excepcionales, hablemos.</p>
                        </div>
                        <motion.a
                            href="/contacto"
                            className="pa-btn-cta"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contactanos Ya
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
