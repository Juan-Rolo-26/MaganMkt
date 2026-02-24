import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
  
  await page.goto('http://localhost:5173/servicios/estrategia-de-marketing', { waitUntil: 'networkidle0' });
  
  const content = await page.evaluate(() => {
    return {
      bodyHtml: document.body.innerHTML.substring(0, 500) + '...',
      servicePageExists: !!document.querySelector('.premium-service-page'),
      heroExists: !!document.querySelector('.pa-hero'),
      footerExists: !!document.querySelector('.site-footer')
    };
  });
  
  console.log('EVALUATION:', content);
  
  await browser.close();
})();
