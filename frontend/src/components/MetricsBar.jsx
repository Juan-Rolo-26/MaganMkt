import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { ChartIcon, HandshakeIcon, TargetIcon, UsersIcon } from './SiteIcons';

const metrics = [
  {
    key: 'roi',
    end: 450,
    decimals: 0,
    prefix: '',
    suffix: '%',
    label: 'Retorno promedio en resultados reportados',
    Icon: ChartIcon,
    duration: 3200
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
    label: 'Servicios estrategicos integrales',
    Icon: TargetIcon,
    duration: 900
  },
  {
    key: 'channels',
    end: 3,
    decimals: 0,
    prefix: '',
    suffix: '',
    label: 'Canales directos para iniciar tu proyecto',
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
  const inView = useInView(sectionRef, { once: true, amount: 0.35 });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!inView) {
      return undefined;
    }

    let step = 0;

    const timer = window.setInterval(() => {
      step += 1;
      setActiveStep(Math.min(step, metrics.length));

      if (step >= metrics.length) {
        window.clearInterval(timer);
      }
    }, 900);

    return () => {
      window.clearInterval(timer);
    };
  }, [inView]);

  const progress = useMemo(() => (activeStep / metrics.length) * 100, [activeStep]);

  return (
    <section ref={sectionRef} className="metrics-strip" aria-label="Resultados destacados">
      <div className="metrics-strip-bg" />

      <div className="metrics-inner">
        <div className="metrics-grid">
          {metrics.map((metric, index) => {
            const isActive = activeStep > index;
            return (
              <Motion.article
                key={metric.key}
                className={`metric-card ${isActive ? 'metric-card-active' : ''}`}
                initial={{ opacity: 0, y: 26 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.42, y: 20 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="metric-icon">
                  <metric.Icon size={36} />
                </div>

                <MetricValue metric={metric} enabled={isActive} />
                <p>{metric.label}</p>
              </Motion.article>
            );
          })}
        </div>

        <div className="metrics-progress-wrap" aria-hidden="true">
          <div className="metrics-progress-track">
            <span className="metrics-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="metrics-progress-steps">
            {metrics.map((metric, index) => (
              <span
                key={metric.key}
                className={`metrics-step-dot ${activeStep > index ? 'metrics-step-dot-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
