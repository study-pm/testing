import { Builder, By, until } from 'selenium-webdriver';
import conf from '../config.json' with { type: 'json' };
import pkg from '../package.json' with { type: 'json' };

const targetUrl = `http://${pkg.config.host}:${pkg.config.port}/`

describe('Triangle Type Checker Form', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    it('should identify an equilateral triangle', async () => {
        await driver.get(targetUrl);

        await driver.findElement(By.name('side1')).sendKeys('5');
        await driver.findElement(By.name('side2')).sendKeys('5');
        await driver.findElement(By.name('side3')).sendKeys('5');
        await driver.findElement(By.css('button[type=submit]')).click();

        const result = await driver.wait(until.elementLocated(By.name('result')), 5000).getText();
        expect(result).toBe('The triangle is equilateral.');
    });

    it('should identify an isosceles triangle', async () => {
        await driver.get(targetUrl);

        await driver.findElement(By.name('side1')).sendKeys('4');
        await driver.findElement(By.name('side2')).sendKeys('4');
        await driver.findElement(By.name('side3')).sendKeys('6');
        await driver.findElement(By.css('button[type=submit]')).click();

        const result = await driver.wait(until.elementLocated(By.name('result')), 5000).getText();
        expect(result).toBe('The triangle is isosceles.');
    });

});
