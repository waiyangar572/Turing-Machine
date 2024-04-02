import puppeteer from "puppeteer";

const getProblem = async (id: string) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://turingmachine.info");

    await page.click("#root > div > div.mainTab > div > a.blue.button.homeButton");

    await page.type("#root > div > div.mainTab.pageSearch > input.bigInput", id);
    await page.click("#root > div > div.mainTab.pageSearch > input.fullgreen");

    await browser.close();
};
