import React from 'react';

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true'
};

const iconSize = (size) => ({ width: size, height: size });

export const MapPinIcon = ({ size = 22 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const PhoneIcon = ({ size = 22 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.8 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6.2 6.2l1.3-1.3a2 2 0 0 1 2.1-.4c.8.4 1.7.6 2.6.8a2 2 0 0 1 1.7 1.9z" />
  </svg>
);

export const MailIcon = ({ size = 22 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const LinkedinIcon = ({ size = 20 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const InstagramIcon = ({ size = 20 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.4a4 4 0 1 1-3.4-3.4A4 4 0 0 1 16 11.4z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const YoutubeIcon = ({ size = 20 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M21.2 7.4a2.7 2.7 0 0 0-1.9-2C17.6 5 12 5 12 5s-5.6 0-7.3.4a2.7 2.7 0 0 0-1.9 2A27.7 27.7 0 0 0 2.4 12c0 1.6.1 3.2.4 4.6a2.7 2.7 0 0 0 1.9 2C6.4 19 12 19 12 19s5.6 0 7.3-.4a2.7 2.7 0 0 0 1.9-2c.3-1.4.4-3 .4-4.6s-.1-3.2-.4-4.6z" />
    <polygon points="10,9 16,12 10,15" />
  </svg>
);

export const ArrowRightIcon = ({ size = 16 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export const ChevronRightIcon = ({ size = 14 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const StarIcon = ({ size = 18 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="m12 3.8 2.55 5.17 5.7.83-4.13 4.02.97 5.68L12 16.8l-5.09 2.68.97-5.68-4.13-4.02 5.7-.83L12 3.8z" />
  </svg>
);

export const HandshakeIcon = ({ size = 30 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M4 12l3-3 3 3-3 3-3-3z" />
    <path d="M20 12l-3-3-3 3 3 3 3-3z" />
    <path d="m10 10 2-2a2.8 2.8 0 0 1 4 0l1 1" />
    <path d="m14 14-2 2a2.8 2.8 0 0 1-4 0l-1-1" />
    <path d="m9.5 12.5 3 3" />
  </svg>
);

export const IncBadgeIcon = ({ size = 30 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.4 10.2h7.2" />
    <path d="M8.2 13h5.6" />
    <path d="M8.2 15.7h7.6" />
    <path d="M9 7.8h6" />
  </svg>
);

export const MoneyHandIcon = ({ size = 30 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <circle cx="17.5" cy="6.5" r="3.5" />
    <path d="M16 6.5h3" />
    <path d="M17.5 5v3" />
    <path d="M3 14h5l2.5-2h3a1.8 1.8 0 0 1 0 3.6H11" />
    <path d="m3 14 2 5h8l6-5" />
  </svg>
);

export const TargetIcon = ({ size = 28 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.5" />
    <path d="m20 4-2.5 2.5" />
  </svg>
);

export const ChartIcon = ({ size = 28 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M4 19h16" />
    <path d="M7 15V9" />
    <path d="M12 15V5" />
    <path d="M17 15v-3" />
    <path d="m4 9 4-4 4 3 8-4" />
  </svg>
);

export const PaletteIcon = ({ size = 28 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M12 3a9 9 0 1 0 0 18h1.2a2.3 2.3 0 0 0 2.3-2.3v-.6a2 2 0 0 1 2-2h1a4.5 4.5 0 0 0 0-9H12z" />
    <circle cx="7" cy="11" r="1" />
    <circle cx="9.5" cy="7.5" r="1" />
    <circle cx="14" cy="7.2" r="1" />
    <circle cx="16.8" cy="10.5" r="1" />
  </svg>
);

export const MegaphoneIcon = ({ size = 28 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M3 11v2a3 3 0 0 0 3 3h2l4 4V4L8 8H6a3 3 0 0 0-3 3z" />
    <path d="M17 8a5 5 0 0 1 0 8" />
    <path d="M19.5 5.5a8.5 8.5 0 0 1 0 13" />
  </svg>
);

export const UsersIcon = ({ size = 28 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.9" />
    <path d="M16 3.1a4 4 0 0 1 0 7.8" />
  </svg>
);

export const PenIcon = ({ size = 28 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M3 21h18" />
    <path d="m6 17 10.2-10.2a2.8 2.8 0 1 1 4 4L10 21H6z" />
    <path d="m14 9 4 4" />
  </svg>
);

export const MenuIcon = ({ size = 22 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </svg>
);

export const CloseIcon = ({ size = 22 }) => (
  <svg {...baseProps} style={iconSize(size)}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </svg>
);
