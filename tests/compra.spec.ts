import { test, expect } from '@playwright/test';

test('Flujo A - Compra completa', async ({ page }) => {
  await page.goto('/');

  await page.click('text=Sign In');
  await page.fill('#username', 'dgreene');
  await page.fill('#password', '123456');
  await page.click('.text-center > .btn');

  await page.click('h4:nth-child(1) > a'); // Fish
  await page.click('text=FI-SW-01');
  await page.click('text=Add to Cart');
  await page.click('text=Return to Main Menu');

  await page.click('h4:nth-child(3) > a'); // Dogs
  await page.click('text=K9-RT-01');
  await page.click('text=Add to Cart');

  await page.click('text=Proceed to Checkout');
  await page.fill('input[name="creditCard"]', '123456789');
  await page.click('.text-center > .btn-success');
  await page.click('.text-center > .btn-success');

  const mensaje = page.locator('.alert-info');
  await expect(mensaje).toContainText('Thank you, your order has been submitted.');
});
