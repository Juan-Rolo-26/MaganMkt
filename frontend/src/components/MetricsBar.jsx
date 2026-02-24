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
    duration: 3000
  },
  {
    key: 'brands',
    end: 50,
    decimals: 0,
    prefix: '',
    suffix: '+',
    label: 'Marcas acompañadas por MAGNA',
    Icon: UsersIcon,
    duration: 1500
  },
  {
    key: 'services',
    end: 6,
    decimals: 0,
    prefix: '',
    suffix: '',
    label: 'Servicios de marketing integral',
    Icon: MegaphoneIcon,
    duration: 900
  },
  {
    key: 'satisfaction',
    end: 100,
    decimals: 0,
    prefix: '',
    suffix: '%',
    label: 'Enfoque y compromiso con el cliente',
    Icon: HandshakeIcon,
    duration: 700
  }
];

const formatNumber = (value, decimals) => {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }
  return Math.round(value).toString();
};

const normalizeStepValue = (value, decimals) => Number(value.toFixed(decimals));

const useCountUp = (target, enabled, decimals = 0, duration = 850) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

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

    return () => {
      if (timerId) {
        window.clearInterval(timerId);
      }
    };
  }, [enabled, target, duration, decimals]);

  return formatNumber(value, decimals);
};

const MetricValue = ({ metric, enabled }) => {
  const count = useCountUp(metric.end, enabled, metric.decimals, metric.duration);
  return (
    <div className="metrics-value">
      {metric.prefix && <span className="metrics-value-prefix">{metric.prefix}</span>}
      <span className="metrics-value-number">{count}</span>
      {metric.suffix && <span className="metrics-value-suffix">{metric.suffix}</span>}
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
        <Motion.div
          className="metrics-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Números que hablan de <span>confianza</span></h2>
          <p>Resultados reales que respaldan nuestro compromiso con cada cliente y marca que confía en nosotros.</p>
        </Motion.div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => {
            return (
              <Motion.article
                key={metric.key}
                className="metric-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="metric-icon-circle">
                  <metric.Icon size={40} />
                </div>

                <MetricValue metric={metric} enabled={inView} />
                <span className="metric-label">{metric.label}</span>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
