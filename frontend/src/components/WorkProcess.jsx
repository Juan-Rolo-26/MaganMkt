import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, ShoppingCart, Link as LinkIcon, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './WorkProcess.css';

import brand1 from '../assets/images/marcas (71).png';
import brand2 from '../assets/images/marcas (72).png';
import brand3 from '../assets/images/marcas (73).png';
import brand4 from '../assets/images/marcas (74).png';
import brand5 from '../assets/images/marcas (75).png';
import brand6 from '../assets/images/marcas (76).png';
import brand7 from '../assets/images/marcas (77).png';
import brand8 from '../assets/images/marcas (78).png';
import brand9 from '../assets/images/marcas (79).png';
import brand10 from '../assets/images/marcas (80).png';

const brands = [
    { img: brand1, nombre: "Golf Argentino Store", casoId: 1 },
    { img: brand2, nombre: "Aquasansa Piscinas", casoId: 2 },
    { img: brand3, nombre: "TraDigital", casoId: 3 },
    { img: brand5, nombre: "A Puro Pelo", casoId: 4 },
    { img: brand6, nombre: "AdmiUp", casoId: 5 },
    { img: brand7, nombre: "Becominds", casoId: 6 },
    { img: brand8, nombre: "NimMus", casoId: 7 },
    { img: brand9, nombre: "Impacto by AMES", casoId: 8 },
    { img: brand10, nombre: "AMES", casoId: 9 },
    { img: brand4, nombre: "Aldeitas Food", casoId: 10 },
];

const steps = [
    {
        step: "Paso 1",
        title: "Inmersión Estratégica y Diagnóstico",
        description: "Analizamos a fondo tu ecosistema digital actual, detectamos cuellos de botella y definimos la hoja de ruta personalizada para escalar tu facturación de forma rentable.",
        icon: <Search size={22} />
    },
    {
        step: "Paso 2",
        title: "Contenido Estrategico + Anuncios",
        description: "Diseñamos piezas creativas que captan la atención y las impulsamos con campañas de publicidad optimizadas para maximizar tu retorno de inversión (ROI).",
        icon: <ShoppingCart size={22} />
    },
    {
        step: "Paso 3",
        title: "Ecosistema de Retención",
        description: "Implementamos flujos de correo electronico y automatizaciones para transformar a tus seguidores en una comunidad organica fiel que compra recurrentemente.",
        icon: <LinkIcon size={22} />
    },
    {
        step: "Paso 4",
        title: "Optimización y Escalamiento",
        description: "Realizamos un análisis de datos en tiempo real y reuniones estratégicas para ajustar las velas, permitiendo que tu marca crezca de forma sostenida mes a mes.",
        icon: <Rocket size={22} />
    }
];

const WorkProcess = () => {
    const sectionRef = useRef(null);
    const stepsRef = useRef(null);
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.15 });
    const stepsInView = useInView(stepsRef, { once: true, amount: 0.1 });
    const navigate = useNavigate();

    const handleBrandClick = (casoId) => {
        navigate('/casos-de-exito');
        // Scroll to specific case after navigation
        setTimeout(() => {
            const el = document.getElementById(`caso-${casoId}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 400);
    };

    return (
        <section className="work-process-section" ref={sectionRef}>
            {/* ── MARQUEE + CENTER TITLE ─────────────────────────── */}
            <div className="work-process-marquee-container">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="work-process-center"
                >
                    <motion.span
                        className="process-pill"
                        initial={{ opacity: 0, y: 15 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Proceso de trabajo
                    </motion.span>
                    <motion.h2
                        className="process-heading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Así trabajan las marcas que<br />escalan con nosotros
                    </motion.h2>
                </motion.div>

                <motion.div
                    className="marquee-wrapper"
                    initial={{ opacity: 0 }}
                    animate={sectionInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <div className="marquee-content">
                        {brands.map((brand, i) => (
                            <button
                                key={`brand1-${i}`}
                                className="marquee-item marquee-item-btn"
                                onClick={() => handleBrandClick(brand.casoId)}
                                title={`Ver caso: ${brand.nombre}`}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    position: 'relative',
                                }}
                            >
                                <img src={brand.img} alt={brand.nombre} className="marquee-img" />
                                <span className="marquee-hover-label">{brand.nombre}</span>
                            </button>
                        ))}
                        {brands.map((brand, i) => (
                            <button
                                key={`brand2-${i}`}
                                className="marquee-item marquee-item-btn"
                                onClick={() => handleBrandClick(brand.casoId)}
                                title={`Ver caso: ${brand.nombre}`}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    padding: 0,
                                    cursor: 'pointer',
                                    position: 'relative',
                                }}
                            >
                                <img src={brand.img} alt={brand.nombre} className="marquee-img" />
                                <span className="marquee-hover-label">{brand.nombre}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── STEP CARDS ───────────────────────────────────── */}
            <div className="work-process-steps" ref={stepsRef}>
                {steps.map((item, index) => (
                    <motion.div
                        className="step-card"
                        key={index}
                        initial={{ opacity: 0, y: 70, x: index % 2 === 0 ? -30 : 30, scale: 0.93 }}
                        animate={stepsInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : {}}
                        transition={{
                            duration: 0.85,
                            delay: index * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        <motion.span
                            className="step-pill"
                            initial={{ opacity: 0, x: -20 }}
                            animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                        >
                            {item.step}
                        </motion.span>
                        <h3 className="step-title">
                            <motion.span
                                className="step-icon"
                                initial={{ scale: 0, rotate: -30 }}
                                animate={stepsInView ? { scale: 1, rotate: 0 } : {}}
                                transition={{
                                    type: 'spring',
                                    stiffness: 200,
                                    delay: 0.3 + index * 0.15,
                                }}
                            >
                                {item.icon}
                            </motion.span>
                            {item.title}
                        </h3>
                        <motion.p
                            className="step-desc"
                            initial={{ opacity: 0, y: 15 }}
                            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.38 + index * 0.15, duration: 0.6 }}
                        >
                            {item.description}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkProcess;
