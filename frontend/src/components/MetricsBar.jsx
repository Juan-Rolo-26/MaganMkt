import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { ChartIcon, HandshakeIcon, MegaphoneIcon, UsersIcon } from './SiteIcons';

const metrics = [
  {
    key: 'projects',
    end: 180,
    decimals: 0,
    prefix: '+',
    suffix: '',
    label: 'Campañas de alto impacto entregadas',
    Icon: ChartIcon,
    duration: 3000,
    color: '#E31C25',
  },
  {
    key: 'brands',
    end: 50,
    decimals: 0,
    prefix: '',
    suffix: '+',
    label: 'Marcas acompañadas por MAGNA',
    Icon: UsersIcon,
    duration: 1500,
    color: '#ff6b6b',
  },
  {
    key: 'services',
    end: 6,
    decimals: 0,
    prefix: '',
    suffix: '',
    label: 'Servicios de marketing integral',
    Icon: MegaphoneIcon,
    duration: 900,
    color: '#00b5cc',
  },
  {
    key: 'satisfaction',
    end: 100,
    decimals: 0,
    prefix: '',
    suffix: '%',
    label: 'Enfoque y compromiso con el cliente',
    Icon: HandshakeIcon,
    duration: 700,
    color: '#f5a623',
  }
];

const formatNumber = (value, decimals) => {
  if (decimals > 0) return value.toFixed(decimals);
  return Math.round(value).toString();
};

const normalizeStepValue = (value, decimals) => Number(value.toFixed(decimals));

const useCountUp = (target, enabled, decimals = 0, duration = 850) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return undefined;

    const stepValue = 1 / 10 ** decimals;
    const totalSteps = Math.max(1, Math.round(target / stepValue));
    const intervalMs = Math.max(10, Math.floor(duration / totalSteps));
    let timerId = null;

    timerId = window.setInterval(() => {
      setValue((previous) => {
        const next = normalizeStepValue(previous + stepValue, decimals);
        if (next >= target) {
          window.clearInterval(timerId);
          return target;
        }
        return next;
      });
    }, intervalMs);

    return () => { if (timerId) window.clearInterval(timerId); };
  }, [enabled, target, duration, decimals]);

  return formatNumber(value, decimals);
};

const MetricValue = ({ metric, enabled }) => {
  const count = useCountUp(metric.end, enabled, metric.decimals, metric.duration);
  return (
    <div className="metrics-value">
      {metric.prefix && <span className="metrics-value-prefix" style={{ color: metric.color }}>{metric.prefix}</span>}
      <span className="metrics-value-number" style={{ color: '#fff' }}>{count}</span>
      {metric.suffix && <span className="metrics-value-suffix" style={{ color: metric.color }}>{metric.suffix}</span>}
    </div>
  );
};

const MetricsBar = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="metrics-strip" aria-label="Resultados destacados">
      <div className="metrics-strip-bg" />

      <div className="metrics-inner">
        {/* Header animado */}
        <Motion.div
          className="metrics-header"
          initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            Números que hablan de <span>confianza</span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Resultados reales que respaldan nuestro compromiso con cada cliente y marca que confía en nosotros.
          </Motion.p>
        </Motion.div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <Motion.article
              key={metric.key}
              className="metric-item"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.3 } }}
            >
              <Motion.div
                className="metric-icon-circle"
                initial={{ scale: 0, rotate: -45 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  delay: 0.3 + index * 0.12,
                }}
                style={{ borderColor: `${metric.color}50`, color: metric.color }}
              >
                <metric.Icon size={40} />
              </Motion.div>

              <MetricValue metric={metric} enabled={inView} />
              <span className="metric-label">{metric.label}</span>

              {/* Línea de color bajo cada métrica */}
              <Motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.12 }}
                style={{
                  width: '40px',
                  height: '2px',
                  background: metric.color,
                  borderRadius: '2px',
                  transformOrigin: 'left',
                  marginTop: '12px',
                }}
              />
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
