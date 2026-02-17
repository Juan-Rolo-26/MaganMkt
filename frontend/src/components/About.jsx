import React from 'react';
import Lottie from 'lottie-react';
import digitalAnimation from '../assets/animations/digital.json';
import { motion as Motion } from 'framer-motion';

const About = () => {
    // Animation Variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemFadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const itemScale = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="about" style={{
            position: 'relative',
            padding: '8rem 2rem',
            background: 'transparent',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(227, 28, 37, 0.15) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: 0
            }} />

            <Motion.div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Animation Side */}
                <Motion.div
                    variants={itemScale}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative'
                    }}
                >
                    <div className="glass-card" style={{
                        padding: '2rem',
                        borderRadius: '30px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 0 50px rgba(227, 28, 37, 0.1)',
                        width: '100%',
                        maxWidth: '500px'
                    }}>
                        <Lottie
                            animationData={digitalAnimation}
                            loop={true}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </Motion.div>

                {/* Content Side */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div>
                        <Motion.span
                            variants={itemFadeUp}
                            style={{
                                color: 'var(--brand-teal)',
                                fontWeight: '600',
                                letterSpacing: '2px',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                marginBottom: '1rem',
                                display: 'block'
                            }}
                        >
                            Sobre Nosotros
                        </Motion.span>
                        <Motion.h2
                            variants={itemFadeUp}
                            style={{
                                fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                                fontWeight: '800',
                                lineHeight: '1.2',
                                marginBottom: '1.5rem',
                                color: 'white'
                            }}
                        >
                            Impulsamos tu <br />
                            <span className="text-gradient">Presencia Digital</span>
                        </Motion.h2>
                        <Motion.p
                            variants={itemFadeUp}
                            style={{
                                color: '#a1a1aa',
                                fontSize: '1.1rem',
                                lineHeight: '1.6',
                                marginBottom: '1rem'
                            }}
                        >
                            En Magna Marketing, no solo seguimos tendencias, las definimos. Somos un equipo apasionado de estrategas, diseñadores y desarrolladores creativos.
                        </Motion.p>
                        <Motion.p
                            variants={itemFadeUp}
                            style={{
                                color: '#a1a1aa',
                                fontSize: '1.1rem',
                                lineHeight: '1.6'
                            }}
                        >
                            Utilizamos tecnología de vanguardia y análisis de datos para crear campañas que resuenan, convierten y generan un crecimiento exponencial para tu marca.
                        </Motion.p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                        <Motion.div
                            variants={itemFadeUp}
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                        >
                            <span className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>450%</span>
                            <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Retorno Promedio</span>
                        </Motion.div>
                        <Motion.div
                            variants={itemFadeUp}
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                        >
                            <span className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>50+</span>
                            <span style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Marcas Globales</span>
                        </Motion.div>
                    </div>

                    <Motion.button
                        variants={itemFadeUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                        style={{ width: 'fit-content', marginTop: '1rem' }}
                    >
                        Conoce al Equipo
                    </Motion.button>
                </div>
            </Motion.div>
        </section>
    );
};

export default About;
