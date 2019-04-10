const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://ranking.rakuten.co.jp');
    await page.screenshot({path: 'test.png'});
    await browser.close();
})();