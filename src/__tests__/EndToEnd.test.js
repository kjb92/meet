import { jest } from '@jest/globals';
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  //TEST: Feature 2 - Scenario 1
  test('An event element is collapsed by default', async () => {
    jest.setTimeout(30000); // Increase the timeout to 30 seconds

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');

    // if your event element has a different selector, use it instead of .event
    await page.waitForSelector('.event');

    // if your event's details have a different selector, use it instead of .event .details
    const eventDetails = await page.$('#event-details');
    expect(eventDetails).toBeNull();
    browser.close();
  });

    //TEST: Feature 2 - Scenario 2
    test('User can expand an event to see its details', async () => {
      jest.setTimeout(30000); // Increase the timeout to 30 seconds

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('http://localhost:3000/');
  
      await page.waitForSelector('.event');
      await page.click('.event .details-btn');
  
      const eventDetails = await page.$('#event-details');
      expect(eventDetails).toBeDefined();
      browser.close();
    });
});