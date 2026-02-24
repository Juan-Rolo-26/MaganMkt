const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = {
  'estrategia': 'https://assets4.lottiefiles.com/packages/lf20_q5pk6p1k.json', // rocket / target
  'digital': 'https://assets2.lottiefiles.com/packages/lf20_bq485nmk.json', // digital marketing / laptop
  'branding': 'https://assets10.lottiefiles.com/packages/lf20_vnikrcia.json', // design palette
  'medios': 'https://assets3.lottiefiles.com/packages/lf20_tno6cg06.json', // megaphone / marketing
  'relaciones': 'https://assets9.lottiefiles.com/packages/lf20_6p8uj0tz.json', // handshake / people
  'contenidos': 'https://assets8.lottiefiles.com/packages/lf20_o1b12iog.json' // content writing
};
// But wait, the exact URLs above might be 404s since lf20_xxxxx change. Let's use a dynamic search or I can just mock it or generate realistic ones?
// Actually I can just write a quick script to hit the api or I can generate SVG based framer-motion animations that are incredibly prime.
