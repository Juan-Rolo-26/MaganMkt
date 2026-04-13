import React, { useState, useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon } from './SiteIcons';

const contactItems = [
  {
    title: 'Ubicacion',
    value: 'Rosario, Santa Fe, Argentina',
    Icon: MapPinIcon,
    color: '#e31c25',
    glow: 'rgba(227,28,37,0.2)',
  },
  {
    title: 'Correo electronico',
    value: 'dballerini@magnamkt.com',
    href: 'mailto:dballerini@magnamkt.com',
    Icon: MailIcon,
    color: '#00b5cc',
    glow: 'rgba(0,181,204,0.2)',
  },
  {
    title: 'Telefono / WhatsApp',
    value: '+54 9 341 642-2073',
    href: 'https://wa.me/5493416422073',
    Icon: PhoneIcon,
    color: '#ff6b6b',
    glow: 'rgba(255,107,107,0.2)',
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    situation: '',
    situationOther: '',
    message: '',
    source: '',
    sourceOther: ''
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          name: '',
          email: '',
          phone: '',
          country: '',
          situation: '',
          situationOther: '',
          message: '',
          source: '',
          sourceOther: ''
        });
        setTimeout(() => setSent(false), 8000);
      } else {
        alert("Hubo un error al enviar el formulario. Por favor intentá nuevamente.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error de conexión. Por favor intentá más tarde.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section"
      style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}
    >
      {/* Orbs animados de fondo */}
      <Motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="orb-teal"
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0
        }}
      />

      <div className="contact-glow" />

      <div
        className="contact-grid"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '0 4%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '5rem' }}
      >
        {/* ── Left: Info Panel ───────────────────── */}
        <Motion.aside
          initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="contact-info-panel"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div className="contact-header">
            <Motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
            >
              <span className="section-label section-label-red" style={{ marginBottom: '1.2rem', fontSize: '1rem', padding: '8px 20px' }}>
                Contacto
              </span>
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: '0.5rem', fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.1 }}
            >
              Hablemos de{' '}
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #e31c25, #ff6b6b)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Tu Proyecto
              </span>
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.32 }}
              style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontSize: '1.4rem', maxWidth: '600px' }}
            >
              Completá el formulario para reservar tu sesión estratégica. Te contactaré pronto para coordinar.
            </Motion.p>
          </div>

          <div className="contact-info-list" style={{ marginTop: '4rem', display: 'grid', gap: '2rem' }}>
            {contactItems.map((item, idx) => (
              <Motion.article
                key={item.title}
                className="contact-info-item"
                initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
                animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{ delay: 0.35 + idx * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="contact-icon-box"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color, width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <item.Icon size={24} />
                </div>
                <div>
                  <h3 style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 600 }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: '#fff', margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>{item.value}</p>
                  )}
                </div>
              </Motion.article>
            ))}
          </div>
        </Motion.aside>

        {/* ── Right: Form ────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <form onSubmit={handleSubmit} className="glass-card contact-form" style={{ background: 'rgba(255,255,255,0.03)', padding: 'clamp(1rem, 5vw, 4rem)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ marginBottom: '2rem' }}>
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

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>Email *</label>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>Donde te llegará la confirmación</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                style={{ width: "100%", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: "1.1rem" }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>WhatsApp *</label>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>Para coordinar más rápido (código de país)</p>
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

            <div style={{ marginBottom: '2rem' }}>
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

            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: "block", marginBottom: "1.5rem", fontSize: "1.15rem", fontWeight: "800", color: "rgba(255,255,255,0.9)" }}>¿Cuál es tu situación actual? *</label>
              <div style={{ display: "grid", gap: "1rem" }}>
                {[
                  "Tengo un negocio operando y quiero diagnosticar qué está fallando en mi marketing digital",
                  "Tengo un proyecto o idea y quiero definir bien la estrategia antes de invertir",
                  "Soy parte de una empresa y quiero traer claridad estratégica al equipo",
                  "Otra (especificar abajo)"
                ].map((opt) => (
                  <label key={opt} style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: 'pointer', fontSize: "1.1rem", padding: '10px 15px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <input
                      type="radio"
                      name="situation"
                      value={opt}
                      checked={formData.situation === opt}
                      onChange={handleChange}
                      required
                      style={{ cursor: "pointer", width: '1.1rem', height: '1.1rem', accentColor: "#e31c25" }}
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
                  style={{ width: "100%", marginTop: "1rem", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", fontSize: '1.1rem' }}
                />
              )}
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: "block", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: "700", color: "rgba(255,255,255,0.8)" }}>Contame en pocas líneas qué te trae a esta sesión *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                maxLength="500"
                placeholder="No hace falta que entres en detalle, con un párrafo alcanza."
                style={{ width: "100%", padding: "16px 20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "#fff", resize: "none", fontSize: '1.1rem', lineHeight: '1.6' }}
              />
            </div>

            <div style={{ marginBottom: '3rem' }}>
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
            </div>

            <Motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 15px 35px rgba(227,28,37,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
              disabled={sending || sent}
              style={{
                width: '100%',
                padding: '24px',
                border: 'none',
                borderRadius: '16px',
                fontWeight: 900,
                fontSize: '1.4rem',
                color: '#fff',
                cursor: (sending || sent) ? 'default' : 'pointer',
                background: sent
                  ? '#22c55e'
                  : 'linear-gradient(135deg, #e31c25, #ff4e57)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {sending ? "Enviando..." : sent ? "✓ ¡Sesión Reservada!" : "Reservar mi sesión"}
            </Motion.button>

            <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', lineHeight: '1.6' }}>
              Una vez que envíes este formulario, te voy a contactar dentro de las próximas 4 horas para coordinar el pago y agendar el horario que más te convenga.
            </p>
          </form>
        </Motion.div>
      </div>

    </section>
  );
};

export default Contact;
