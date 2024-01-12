import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice } from "../utils";

export async function scrapeProductData(url: string, site: string) {
  if (!url || !site) return;

  // Bright Data proxy configuration
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
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    let title = '';
    let currentPrice = '';
    let originalPrice = '';

    if (site === 'amazon') {
      title = $('#productTitle').text().trim();
      currentPrice = $('.priceToPay span.a-price-whole').text().trim();
      originalPrice = $('#priceblock_ourprice').text().trim();
    } else if (site === 'flipkart') {
      title = $('._35KyD6').text().trim();
      currentPrice = $('._16Jk6d').text().trim();
      originalPrice = $('._3_ISdg').text().trim();
    } else {
      throw new Error('Invalid site specified for scraping.');
    }

    return {
      title,
      currentPrice,
      originalPrice,
    };
  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
