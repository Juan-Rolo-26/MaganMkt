import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { servicesDetail } from '../data/servicesDetail';
import { ArrowRightIcon } from '../components/SiteIcons';
import ServiceHeroVisual from '../components/ServiceHeroVisual';
import '../new-theme.css';

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesDetail[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return <Navigate to="/#services" replace />;
    }

    const {
        Icon,
        title,
        subtitle,
        description,
        benefitsTitle,
        benefits,
        howTitle,
        howSteps,
        howDescription,
        processTitle,
        processSteps,
        processDescription,
        ctaText
    } = service;

    const renderStepsSection = (
        sectionTitle,
        steps,
        sectionBackground = '#f8f9fa',
        cardBackground = '#fff',
        sectionIntro = null
    ) => (
        <section style={{ padding: '80px 0', background: sectionBackground }}>
            <div className="pa-container">
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                    <Motion.h2
                        className="pa-section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {sectionTitle}
                    </Motion.h2>
                    {sectionIntro && (
                        <Motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            style={{ marginTop: '22px' }}
                        >
                            {(Array.isArray(sectionIntro) ? sectionIntro : [sectionIntro]).map((line) => (
                                <p
                                    key={line}
                                    style={{ fontSize: '1.12rem', color: '#555', lineHeight: '1.8', margin: '0 0 14px 0' }}
                                >
                                    {line}
                                </p>
                            ))}
                        </Motion.div>
                    )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {steps.map((step, idx) => (
                        <Motion.div
                            key={`${sectionTitle}-${step.title}-${idx}`}
                            style={{ background: cardBackground, padding: '40px', borderRadius: '20px', border: '1px solid #eaeaea', position: 'relative', overflow: 'hidden' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                        >
                            <div style={{ fontSize: '4rem', fontWeight: '900', color: 'rgba(255,0,60,0.05)', position: 'absolute', top: '10px', right: '20px', lineHeight: '1' }}>
                                {idx + 1}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px', color: '#000', position: 'relative', zIndex: 1 }}>
                                {step.title}
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', margin: 0, position: 'relative', zIndex: 1 }}>
                                {step.desc}
                            </p>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    return (
        <div className="premium-service-page">
            {/* HEROS SECTION */}
            <section className="pa-hero" style={{ minHeight: '80vh', paddingBottom: '40px' }}>
                <div className="pa-hero-bg"></div>
                <div className="pa-container">
                    <Motion.div className="pa-hero-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                        <div className="pa-hero-content">
                            <Motion.div
                                className="pa-badge"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="pa-badge-dot"></span>
                                Especialidad Magna
                            </Motion.div>
                            <Motion.h1
                                className="pa-hero-title"
                                style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {title}
                            </Motion.h1>
                            <Motion.p
                                className="pa-hero-desc"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {subtitle}
                            </Motion.p>
                        </div>
                        <Motion.div
                            className="pa-hero-visual"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, type: "spring" }}
                        >
                            <ServiceHeroVisual slug={slug} Icon={Icon} />
                        </Motion.div>
                    </Motion.div>
                </div>
            </section>

            {/* DETAILS SECTION */}
            <section style={{ padding: '80px 0', background: '#fff' }}>
                <div className="pa-container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <Motion.h2
                            className="pa-section-title"
                            style={{ marginBottom: '30px' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {benefitsTitle ? benefitsTitle : <>¿Por qué es <span className="pa-text-red">clave</span> para tu negocio?</>}
                        </Motion.h2>
                        <Motion.p
                            style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '60px' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            {description}
                        </Motion.p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        {benefits.map((benefit, idx) => (
                            <Motion.div
                                key={idx}
                                style={{ background: '#f8f9fa', padding: '40px', borderRadius: '20px', border: '1px solid #eaeaea', display: 'flex', alignItems: 'flex-start', gap: '20px' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5, borderColor: 'rgba(255,0,60,0.3)', boxShadow: '0 10px 30px rgba(255,0,60,0.05)' }}
                            >
                                <div style={{ background: '#ff003c', color: '#fff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                                    {idx + 1}
                                </div>
                                <p style={{ fontSize: '1.1rem', margin: 0, color: '#333', fontWeight: '500', lineHeight: '1.5' }}>
                                    {benefit}
                                </p>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE DO IT SECTION (OPTIONAL) */}
            {Array.isArray(howSteps) && howSteps.length > 0 &&
                renderStepsSection(howTitle || '¿Cómo lo hacemos?', howSteps, '#f8f9fa', '#fff', howDescription)}

            {/* PROCESS SECTION (OPTIONAL) */}
            {Array.isArray(processSteps) && processSteps.length > 0 &&
                renderStepsSection(processTitle || 'Así trabajamos', processSteps, '#fff', '#f8f9fa', processDescription)}

            {/* CTA SECTION */}
            <section className="pa-cta">
                <div className="pa-container">
                    <Motion.div
                        className="pa-cta-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pa-cta-text" style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginBottom: '20px' }}>
                                Llevá tu <span className="pa-text-red">{title}</span> al Siguiente Nivel
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '600px' }}>
                                Agenda una auditoría gratuita de 30 minutos y descubramos juntos el verdadero potencial de tu negocio.
                            </p>
                        </div>
                        <a
                            href="https://calendly.com/dballerini"
                            target="_blank"
                            rel="noreferrer"
                            className="pa-btn-cta"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                        >
                            {ctaText ? ctaText : "Agendar Consultoría"} <ArrowRightIcon size={20} />
                        </a>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
