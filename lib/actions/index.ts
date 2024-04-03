"use server";

import { scrapeAmazonProduct } from "../scraperAmazon";
import { scrapeFlipkartProduct } from "../scraperFlipkart";

export async function scrapeAndStoreProduct(productUrl: string) {
    if (!productUrl) return;

    function isFlipkartUrl(url: string): boolean {
        // Check if the URL contains common patterns for Flipkart
        return /flipkart\.com/.test(url);
    }

    function isAmazonUrl(url: string): boolean {
        // Check if the URL contains common patterns for Amazon
        return /amazon\.in|amazon\.com/.test(url);
    }

    function identifyEcommercePlatform(url: string): string {
        if (isFlipkartUrl(url)) {
            return 'Flipkart';
        } else if (isAmazonUrl(url)) {
            return 'Amazon';
        } else {
            return 'Unknown';
        }
    }

    const identifiedPlatform = identifyEcommercePlatform(productUrl);

    console.log(`The URL is from: ${identifiedPlatform}`);

    try {
        if (identifiedPlatform === 'Flipkart') {
            const scrapedFlipkartProduct = await scrapeFlipkartProduct(productUrl);
            // process scrapedFlipkartProduct as needed
        } else if (identifiedPlatform === 'Amazon') {
            const scrapedAmazonProduct = await scrapeAmazonProduct(productUrl);
            // process scrapedAmazonProduct as needed
        } else {
            // Handle the case where the platform is unknown
            console.log("Unable to determine the e-commerce platform.");
        }
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`);
    }
}
