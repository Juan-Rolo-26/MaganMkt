import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon } from './SiteIcons';

const contactItems = [
  {
    title: 'Ubicacion',
    value: 'Rosario, Santa Fe, Argentina',
    Icon: MapPinIcon
  },
  {
    title: 'Email',
    value: 'diegob@magnamkt.com',
    href: 'mailto:diegob@magnamkt.com',
    Icon: MailIcon
  },
  {
    title: 'Telefono / WhatsApp',
    value: '+54 9 341 642-2073',
    href: 'https://wa.me/5493416422073',
    Icon: PhoneIcon
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="contact-grid"
      >
        <Motion.aside variants={itemVariants} className="contact-info-panel">
          <div className="contact-header">
            <span className="section-chip">Contacto</span>
            <h2>
              Hablemos de <span className="text-gradient">Tu Proyecto</span>
            </h2>
            <p>
              Estamos listos para llevar tu marca al siguiente nivel. Escribinos y diseñemos juntos
              una estrategia que convierta.
            </p>
          </div>

          <div className="contact-info-list">
            {contactItems.map((item) => (
              <Motion.article
                key={item.title}
                className="contact-info-item"
                whileHover={{ x: 4, transition: { duration: 0.18 } }}
              >
                <div className="contact-icon-box">
                  <item.Icon size={22} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
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

        <Motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="glass-card contact-form">
            <div className="contact-form-row">
              <label htmlFor="name">Nombre Completo</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="contact-form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="contact-form-row">
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
            </div>

            <Motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary contact-submit"
            >
              <span>Enviar Mensaje</span>
              <ArrowRightIcon size={16} />
            </Motion.button>
          </form>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Contact;
