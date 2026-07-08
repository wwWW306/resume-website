const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  // 1. Desktop hero
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("https://wwWW306.github.io/beihai-campus-wall-portal/", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({ path: "public/campus-wall-hero.png" });
  console.log("1/3 hero done");

  // 2. Desktop feed
  await page.evaluate(() => window.scrollTo(0, 700));
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: "public/campus-wall-feed.png" });
  console.log("2/3 feed done");

  // 3. Mobile full page
  await page.setViewport({ width: 375, height: 812 });
  await page.goto("https://wwWW306.github.io/beihai-campus-wall-portal/", {
    waitUntil: "networkidle2",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 2000));
  await page.screenshot({ path: "public/campus-wall-mobile.png", fullPage: true });
  console.log("3/3 mobile done");

  await browser.close();
  console.log("Done — 3 screenshots saved to public/");
})();
