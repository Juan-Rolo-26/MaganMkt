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
    value: 'diegob@magnamkt.com',
    href: 'mailto:diegob@magnamkt.com',
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Orbs animados de fondo */}
      <Motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="orb-teal"
        style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
      />
      <Motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        className="orb-red"
        style={{ width: 400, height: 400, top: '10%', left: '-5%', zIndex: 0 }}
      />

      <div className="contact-glow" />

      <div
        className="contact-grid"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* ── Left: Info Panel ───────────────────── */}
        <Motion.aside
          initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="contact-info-panel"
        >
          <div className="contact-header">
            {/* Label de sección */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 120, delay: 0.1 }}
            >
              <span className="section-label section-label-red" style={{ marginBottom: '0.8rem' }}>
                Contacto
              </span>
            </Motion.div>

            <Motion.h2
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: '0.5rem' }}
            >
              Hablemos de{' '}
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
              style={{ marginTop: '0.8rem' }}
            >
              Estamos listos para llevar tu marca al siguiente nivel. Escribinos y diseñemos juntos
              una estrategia que convierta.
            </Motion.p>
          </div>

          <div className="contact-info-list">
            {contactItems.map((item, idx) => (
              <Motion.article
                key={item.title}
                className="contact-info-item"
                initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
                animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{ delay: 0.35 + idx * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                  x: 8,
                  background: `${item.glow}`,
                  borderColor: `${item.color}30`,
                  boxShadow: `0 8px 25px rgba(0,0,0,0.4)`,
                  transition: { duration: 0.25 }
                }}
                style={{ cursor: 'default' }}
              >
                <Motion.div
                  className="contact-icon-box"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ type: 'spring', stiffness: 180, delay: 0.4 + idx * 0.13 }}
                  whileHover={{ scale: 1.1, rotate: -8 }}
                >
                  <item.Icon size={20} />
                </Motion.div>
                <div>
                  <h3 style={{ color: '#fff' }}>{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
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
          <form onSubmit={handleSubmit} className="glass-card contact-form">
            {[
              { id: 'name', label: 'Nombre Completo', type: 'text', placeholder: 'Tu nombre' },
              { id: 'email', label: 'Correo electronico', type: 'email', placeholder: 'tu@email.com' },
            ].map((field, fi) => (
              <Motion.div
                key={field.id}
                className="contact-form-row"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.3 + fi * 0.12 }}
              >
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  id={field.id}
                  type={field.type}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              </Motion.div>
            ))}

            <Motion.div
              className="contact-form-row"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.55 }}
            >
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Contanos sobre tu proyecto..."
                required
              />
            </Motion.div>

            <Motion.button
              type="submit"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.68 }}
              whileHover={{ scale: 1.02, boxShadow: '0 15px 35px rgba(227,28,37,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary contact-submit"
              disabled={sending}
              style={{
                background: sent
                  ? 'linear-gradient(135deg, #00b5cc, #54d8e8)'
                  : 'linear-gradient(135deg, #e31c25, #ff4e57)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {sending ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }}
                  />
                  Enviando...
                </span>
              ) : sent ? (
                <span>✓ ¡Mensaje enviado!</span>
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <ArrowRightIcon size={16} />
                </>
              )}
            </Motion.button>
          </form>
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;
