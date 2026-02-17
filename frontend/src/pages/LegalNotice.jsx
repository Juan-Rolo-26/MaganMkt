import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const LegalNotice = () => {
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
        <h1 className="text-gradient policy-title">Aviso Legal</h1>

        <div className="policy-content">
          <p>
            Bienvenido al sitio web de <strong>Magna Marketing</strong> ("la Empresa"). Este
            documento rige el uso y acceso a nuestro sitio web disponible en magnamkt.com.
          </p>

          <h2>1. Propiedad Intelectual</h2>
          <p>
            El contenido de este sitio web, incluyendo textos, graficos, interfaces, logotipos,
            clips de audio y video, es propiedad de Magna Marketing y esta protegido por las leyes
            de propiedad intelectual de Argentina y tratados internacionales.
          </p>

          <h2>2. Exencion de Responsabilidad</h2>
          <p>Magna Marketing no se hace responsable de:</p>
          <ul>
            <li>Errores u omisiones en el contenido del sitio web.</li>
            <li>Interrupciones en el servicio web.</li>
            <li>Enlaces a sitios web de terceros, cuyo contenido no controlamos.</li>
          </ul>

          <h2>3. Uso del Sitio</h2>
          <p>
            Usted acepta utilizar nuestro sitio web unicamente con fines legales y de una manera
            que no infrinja los derechos de terceros.
          </p>

          <h2>4. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar el contenido de este sitio web y estos terminos
            en cualquier momento sin previo aviso.
          </p>

          <h2>5. Ley Aplicable y Jurisdiccion</h2>
          <p>
            Estos terminos se rigen e interpretan de acuerdo con las leyes de la Republica
            Argentina. Cualquier disputa relacionada con estos terminos estara sujeta a la
            jurisdiccion exclusiva de los tribunales de Rosario, Santa Fe.
          </p>

          <p className="policy-muted">Contacto: diegob@magnamkt.com | +54 9 341 642-2073</p>
        </div>
      </article>
    </Motion.section>
  );
};

export default LegalNotice;
