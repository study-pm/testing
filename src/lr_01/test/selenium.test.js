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

        await driver.findElement(By.name('a')).sendKeys('5');
        await driver.findElement(By.name('b')).sendKeys('5');
        await driver.findElement(By.name('c')).sendKeys('5');
        await driver.findElement(By.css('input[type=submit]')).click();

        await driver.wait(async () => {
            const resultElement = await driver.findElement(By.name('result'));
            const resultText = await resultElement.getText();
            return resultText.includes('равносторонний');
        }, 5000);

        const result = await driver.findElement(By.name('result')).getText();
        expect(result).toBe('Треугольник равносторонний.');
    });

    it('should identify an isosceles triangle', async () => {
        await driver.get(targetUrl);

        await driver.findElement(By.name('a')).sendKeys('4');
        await driver.findElement(By.name('b')).sendKeys('4');
        await driver.findElement(By.name('c')).sendKeys('6');
        await driver.findElement(By.css('input[type=submit]')).click();

        await driver.wait(async () => {
            const resultElement = await driver.findElement(By.name('result'));
            const resultText = await resultElement.getText();
            return resultText.includes('равнобедренный');
        }, 5000);

        const result = await driver.findElement(By.name('result')).getText();
        expect(result).toBe('Треугольник равнобедренный.');
    });

});
