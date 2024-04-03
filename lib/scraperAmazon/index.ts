import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";
import { extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  // brightdata proxy configuration
  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  };

  try {
    // Launch headless browser
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Go to the Amazon product page
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Retrieve the current URL
    const currentURL = page.url();

    // Close the browser since we only needed the URL
    await browser.close();

    // Make the request using Axios
    const response = await axios.get(url, options);

    const $ = cheerio.load(response.data);

    // Extract the product title
    const title = $('#productTitle').text().trim();
    const currentPrice = extractPrice(
      $('.priceToPay span.a-price-whole'),
      $('a.size.base.a-color-price'),
      $('.a-button-selected .a-color-base')
    );

    console.log({ title, currentPrice, currentURL });
  } catch (error: any) {
    throw new Error(`Failed to scrape product from Amazon: ${error.message}`);
  }
}
