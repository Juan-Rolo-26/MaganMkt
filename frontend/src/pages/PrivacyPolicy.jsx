import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Motion.section
      className="policy-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <article className="policy-panel">
        <Link to="/" className="btn-back-policy">
          ← Volver al Inicio
        </Link>
        <h1 className="text-gradient policy-title">Politica de Privacidad</h1>

        <div className="policy-content">
          <p>
            En Magna Marketing, nos comprometemos a proteger su privacidad. Esta politica explica
            como recopilamos, usamos y divulgamos su informacion personal.
          </p>

          <h2>1. Informacion que recopilamos</h2>
          <p>
            Podemos recopilar informacion personal que usted nos proporciona directamente, como su
            nombre, direccion de correo electronico, numero de telefono y cualquier otra informacion
            que decida compartir cuando se comunica con nosotros a traves de nuestro sitio web.
          </p>

          <h2>2. Uso de la informacion</h2>
          <p>Utilizamos la informacion que recopilamos para:</p>
          <ul>
            <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
            <li>Responder a sus comentarios y preguntas.</li>
            <li>Enviar informacion tecnica, avisos de actualizaciones y alertas de seguridad.</li>
            <li>Comunicarnos con usted sobre productos, servicios, ofertas y eventos.</li>
          </ul>

          <h2>3. Compartir informacion</h2>
          <p>No compartimos su informacion personal con terceros, excepto en los siguientes casos:</p>
          <ul>
            <li>Con su consentimiento.</li>
            <li>Para cumplir con leyes aplicables o procesos legales.</li>
            <li>Para proteger los derechos y la propiedad de Magna Marketing.</li>
          </ul>

          <h2>4. Seguridad</h2>
          <p>
            Tomamos medidas razonables para proteger su informacion personal contra perdida, robo,
            uso indebido y acceso no autorizado, divulgacion, alteracion y destruccion.
          </p>

          <h2>5. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre esta politica de privacidad, contactenos en:
            <br />
            <strong>Email:</strong> diegob@magnamkt.com
            <br />
            <strong>Telefono:</strong> +54 9 341 642-2073
          </p>

          <p className="policy-muted">Ultima actualizacion: Febrero 2024</p>
        </div>
      </article>
    </Motion.section>
  );
};

export default PrivacyPolicy;
