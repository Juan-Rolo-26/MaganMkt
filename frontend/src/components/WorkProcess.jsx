import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Link as LinkIcon, Rocket } from 'lucide-react';
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
    { img: brand1 },
    { img: brand2 },
    { img: brand3 },
    { img: brand4 },
    { img: brand5 },
    { img: brand6 },
    { img: brand7 },
    { img: brand8 },
    { img: brand9 },
    { img: brand10 },
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
        title: "Contenido Estratégico + Ads",
        description: "Diseñamos piezas creativas que captan la atención y las impulsamos con campañas de publicidad optimizadas para maximizar tu retorno de inversión (ROI).",
        icon: <ShoppingCart size={22} />
    },
    {
        step: "Paso 3",
        title: "Ecosistema de Retención",
        description: "Implementamos flujos de Email Marketing y automatizaciones para transformar a tus seguidores en una comunidad orgánica fiel que compra recurrentemente.",
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
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    return (
        <section className="work-process-section">
            <div className="work-process-wheel-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="carousel-wheel"
                >
                    {brands.map((brand, i) => {
                        const angle = (i * 360) / brands.length;
                        return (
                            <div
                                key={i}
                                className="carousel-card"
                                style={{
                                    transform: `rotate(${angle}deg) translateY(var(--wheel-radius))`,
                                }}
                            >
                                <img src={brand.img} alt={`Marca ${i + 1}`} className="carousel-img" />
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="work-process-center"
                >
                    <span className="process-pill">Proceso de trabajo</span>
                    <h2 className="process-heading">Así trabajan las marcas que<br />escalan con nosotros</h2>
                </motion.div>
            </div>

            <motion.div
                className="work-process-steps"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {steps.map((item, index) => (
                    <motion.div
                        custom={index}
                        variants={cardVariants}
                        className="step-card"
                        key={index}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    >
                        <span className="step-pill">{item.step}</span>
                        <h3 className="step-title">
                            <span className="step-icon">{item.icon}</span>
                            {item.title}
                        </h3>
                        <p className="step-desc">{item.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WorkProcess;
