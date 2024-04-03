// Existing code file (e.g., actions.ts)

import { scrapeProductData } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const site = identifySite(productUrl); // Identify the site based on the URL
    if (site === 'unknown') {
      throw new Error('Unknown site. Cannot scrape the product.');
    }

    const scrapedProduct = await scrapeProductData(productUrl, site);
    return scrapedProduct;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}

function identifySite(url: string): string {
  if (url.includes('amazon')) {
    return 'amazon';
  } else if (url.includes('flipkart')) {
    return 'flipkart';
  }
  return 'unknown';
}
