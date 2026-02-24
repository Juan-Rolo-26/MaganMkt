import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookiesPolicy = () => {
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
        <h1 className="text-gradient policy-title">Politica de Cookies</h1>

        <div className="policy-content">
          <p>
            Este sitio web utiliza cookies para mejorar la experiencia del usuario. A continuacion,
            encontrara informacion sobre que son las cookies, que tipo de cookies utilizamos y como
            puede desactivarlas en su navegador.
          </p>

          <h2>1. ¿Que son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en su
            dispositivo cuando los visita. Permiten recordar preferencias, analizar uso y
            personalizar su experiencia.
          </p>

          <h2>2. Tipos de cookies que usamos</h2>
          <ul>
            <li>
              <strong>Cookies Esenciales:</strong> necesarias para el funcionamiento basico del
              sitio web.
            </li>
            <li>
              <strong>Cookies de Analisis:</strong> ayudan a entender como interactuan los
              visitantes con el sitio web.
            </li>
            <li>
              <strong>Cookies de Publicidad:</strong> pueden utilizarse para mostrar anuncios
              relevantes.
            </li>
          </ul>

          <h2>3. Gestion de cookies</h2>
          <p>
            Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la
            configuracion de su navegador.
          </p>

          <h2>4. Cambios en la Politica</h2>
          <p>
            Podemos actualizar esta politica de cookies en cualquier momento. Cualquier cambio sera
            publicado en esta pagina.
          </p>

          <h2>5. Mas informacion</h2>
          <p>Si tiene dudas sobre nuestra politica de cookies, puede contactarnos en: diegob@magnamkt.com</p>

          <p className="policy-muted">Ultima actualizacion: Febrero 2024</p>
        </div>
      </article>
    </Motion.section>
  );
};

export default CookiesPolicy;
