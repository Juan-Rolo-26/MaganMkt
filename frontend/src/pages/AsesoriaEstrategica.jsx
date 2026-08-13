import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import diegoPhoto from "../assets/images/DiegoBallerini.jpeg";
import { ArrowRightIcon, CheckIcon, CloseIcon } from "../components/SiteIcons";
import brand1 from "../assets/images/marcas (71).png";
import brand2 from "../assets/images/marcas (72).png";
import brand3 from "../assets/images/marcas (73).png";
import brand5 from "../assets/images/marcas (75).png";
import brand6 from "../assets/images/marcas (76).png";
import brand7 from "../assets/images/marcas (77).png";
import brand8 from "../assets/images/marcas (78).png";
import brand9 from "../assets/images/marcas (79).png";
import brand10 from "../assets/images/marcas (80).png";
import brandProar from "../assets/images/ProAr.png";
import brand2GE from "../assets/logos/2ge.png";

import logoSexshop from "../assets/logos/sexshop.png";
import logoAvalian from "../assets/logos/avalian.png";
import logoTot from "../assets/logos/tot.png";
import logoAldeitas1 from "../assets/logos/aldeitas1.png";
import logoAldeitas2 from "../assets/logos/aldeitas2.png";
import logoItalmedica from "../assets/logos/Italmedica.png";

const brands = [
    brand1, brand2, brand3, logoAldeitas1, logoAldeitas2, brand5, brand6, brand7, brand8, brand9, brand10, brandProar, brand2GE, logoSexshop, logoAvalian, logoTot, logoItalmedica
];

const ease = [0.22, 1, 0.36, 1];

