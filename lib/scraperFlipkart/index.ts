import puppeteer from "puppeteer";

export async function scrapeFlipkartProduct(url: string) {
    if (!url) return;

    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        // Go to the Flipkart product page
        await page.goto(url, { waitUntil: "domcontentloaded" });

        // Wait for some time to ensure page content is loaded (you can adjust the wait time)
        await page.waitForTimeout(3000);

        // Extract the product title
        const titleSelector = 'span.B_NuCI';
        const titleElement = await page.$(titleSelector);
        const title = titleElement ? await titleElement.evaluate((el) => el.textContent?.trim()) : 'Title not found';

        // Extract the current price
        const currentPriceSelector = '._30jeq3._16Jk6d';
        const currentPriceElement = await page.$(currentPriceSelector);
        const currentPrice = currentPriceElement ? await currentPriceElement.evaluate((el) => el.textContent?.trim()) : 'Price not found';

        const currentFlipkartURL = page.url();

        console.log({ title, currentPrice , currentFlipkartURL });

        await browser.close();
    } catch (error: any) {
        console.error(`Failed to scrape product from Flipkart: ${error.message}`);
        throw new Error(`Failed to scrape product from Flipkart: ${error.message}`);
    }
}
