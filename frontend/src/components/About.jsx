import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChartIcon, HandshakeIcon, PaletteIcon, TargetIcon, UsersIcon } from './SiteIcons';
import Lottie from 'lottie-react';
import digitalAnimation from '../assets/animations/digital.json';

const useReveal = (threshold = 0.2) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: threshold });
    return { ref, inView };
};

const values = [
    { icon: <TargetIcon size={32} />, title: 'Profesionalismo', desc: 'Hacemos las cosas bien desde el principio, sin atajos.' },
    { icon: <PaletteIcon size={32} />, title: 'Creatividad', desc: 'Encontramos soluciones originales que conectan con tu audiencia.' },
    { icon: <HandshakeIcon size={32} />, title: 'Compromiso', desc: 'Nos ponemos la camiseta por tu negocio.' },
    { icon: <ChartIcon size={32} />, title: 'Resultados', desc: 'No solo entregamos estrategias, entregamos impacto.' },
    { icon: <UsersIcon size={32} />, title: 'Cercanía', desc: 'No somos solo tu agencia, somos tu aliado.' },
];

const ease = [0.22, 1, 0.36, 1];

const About = () => {
    const hero = useReveal(0.1);
    const story = useReveal(0.15);
    const dna = useReveal(0.08);
    const quote = useReveal(0.2);
    const cta = useReveal(0.2);

    return (
        <div className="premium-about-page">

            {/* ━━━ 1. HERO SECTION ━━━ */}
            <section className="pa-hero" ref={hero.ref}>
                <div className="pa-hero-bg" />
                <div className="pa-container">
                    <div className="pa-hero-grid">
                        {/* Left content */}
                        <div className="pa-hero-content">
                            <motion.div
                                className="pa-badge"
                                initial={{ opacity: 0, y: 30 }}
                                animate={hero.inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0, ease }}
                            >
                                <span className="pa-badge-dot" />
                                El Marketing Sin Excusas
                            </motion.div>

                            <motion.h1
                                className="pa-hero-title"
                                initial={{ opacity: 0, x: -50 }}
                                animate={hero.inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.85, delay: 0.1, ease }}
                            >
                                El marketing tiene que<br />
                                <span className="pa-text-red">servir a los negocios.</span>
                            </motion.h1>

                            <motion.p
                                className="pa-hero-desc"
                                initial={{ opacity: 0, y: 30 }}
                                animate={hero.inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.22, ease }}
                            >
                                Soy Diego Ballerini y en MagnaMKT diseño estrategias pensadas para una sola cosa:
                                <strong className="pa-strong"> resultados reales para empresas reales</strong>.
                            </motion.p>

                            <motion.a
                                href="/contacto"
                                className="pa-btn-cta"
                                initial={{ opacity: 0, y: 20 }}
                                animate={hero.inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.35, ease }}
                                whileHover={{ scale: 1.06, boxShadow: '0 15px 40px rgba(227,28,37,0.4)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{ display: 'inline-block', marginTop: '20px' }}
                            >
                                Hablemos de tu proyecto
                            </motion.a>
                        </div>

                        {/* Right visual */}
                        <motion.div
                            className="pa-hero-visual"
                            initial={{ opacity: 0, x: 60, scale: 0.95 }}
                            animate={hero.inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                            transition={{ duration: 0.9, delay: 0.2, ease }}
                        >
                            <div className="pa-animation-wrapper" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Lottie
                                    animationData={digitalAnimation}
                                    loop={true}
                                    style={{ width: '100%', maxWidth: '650px', height: 'auto', zIndex: 1, filter: 'drop-shadow(0px 20px 40px rgba(255,0,60,0.15))' }}
                                />
                                <div className="pa-image-backdrop" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ━━━ 2. STORY SECTION ━━━ */}
            <section className="pa-story" ref={story.ref}>
                <div className="pa-container">
                    <div className="pa-story-grid">
                        <motion.h2
                            className="pa-section-title pa-story-text"
                            initial={{ opacity: 0, x: -50 }}
                            animate={story.inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.85, delay: 0, ease }}
                        >
                            Creemos en transformar,<br />
                            <span className="pa-text-red">no solo en prometer.</span>
                        </motion.h2>

                        <div className="pa-story-paragraphs">
                            <motion.p
                                initial={{ opacity: 0, y: 35 }}
                                animate={story.inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.1, ease }}
                            >
                                Después de más de 30 años liderando equipos y proyectos en grandes empresas,
                                me di cuenta de algo fundamental: muchas estrategias de marketing se quedaban cortas.
                                No porque faltara creatividad, sino porque carecían de una conexión real con los objetivos de negocio.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 35 }}
                                animate={story.inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.75, delay: 0.22, ease }}
                            >
                                En 2022 decidí dar un giro y así nació MagnaMKT. Mi proyecto de vida para transformar
                                la forma en que las empresas abordan el marketing. ¿El objetivo? Crear estrategias
                                innovadoras, medibles, rentables y alineadas con la realidad de tu negocio.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ━━━ 3. DNA VALUES ━━━ */}
            <section className="pa-dna" ref={dna.ref}>
                <div className="pa-container">
                    <div className="pa-dna-header">
                        <motion.h2
                            className="pa-section-title"
                            initial={{ opacity: 0, y: 40 }}
                            animate={dna.inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.75, delay: 0, ease }}
                        >
                            Nuestro ADN
                        </motion.h2>
                        <motion.p
                            className="pa-section-subtitle"
                            initial={{ opacity: 0, y: 30 }}
                            animate={dna.inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.1, ease }}
                        >
                            Los valores que definen nuestra manera de trabajar.
                        </motion.p>
                    </div>

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
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{
                                    duration: 0.8,
                                    delay: idx * 0.1,
                                    ease,
                                }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                            >
                                <motion.div
                                    className="pa-dna-icon"
                                    initial={{ scale: 0, rotate: -20 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.15 + idx * 0.08, type: 'spring', stiffness: 200 }}
                                >
                                    {val.icon}
                                </motion.div>
                                <div className="pa-dna-card-content">
                                    <h3>{val.title}</h3>
                                    <p>{val.desc}</p>
                                </div>
                                <div className="pa-card-glow" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ━━━ 4. QUOTE SECTION ━━━ */}
            <section className="pa-quote" ref={quote.ref}>
                <motion.div
                    className="pa-quote-bg"
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={quote.inView ? { scale: 1, opacity: 0.3 } : {}}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
                <div className="pa-container">
                    <motion.div
                        className="pa-quote-content"
                        initial={{ opacity: 0, scale: 0.88, y: 30 }}
                        animate={quote.inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.2, ease }}
                    >
                        <blockquote>
                            "El futuro del marketing no es seguir lo que ya funciona, sino adelantarnos a lo que vendrá."
                        </blockquote>
                        <cite>
                            <span>Diego Ballerini</span>
                            <small>CEO & Fundador</small>
                        </cite>
                    </motion.div>
                </div>
            </section>

            {/* ━━━ 5. CTA SECTION ━━━ */}
            <section className="pa-cta" ref={cta.ref}>
                <div className="pa-container">
                    <motion.div
                        className="pa-cta-box"
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={cta.inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, ease }}
                    >
                        <motion.div
                            className="pa-cta-text"
                            initial={{ opacity: 0, x: -30 }}
                            animate={cta.inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.15, ease }}
                        >
                            <h2>Una invitación a <span className="pa-text-red">Crecer Juntos</span></h2>
                            <p>
                                MagnaMKT no es solo una agencia de marketing. Es el socio que precisás para potenciar
                                tu estrategia y alcanzar el nivel que buscás. Si de verdad querés resultados
                                excepcionales, hablemos.
                            </p>
                        </motion.div>
                        <motion.a
                            href="/contacto"
                            className="pa-btn-cta"
                            initial={{ opacity: 0, x: 30 }}
                            animate={cta.inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.28, ease }}
                            whileHover={{ scale: 1.06, boxShadow: '0 20px 50px rgba(227,28,37,0.4)' }}
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
