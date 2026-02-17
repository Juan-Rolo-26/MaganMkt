import React from 'react';
import heroPortrait from '../assets/images/hero-portrait.png';
import { motion as Motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.5 }
        }
    };

    return (
        <section id="home" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '6rem 2rem 0'
        }}>
            {/* Background Animated Gradient Orbs */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(227, 28, 37, 0.2) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: -1,
                animation: 'float 6s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-10%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(0, 181, 204, 0.2) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: -1,
                animation: 'float 8s ease-in-out infinite reverse'
            }} />

            <div style={{
                maxWidth: '1200px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.2rem',
                alignItems: 'center',
                zIndex: 1
            }}>
                {/* Left Content */}
                <Motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 2 }}
                >
                    <Motion.h1
                        variants={itemVariants}
                        style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: '1.2', fontWeight: '800', color: 'white' }}
                    >
                        Hacemos Marketing<br />
                        para Impulsar<br />
                        Empresas Argentinas
                    </Motion.h1>

                    <Motion.h2
                        variants={itemVariants}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            color: 'var(--brand-red)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginTop: '-0.5rem'
                        }}
                    >
                        Agencia de Marketing Digital en Argentina
                    </Motion.h2>

                    <div style={{ marginTop: '1rem' }}>
                        <a href="https://calendly.com/dballerini" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, boxShadow: "0 0 25px var(--brand-teal)" }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                                style={{ padding: '16px 32px', fontSize: '1rem', cursor: 'pointer' }}
                            >
                                Reservá tu consultoría gratuita
                            </Motion.button>
                        </a>
                    </div>
                </Motion.div>

                {/* Right Visual Content (Hero Image) */}
                <Motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1
                    }}
                >
                    <img
                        src={heroPortrait}
                        alt="Marketing Agency Owner"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            height: 'auto',
                            display: 'block',
                            borderRadius: '0',
                            filter: 'brightness(1.0) contrast(1.1)',
                            objectFit: 'cover'
                        }}
                    />

                    {/* Overlay Logo on Shirt (Simulated) */}
                    <div style={{
                        position: 'absolute',
                        bottom: '30%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        opacity: 0.9,
                        pointerEvents: 'none' // Removed from JSX prop for cleaner DOM, but style is fine
                    }}>
                        <span style={{ color: 'var(--brand-red)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '-0.5px' }}>MAGNA</span>
                        <div style={{ color: 'var(--brand-red)', fontSize: '0.6rem', fontWeight: 'bold', marginTop: '-5px' }}>MKT</div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default Hero;
