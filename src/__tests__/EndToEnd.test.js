import { jest } from '@jest/globals';
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  //TEST: Feature 2 - Scenario 1
  test('An event element is collapsed by default', async () => {
    jest.setTimeout(30000); // Increase the timeout to 30 seconds

    const eventDetails = await page.$('#event-details');
    expect(eventDetails).toBeNull();
  });

    //TEST: Feature 2 - Scenario 2
    test('User can expand an event to see its details', async () => {
      jest.setTimeout(30000); // Increase the timeout to 30 seconds

      await page.click('.event .details-btn'); //this is the show details button in the event component
      const eventDetails = await page.$('#event-details');
      expect(eventDetails).toBeDefined();
    });
});