const AsesoriaEstrategica = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        situation: "",
        situationOther: "",
        message: "",
        source: "",
        sourceOther: ""
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [showErrorBanner, setShowErrorBanner] = useState(false);

    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError("");

        if (!validateEmail(formData.email)) {
            setEmailError("Por favor ingresá un email válido");
            setShowErrorBanner(true);
            setTimeout(() => setShowErrorBanner(false), 5000);
            return;
        }
        setShowErrorBanner(false);

        setSending(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    whatsapp: formData.phone,
                    country: formData.country,
                    situation: formData.situation,
                    situationOther: formData.situationOther,
                    message: formData.message,
                    source: formData.source,
                    sourceOther: formData.sourceOther
                }),
            });

            if (response.ok) {
                setSent(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    country: "",
                    situation: "",
                    situationOther: "",
                    message: "",
                    source: "",
                    sourceOther: ""
                });
                setTimeout(() => setSent(false), 8000);
            } else {
                alert("Hubo un error al enviar el formulario. Por favor intentá nuevamente o contactame por otro medio.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error de conexión. Por favor intentá más tarde.");
        } finally {
            setSending(false);
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            style={{ background: "#000", color: "#fff", minHeight: "100vh", overflowX: "hidden" }}
        >
            {/* SECCIÓN 1 — HERO */}
            <section style={{
                padding: "160px 4% 80px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "4rem",
                maxWidth: "1400px",
                margin: "0 auto"
            }}>
                <div style={{ flex: "1 1 600px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease }}
                        style={{
                            display: "inline-block",
                            padding: "6px 16px",
                            borderRadius: "999px",
                            background: "rgba(227, 28, 37, 0.1)",
                            border: "1px solid rgba(227, 28, 37, 0.3)",
                            color: "#ff6b6b",
                            fontSize: "0.75rem",
                            fontWeight: "700",
                            letterSpacing: "0.1em",
                            marginBottom: "1.5rem"
                        }}
                    >
                        ASESORÍA CON DIEGO BALLERINI
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease }}
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: "900", lineHeight: "1.1", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}
                    >
                        Hace meses que sentís que tu marketing digital <span style={{ color: "#e31c25" }}>no rinde lo que debería.</span> Y no estás equivocado.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease }}
                        style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", marginBottom: "2.5rem", maxWidth: "700px" }}
                    >
                        Una asesoría de 90 minutos conmigo, donde vamos a entender exactamente por qué tu negocio no está creciendo como debería en lo digital, qué estás haciendo mal sin darte cuenta, y qué pasos concretos tenés que dar para que eso cambie.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3, ease }}
                    >
                        <button
                            onClick={scrollToForm}
                            style={{
                                padding: "20px 40px",
                                background: "#e31c25",
                                color: "#fff",
                                border: "none",
                                borderRadius: "12px",
                                fontSize: "1.1rem",
                                fontWeight: "800",
                                cursor: "pointer",
                                boxShadow: "0 10px 30px rgba(227, 28, 37, 0.4)",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = "0 20px 40px rgba(227, 28, 37, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(227, 28, 37, 0.4)";
                            }}
                        >
                            Reservar mi asesoría — USD 250
                        </button>
                        <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
                            90 minutos por videollamada · Diagnóstico personalizado · Plan de acción concreto al finalizar
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease }}
                    style={{ flex: "1 1 400px", maxWidth: "500px", position: "relative" }}
                >

                    <img
                        src={diegoPhoto}
                        alt="Diego Ballerini"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "24px",
                            position: "relative",
                            zIndex: 1,
                            filter: "grayscale(20%) contrast(110%)",
                            boxShadow: "0 30px 60px rgba(0,0,0,0.5)"
                        }}
                    />
                </motion.div>
            </section>
            {/* SECCIÓN MARCAS (IGUAL QUE EN HOME) */}
            <section style={{ width: "100%", background: "#000", padding: "40px 0", overflow: "hidden", position: "relative" }}>
                <style>
                    {`
                    @keyframes scroll-brands {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .brands-marquee {
                        display: flex;
                        width: max-content;
                        animation: scroll-brands 40s linear infinite;
                        gap: 20px;
                        align-items: center;
                    }
                    .brands-marquee:hover {
                        animation-play-state: paused;
                    }
                    .marquee-item {
                        width: 160px;
                        height: 160px;
                        display: flex;
                        alignItems: center;
                        justifyContent: center;
                        background: #111;
                        border-radius: 20px;
                        border: 1px solid rgba(255,255,255,0.05);
                        padding: 15px;
                        flex-shrink: 0;
                        transition: all 0.3s ease;
                    }
                    .marquee-item:hover {
                        transform: scale(1.05);
                        border-color: rgba(227, 28, 37, 0.4);
                        box-shadow: 0 10px 30px rgba(227, 28, 37, 0.2);
                    }
                    .marquee-img {
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                        opacity: 0.85;
                        transition: all 0.3s;
                    }
                    .marquee-item:hover .marquee-img {
                        opacity: 1;
                    }
                    `}
                </style>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        color: 'rgba(255,255,255,0.4)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.3em'
                    }}>
                        Marcas que confiaron
                    </h3>
                </div>
                <div className="brands-marquee">
                    {[...brands, ...brands].map((img, i) => (
                        <div key={i} className="marquee-item">
                            <img
                                src={img}
                                alt="Marca"
                                className="marquee-img"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* SECCIÓN 2 — DOLORES Y FRUSTRACIONES */}
            <section style={{ padding: "100px 4%", background: "#f9f9f9", color: "#111", position: "relative" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "2rem", textAlign: "center" }}>
                        Si te sentís identificado con esto, esta asesoría es para vos
                    </h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#444", marginBottom: "3rem", textAlign: "center" }}>
                        Cada semana hablo con dueños de negocio que llegan agotados de probar cosas que no terminan de funcionar. Que invirtieron en agencias, cursos y asesores, y siguen sin entender por qué su marketing digital no genera los resultados que esperaban. Si algo de lo que viene a continuación te suena familiar, tenemos mucho de qué hablar.
                    </p>
                    <div style={{ display: "grid", gap: "1.5rem" }}>
                        {[
                            "Estás invirtiendo plata en publicidad digital todos los meses, pero no tenés idea real de si está funcionando o estás tirando el dinero al aire.",
                            "Trabajaste con agencias antes y la experiencia fue decepcionante: te entregan reportes llenos de métricas que no entendés, hablan en un idioma que no es el tuyo, y los resultados nunca terminan de aparecer.",
                            "Sentís que estás atrasado respecto a tu competencia, que ellos están haciendo cosas en redes que vos no entendés, y que cada mes que pasa la brecha se hace más grande.",
                            "Probaste hacer publicidad en Meta, en Google, abriste una tienda online, contrataste un community manager, y ninguna de esas piezas terminó conectándose con un sistema real de ventas.",
                            "Tenés un equipo interno que hace lo que puede, pero te falta una cabeza estratégica que les marque el rumbo y les ordene las prioridades.",
                            "Sabés que el problema no es la falta de esfuerzo ni de inversión, sino la falta de un plan claro. Pero no tenés a quién pedirle ese plan sin caer en un vendedor de humo.",
                            "Estás cansado de escuchar a \"gurús\" en redes sociales prometiéndote facturar seis cifras con fórmulas mágicas. Necesitás hablar con alguien que tenga experiencia real, no influencers improvisados."
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.5rem", background: "#fff", borderRadius: "12px", border: "1px solid #eee", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}
                            >
                                <div style={{ minWidth: "24px", height: "24px", background: "#e31c25", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                                    <CheckIcon size={14} color="#fff" />
                                </div>
                                <p style={{ fontSize: "1.05rem", color: "#333", margin: 0 }}>{item}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p style={{ marginTop: "4rem", fontSize: "1.1rem", fontWeight: "600", color: "#222", backgroundColor: "rgba(227,28,37,0.05)", padding: "2rem", borderRadius: "16px", borderLeft: "4px solid #e31c25" }}>
                        Si leíste esto y reconociste tu situación en al menos tres puntos, esta asesoría te va a cambiar la manera de ver tu negocio. No porque yo sea un mago, sino porque después de más de treinta años trabajando con empresas de todos los tamaños, aprendí a identificar exactamente dónde está el problema y cómo se soluciona.
                    </p>
                </div>
            </section>

            {/* SECCIÓN 3 — INTENTOS FALLIDOS */}
            <section style={{ padding: "100px 4%", background: "#000" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "3rem" }}>
                        Probablemente ya intentaste muchas cosas. <span style={{ color: "#e31c25" }}>Y por eso estás acá.</span>
                    </h2>
                    <div style={{ textAlign: "left", fontSize: "1.15rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Si llegaste hasta esta página es porque ya probaste resolverlo solo. Leíste artículos, miraste videos en YouTube, hice algún curso online, contrataste un freelance, le pediste consejos a un colega que "sabe de marketing". Y sin embargo, seguís en el mismo lugar.
                        </p>
                        <p style={{ marginBottom: "1.5rem" }}>
                            Esto no es porque seas vos. Es porque el marketing digital cambió radicalmente en los últimos años y la información que circula gratis es, en su mayoría, superficial o directamente desactualizada. Lo que funcionaba en 2022 ya no funciona. Lo que un gurú vende como infalible en Instagram, en la práctica no aplica a tu negocio. Y los marcos generales que enseñan los cursos no resuelven los problemas específicos de tu situación particular.
                        </p>
                        <p>
                            Lo que necesitás no es más información. Lo que necesitás es alguien que mire tu negocio puntualmente, te diga qué está fallando y por qué, y te ordene los próximos pasos en función de tu realidad. Eso no se resuelve viendo un video. Se resuelve sentándote 90 minutos con alguien que ya vio decenas de casos parecidos al tuyo y sabe exactamente qué buscar.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4 — QUÉ ES LA ASESORÍA */}
            <section style={{ padding: "100px 4%", background: "#fff", color: "#111" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "1.5rem" }}>Qué vas a vivir en estos 90 minutos</h2>
                        <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "800px", margin: "0 auto" }}>
                            Esta no es una llamada de descubrimiento, no es una entrevista para venderte un retainer, y no es una clase teórica. Es una asesoría de trabajo real sobre tu negocio, donde nos sentamos vos y yo a desarmar lo que está pasando, encontrar el cuello de botella, y diseñar el camino para resolverlo.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
                        {[
                            {
                                num: "01",
                                title: "Diagnóstico profundo (30 minutos)",
                                text: "Te hago preguntas específicas sobre tu negocio, tu producto, tu mercado, lo que estuviste haciendo en marketing digital hasta hoy, qué funcionó, qué no, y qué intentaste. No son preguntas genéricas, son preguntas pensadas para entender exactamente dónde está el problema. La mayoría de la gente se sorprende de cuánto se aclara su propia situación solo respondiendo estas preguntas."
                            },
                            {
                                num: "02",
                                title: "Análisis y devolución estratégica (45 minutos)",
                                text: "Acá te muestro lo que veo. Te explico, con tu propio negocio en pantalla, qué estás haciendo bien, qué está mal, y por qué. Sin tecnicismos vacíos. Sin venderte humo. Te digo cuáles son los tres o cuatro cambios que harían la mayor diferencia en tu situación, en qué orden hacerlos, y por qué. Vas a salir entendiendo cosas que probablemente nadie te explicó antes con esta claridad."
                            },
                            {
                                num: "03",
                                title: "Plan de acción concreto (15 minutos)",
                                text: "Cerramos definiendo los próximos pasos. Qué hacer la semana que viene, qué hacer en el primer mes, y qué hacer en los próximos 90 días. Te llevás un plan claro, priorizado, accionable. Sin promesas, sin listas genéricas. Pasos específicos para tu negocio."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                style={{ padding: "3rem 2rem", background: "#fcfcfc", borderRadius: "24px", border: "1px solid #eee", position: "relative" }}
                            >
                                <div style={{ fontSize: "4rem", fontWeight: "900", color: "rgba(227,28,37,0.1)", position: "absolute", top: "1.5rem", left: "2rem" }}>{item.num}</div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1rem", position: "relative", zIndex: 1, color: "#e31c25" }}>{item.title}</h3>
                                <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: "1.7", position: "relative", zIndex: 1 }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5 — QUÉ TE LLEVÁS */}
            <section style={{ padding: "100px 4%", background: "#f5f5f5", color: "#111" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "1.5rem" }}>Lo que te llevás cuando termina la asesoría</h2>
                        <p style={{ fontSize: "1.2rem", color: "#555" }}>
                            Después de los 90 minutos, no te vas con la cabeza llena de dudas. Te vas con tres cosas concretas que vas a poder usar desde el día siguiente.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        {[
                            {
                                title: "Claridad real sobre qué está fallando",
                                text: "Vas a saber exactamente dónde está el problema en tu marketing digital. No una lista vaga de \"mejorá esto, mejorá aquello\", sino un diagnóstico preciso de los uno o dos cuellos de botella que están frenando tu crecimiento."
                            },
                            {
                                title: "Las decisiones estratégicas que tendrías que tomar",
                                text: "Vas a entender qué cambios concretos hacer, en qué orden hacerlos, y por qué. Si tu problema es de oferta, funnel, medición o equipo, te lo digo con argumentos, no con opiniones."
                            },
                            {
                                title: "El primer paso concreto para empezar",
                                text: "Te dejo el plan de acción concreto: qué hacer esta semana, qué hacer este mes, qué hacer en los próximos 90 días. Priorizado por impacto para que sepas exactamente por dónde empezar."
                            }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: "2.5rem", background: "#fff", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                                <div style={{ width: "50px", height: "50px", background: "#e31c25", borderRadius: "12px", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <ArrowRightIcon size={24} color="#fff" />
                                </div>
                                <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "1rem" }}>{item.title}</h3>
                                <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6" }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTÓN INTERMEDIO 1 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: "center", margin: "4rem 0" }}
            >
                <button
                    onClick={scrollToForm}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "#E31C25",
                        color: "white",
                        padding: "16px 36px",
                        borderRadius: "50px",
                        fontWeight: "700",
                        fontSize: "1.05rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 10px 40px rgba(227, 28, 37, 0.4)",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = "0 15px 50px rgba(227, 28, 37, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 10px 40px rgba(227, 28, 37, 0.4)";
                    }}
                >
                    Reservar mi asesoría <ArrowRightIcon size={20} />
                </button>
            </motion.div>

            {/* SECCIÓN 6 — TRANSFORMACIÓN (EL ANTES Y DESPUÉS) */}
            <section style={{ padding: "100px 4%", background: "#000" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "4rem", textAlign: "center" }}>
                        Cómo se ve tu negocio <span style={{ color: "#e31c25" }}>antes y después</span> de esta asesoría
                    </h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                        <div style={{ flex: "1 1 500px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", padding: "3rem", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <h3 style={{ fontSize: "1.8rem", fontWeight: "900", marginBottom: "2rem", color: "rgba(255,255,255,0.4)" }}>Hoy</h3>
                            {[
                                "Invertís en marketing digital sin saber realmente si rinde",
                                "Tomás decisiones por intuición o porque \"alguien dijo que era buena idea\"",
                                "Tenés la sensación de estar siempre apagando incendios sin un plan",
                                "Cada nuevo intento te genera más dudas en lugar de más claridad",
                                "Sentís que perdés tiempo y dinero, pero no sabés exactamente dónde",
                                "Mirás lo que hace tu competencia y no sabés si copiarlo o ignorarlo"
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem", color: "rgba(255,255,255,0.6)" }}>
                                    <div style={{ fontSize: "1.2rem", color: "#ff4e57" }}>—</div>
                                    <p style={{ margin: 0 }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ flex: "1 1 500px", background: "linear-gradient(145deg, rgba(227,28,37,0.1), rgba(0,0,0,0))", borderRadius: "24px", padding: "3rem", border: "1px solid rgba(227,28,37,0.3)", boxShadow: "0 0 40px rgba(227,28,37,0.1)" }}>
                            <h3 style={{ fontSize: "1.8rem", fontWeight: "900", marginBottom: "2rem", color: "#ff6b6b" }}>Después de la asesoría</h3>
                            {[
                                "Sabés exactamente qué está funcionando y qué no en tu marketing",
                                "Tomás decisiones basadas en un diagnóstico real, no en suposiciones",
                                "Tenés un plan claro para los próximos 90 días, priorizado por impacto",
                                "Entendés por qué pasaba lo que pasaba y cómo evitar repetirlo",
                                "Sabés en qué dejar de invertir y dónde poner los recursos para que rindan",
                                "Mirás a tu competencia con criterio propio, no con ansiedad"
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem" }}>
                                    <div style={{ fontSize: "1.2rem", color: "#e31c25" }}>✓</div>
                                    <p style={{ margin: 0, fontWeight: "600" }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 7 — PARA QUIÉN ES */}
            <section style={{ padding: "100px 4%", background: "#fff", color: "#111" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "4rem", textAlign: "center" }}>Esta asesoría es para vos si...</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}>
                        <div style={{ flex: "1 1 400px" }}>
                            <h3 style={{ color: "green", fontSize: "1.5rem", fontWeight: "800", marginBottom: "2rem" }}>Es para vos si:</h3>
                            {[
                                "Tenés un negocio que ya está operando y facturando o un proyecto que querés lanzar con bases sólidas",
                                "Sentís que tu marketing digital no está rindiendo lo que podría, y querés entender por qué",
                                "Estás dispuesto a escuchar cosas que tal vez no querés escuchar, si te ayudan a crecer",
                                "Valorás el tiempo y la experiencia, y entendés que el conocimiento se paga",
                                "Querés un diagnóstico real, no un vendedor de humo"
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                                    <div style={{ color: "green", fontWeight: "bold" }}>+</div>
                                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#333" }}>{item}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ flex: "1 1 400px" }}>
                            <h3 style={{ color: "#777", fontSize: "1.5rem", fontWeight: "800", marginBottom: "2rem" }}>No es para vos si:</h3>
                            {[
                                "Solo tenés una idea vaga sin definir, sin haber hecho el ejercicio mínimo de pensarla",
                                "Buscás una solución mágica que te haga vender sin esfuerzo ni inversión",
                                "No estás dispuesto a invertir en marketing digital, ni en tiempo ni en presupuesto",
                                "Querés que alguien te venda lo que querés escuchar, no lo que necesitás escuchar",
                                "Estás buscando una llamada gratuita para \"ver de qué se trata\""
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                                    <div style={{ color: "#777" }}>×</div>
                                    <p style={{ margin: 0, fontSize: "1.05rem", color: "#666" }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ marginTop: "4rem", textAlign: "center", fontStyle: "italic", color: "#555" }}>
                        "Soy honesto con esto porque tu tiempo y tu dinero importan, igual que el mío. Si no calificás para esta asesoría, no la agendes. Si calificás, vas a salir agradeciendo haberla hecho."
                    </div>
                </div>
            </section>

            {/* BOTÓN INTERMEDIO 2 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: "center", margin: "4rem 0" }}
            >
                <button
                    onClick={scrollToForm}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "#E31C25",
                        color: "white",
                        padding: "16px 36px",
                        borderRadius: "50px",
                        fontWeight: "700",
                        fontSize: "1.05rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 10px 40px rgba(227, 28, 37, 0.4)",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow = "0 15px 50px rgba(227, 28, 37, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 10px 40px rgba(227, 28, 37, 0.4)";
                    }}
                >
                    Reservar mi asesoría <ArrowRightIcon size={20} />
                </button>
            </motion.div>

            {/* SECCIÓN 8 — QUIÉN SOY YO */}
            <section style={{ padding: "100px 4%", background: "#0c0c0c" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4rem" }}>
                    <div style={{ flex: "1 1 600px" }}>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "2rem" }}>Quién soy y por qué confiar en mí para esto</h2>
                        <div style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Soy Diego Ballerini, fundador de MagnaMKT. Hace más de treinta años que trabajo en negocios y marketing, y los últimos años me especialicé en ayudar a empresas a transformar su manera de vender en lo digital. No como una agencia tradicional que hace tareas operativas, sino como un partner estratégico que entiende el negocio del cliente como si fuera propio.
                            </p>
                            <p style={{ marginBottom: "1.5rem" }}>
                                Trabajé con empresas de sectores muy distintos: salud, alimentación, deporte, retail, servicios profesionales, educación, e-commerce. Aprendí que los problemas de marketing digital casi nunca son problemas de herramientas: son problemas de estrategia, de claridad y de sistema.
                            </p>
                            <p>
                                Entre 2021 y 2024 fui mentor de marketing digital para más de 3000 personas a través de mi propio programa de capacitación. Esa experiencia me enseñó algo fundamental: muchas veces, los cambios más importantes que un negocio necesita se pueden identificar en 90 minutos bien aprovechados.
                            </p>
                        </div>
                    </div>
                    <div style={{ flex: "1 1 400px", textAlign: "center" }}>
                        <img
                            src={diegoPhoto}
                            alt="Diego Ballerini"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                borderRadius: "50%",
                                border: "4px solid #e31c25",
                                padding: "10px",
                                filter: "grayscale(10%)"
                            }}
                        />
                        <h3 style={{ marginTop: "1.5rem", fontSize: "1.5rem", fontWeight: "800" }}>Diego Ballerini</h3>
                        <p style={{ color: "#e31c25", fontWeight: "700" }}>Fundador de MagnaMKT</p>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 9 — TESTIMONIOS */}
            <section style={{ padding: "100px 4%", background: "#fff", color: "#111" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "4rem", textAlign: "center" }}>Lo que dicen quienes ya trabajaron conmigo</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
                        {[
                            {
                                text: "Trabajar con Diego cambió la forma en que pensamos nuestro marketing. No es solo alguien que ejecuta, es alguien que te ordena la cabeza.",
                                author: "Mercedes Cura",
                                company: "Aldeitas Food"
                            },
                            {
                                text: "Después de años contratando agencias que prometían y no entregaban, encontrar a Diego fue un antes y después. Habla claro, sabe lo que dice, y sus consejos nos hicieron crecer.",
                                author: "Nicolás Lo Cascio",
                                company: "A Puro Pelo"
                            },
                            {
                                text: "La mirada estratégica de Diego es lo que más valoramos. Te muestra cosas que vos no podés ver porque estás adentro del problema.",
                                author: "Carlos Morente",
                                company: "Proar"
                            }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: "2.5rem", background: "#f9f9f9", borderRadius: "24px", border: "1px solid #eee", fontStyle: "italic" }}>
                                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#444", marginBottom: "2rem" }}>"{item.text}"</p>
                                <div>
                                    <strong style={{ fontSize: "1.1rem", color: "#111", display: "block" }}>{item.author}</strong>
                                    <span style={{ fontSize: "0.9rem", color: "#e31c25", fontWeight: "600" }}>{item.company}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 10 — INVERSIÓN */}
            <section style={{ padding: "100px 4%", background: "#000" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", marginBottom: "3rem" }}>Cuánto cuesta y cómo funciona</h2>
                    <div style={{
                        padding: "3.5rem",
                        border: "1px solid #e31c25",
                        borderRadius: "32px",
                        background: "rgba(227,28,37,0.03)",
                        boxShadow: "0 0 50px rgba(227,28,37,0.1)",
                        textAlign: "left"
                    }}>
                        <div style={{ marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1.5rem" }}>
                            <div style={{ fontSize: "3rem", fontWeight: "900", color: "#fff" }}>USD 250</div>
                            <div style={{ fontSize: "1.2rem", color: "#e31c25", fontWeight: "700" }}>Asesoría Individual de 90 minutos</div>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem 0" }}>
                            {[
                                "Asesoría completa de diagnóstico estratégico",
                                "Plan de acción priorizado para los próximos 90 días",
                                "Grabación de la asesoría para que la puedas revisar después",
                                "Acceso a un documento resumen con los puntos clave"
                            ].map((item, i) => (
                                <li key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1rem", color: "rgba(255,255,255,0.8)" }}>
                                    <span style={{ color: "#e31c25" }}>—</span> {item}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginBottom: "2.5rem" }}>
                            El pago se realiza por adelantado para reservar el horario. Una vez confirmado el pago, agendamos en el horario que más te convenga.
                        </p>
                        <button
                            onClick={scrollToForm}
                            style={{
                                width: "100%",
                                padding: "20px",
                                background: "#e31c25",
                                color: "#fff",
                                border: "none",
                                borderRadius: "12px",
                                fontWeight: "800",
                                fontSize: "1.2rem",
                                cursor: "pointer"
                            }}
                        >
                            Quiero reservar mi asesoría
                        </button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 11 — PREGUNTAS FRECUENTES */}
            <section style={{ padding: "100px 4%", background: "#fff", color: "#111" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", marginBottom: "4rem", textAlign: "center" }}>Preguntas frecuentes</h2>
                    <div style={{ display: "grid", gap: "1rem" }}>
                        {[
                            {
                                q: "¿Por qué la asesoría es paga si en otros lados ofrecen llamadas gratis?",
                                a: "Porque esta asesoría no es una llamada de venta donde voy a tratar de convencerte de contratar mi agencia. Es una asesoría de trabajo real sobre tu negocio, con valor en sí misma. El que paga, viene preparado, viene comprometido, y se lleva valor concreto. El que busca una llamada gratis para \"ver de qué se trata\", probablemente no es el cliente que estoy buscando."
                            },
                            {
                                q: "¿Qué pasa si después de la asesoría decido contratar a MagnaMKT para implementar?",
                                a: "Genial. La asesoría funciona como punto de partida ideal para una relación de trabajo más larga. Si decidís contratar a MagnaMKT para implementar el plan que discutimos, descontamos el valor de la asesoría del primer mes de honorarios."
                            },
                            {
                                q: "¿Cómo me preparo para la asesoría?",
                                a: "Una vez que pagás, te voy a enviar un breve cuestionario para que completes antes de la llamada. Son preguntas sobre tu negocio, tu situación actual, qué probaste antes, qué resultados tuviste. Eso me permite llegar a la asesoría ya con contexto, y aprovechamos los 90 minutos al máximo."
                            },
                            {
                                q: "¿Cuánto tarda en agendarse una vez que pago?",
                                a: "Habitualmente tengo disponibilidad dentro de los 7 a 14 días siguientes al pago. Vas a poder elegir el horario que más te convenga dentro de mi calendario."
                            },
                            {
                                q: "¿La asesoría es solo para empresas argentinas?",
                                a: "No. Trabajo con empresas a nivel mundial. La asesoría es por videollamada, así que la ubicación no es un problema. El cobro se realiza en dólares para que sea claro independientemente del país."
                            },
                            {
                                q: "¿Qué pasa si después de pagar no puedo asistir?",
                                a: "Podés reagendar sin costo hasta 24 horas antes de la asesoría. Si avisás con menos tiempo o no asistís, la asesoría no se reembolsa pero podés reagendarla por una sola vez dentro de los siguientes 30 días."
                            },
                            {
                                q: "¿La asesoría sirve si mi negocio es muy chico o si recién estoy arrancando?",
                                a: "Sí, en la mayoría de los casos sirve. Si ya facturás, buscamos cuellos de botella. Si estás arrancando, validamos tu modelo y canales para que no pierdas tiempo ni dinero. NO sirve si solo tenés una idea vaga sin haberla pensado nada."
                            }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FORMULARIO DE CAPTURA (NUEVO - REQUERIDO) */}
            <section ref={formRef} style={{ padding: "100px 4%", background: "#080808" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <h2 style={{ fontSize: "3.5rem", fontWeight: "900", marginBottom: "1.5rem" }}>Iniciá tu reserva</h2>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem" }}>Completá tus datos y me pondré en contacto con vos para enviarte el link de pago y agendar la asesoría.</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ position: 'relative', background: "rgba(255,255,255,0.03)", padding: "clamp(1.5rem, 5vw, 4rem)", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.08)" }}>

                        <AnimatePresence>
                            {showErrorBanner && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    style={{
                                        marginBottom: '2.5rem',
                                        padding: '1.50rem',
                                        background: 'rgba(227, 28, 37, 0.15)',
                                        border: '1px solid #e31c25',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1.2rem',
                                        color: '#fff',
                                        boxShadow: '0 10px 40px rgba(227, 28, 37, 0.25)'
                                    }}
                                >
                                    <span style={{ fontSize: '1.8rem' }}>🚫</span>
                                    <div>
                                        <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px' }}>Error en el registro</strong>
                                        <span style={{ opacity: 0.85, fontSize: '1.05rem' }}>El email ingresado no es válido. Por favor corregilo para continuar.</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>Nombre y Apellido *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tu nombre y apellido"
                                    style={{ width: "100%", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem" }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>Email *</label>
                                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>Acá es donde te llega la confirmación y los próximos pasos</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        handleChange(e);
                                        if (emailError) setEmailError("");
                                    }}
                                    required
                                    placeholder="tu@email.com"
                                    style={{
                                        width: "100%",
                                        padding: "16px 20px",
                                        background: "rgba(255,255,255,0.05)",
                                        border: emailError ? "2px solid #e31c25" : "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "12px",
                                        color: "#fff",
                                        fontSize: "1.1rem",
                                        transition: "all 0.3s ease",
                                        outline: "none"
                                    }}
                                />
                                <AnimatePresence>
                                    {emailError && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                                            style={{
                                                color: "#e31c25",
                                                fontSize: "0.9rem",
                                                marginTop: "0.5rem",
                                                fontWeight: "700",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem"
                                            }}
                                        >
                                            <span>⚠️</span> {emailError}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "2.5rem", marginBottom: "2.5rem" }}>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>WhatsApp *</label>
                                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>Por si necesito coordinar algo más rápido (incluí código de país)</p>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+54 9 11 ..."
                                    style={{ width: "100%", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem" }}
                                />
                            </div>
                            <div>
                                <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>País *</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", padding: "16px 20px", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem", cursor: "pointer", appearance: "none" }}
                                >
                                    <option value="" disabled style={{ background: "#1a1a1a" }}>Seleccioná tu país</option>
                                    {[
                                        "Argentina", "Bolivia", "Chile", "Colombia", "Costa Rica", "Cuba", "Ecuador", "El Salvador", "España", "Estados Unidos",
                                        "Guatemala", "Guinea Ecuatorial", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "Puerto Rico",
                                        "República Dominicana", "Uruguay", "Venezuela"
                                    ].map(c => (
                                        <option key={c} value={c} style={{ background: "#1a1a1a", color: "#fff" }}>{c}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div style={{ marginBottom: "3rem" }}>
                            <label style={{ display: "block", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "800", color: "rgba(255,255,255,0.9)" }}>¿Cuál es tu situación actual? *</label>
                            <div style={{ display: "grid", gap: "1.2rem" }}>
                                {[
                                    "Tengo un negocio operando y quiero diagnosticar qué está fallando en mi marketing digital",
                                    "Tengo un proyecto o idea y quiero definir bien la estrategia antes de invertir",
                                    "Soy parte de una empresa y quiero traer claridad estratégica al equipo",
                                    "Otra (especificar abajo)"
                                ].map((opt) => (
                                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", fontSize: "1.1rem", padding: "12px 20px", background: "rgba(255,255,255,0.02)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)", transition: "all 0.2s ease" }}>
                                        <input
                                            type="radio"
                                            name="situation"
                                            value={opt}
                                            checked={formData.situation === opt}
                                            onChange={handleChange}
                                            required
                                            style={{ cursor: "pointer", width: "1.2rem", height: "1.2rem", accentColor: "#e31c25" }}
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                            {formData.situation === "Otra (especificar abajo)" && (
                                <input
                                    type="text"
                                    name="situationOther"
                                    value={formData.situationOther}
                                    onChange={handleChange}
                                    required
                                    placeholder="Especificá tu situación"
                                    style={{ width: "100%", marginTop: "1rem", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem" }}
                                />
                            )}
                        </div>

                        <div style={{ marginBottom: "3rem" }}>
                            <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>Contame en pocas líneas qué te trae a esta asesoría *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                maxLength="500"
                                placeholder="No hace falta que entres en detalle, con un párrafo alcanza. Quiero entender qué te llevó a buscar esta asesoría específicamente."
                                style={{ width: "100%", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", resize: "none", fontSize: "1.1rem", lineHeight: "1.6" }}
                            />
                            <p style={{ textAlign: "right", fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginTop: "0.5rem" }}>
                                {formData.message.length}/500 caracteres
                            </p>
                        </div>

                        <div style={{ marginBottom: "4rem" }}>
                            <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>¿Cómo me conociste? *</label>
                            <select
                                name="source"
                                value={formData.source}
                                onChange={handleChange}
                                required
                                style={{ width: "100%", padding: "16px 20px", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem", cursor: "pointer", appearance: "none" }}
                            >
                                <option value="" disabled style={{ background: "#1a1a1a" }}>Seleccioná una opción</option>
                                {[
                                    "Instagram", "LinkedIn", "Recomendación de un colega o cliente", "Fui alumno de tu mentoría", "Búsqueda en Google", "Otro"
                                ].map(s => (
                                    <option key={s} value={s} style={{ background: "#1a1a1a", color: "#fff" }}>{s}</option>
                                ))}
                            </select>
                            {formData.source === "Otro" && (
                                <input
                                    type="text"
                                    name="sourceOther"
                                    value={formData.sourceOther}
                                    onChange={handleChange}
                                    required
                                    placeholder="Especificá cómo me conociste"
                                    style={{ width: "100%", marginTop: "1rem", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem" }}
                                />
                            )}
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <button
                                type="submit"
                                disabled={sending || sent}
                                style={{
                                    width: "100%",
                                    padding: "24px",
                                    background: sent ? "#22c55e" : "#e31c25",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "16px",
                                    fontWeight: "900",
                                    fontSize: "1.4rem",
                                    cursor: (sending || sent) ? "default" : "pointer",
                                    opacity: sending ? 0.7 : 1,
                                    transition: "all 0.3s ease",
                                    marginBottom: "1.5rem",
                                    boxShadow: sent ? "0 10px 30px rgba(34, 197, 94, 0.3)" : "0 10px 30px rgba(227, 28, 37, 0.3)"
                                }}
                            >
                                {sending ? "Enviando..." : sent ? "✓ ¡Te contacto en las próximas 4 hs!" : "Reservar mi asesoría"}
                            </button>
                            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", fontWeight: "600", lineHeight: "1.6", maxWidth: "600px", margin: "1.5rem auto 0" }}>
                                Una vez que envíes este formulario, te voy a contactar dentro de las próximas 4 horas para coordinar el pago y agendar el horario que más te convenga.
                            </p>
                        </div>
                    </form>
                </div>
            </section>



            {/* SECCIÓN 12 — CTA FINAL */}
            <section style={{ padding: "120px 4%", background: "linear-gradient(135deg, #e31c25, #ff4e57)", textAlign: "center" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: "900", color: "#fff", marginBottom: "1.5rem", lineHeight: "1.1" }}>
                        ¿Listo para dejar de adivinar y empezar a entender qué hacer con tu marketing?
                    </h2>
                    <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.9)", marginBottom: "3rem" }}>
                        Reservá tu asesoría, vení preparado, y salí con la claridad que necesitás para los próximos 90 días.
                    </p>
                    <button
                        onClick={scrollToForm}
                        style={{
                            padding: "22px 50px",
                            background: "#fff",
                            color: "#e31c25",
                            border: "none",
                            borderRadius: "12px",
                            fontWeight: "900",
                            fontSize: "1.2rem",
                            cursor: "pointer",
                            boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                        }}
                    >
                        Reservar mi asesoría — USD 250
                    </button>
                    <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}>
                        Pago seguro · Reagendable hasta 24 horas antes · 90 minutos por videollamada
                    </p>
                </div>
            </section>
        </motion.div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ borderBottom: "1px solid #eee", overflow: "hidden" }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: "100%",
                    padding: "1.5rem 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "1rem"
                }}
            >
                <span style={{ fontSize: "1.15rem", fontWeight: "700", color: "#111" }}>{question}</span>
                <span style={{
                    fontSize: "1.5rem",
                    color: "#e31c25",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                }}>+</span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p style={{ paddingBottom: "1.5rem", color: "#555", lineHeight: "1.6", fontSize: "1.05rem" }}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AsesoriaEstrategica;
