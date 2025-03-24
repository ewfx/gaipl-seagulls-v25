import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth/sign-in');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'INC-010' }).click();
  await page.getByRole('button', { name: 'Approve', exact: true }).click();
  await page.getByRole('button', { name: 'Approve & Run' }).click();
  await page.getByRole('link', { name: 'logo' }).click();
  await page.getByRole('link', { name: 'Metrics' }).click();
  await page.getByRole('link', { name: 'Health' }).click();
  await page.getByText('Select an Application').click();
  await page.getByRole('option', { name: 'App1' }).click();
  await page.getByRole('link', { name: 'Portfolio View' }).click();
  await page.getByRole('link', { name: 'logo' }).click();
  await page.locator('.chat-window-toggle > svg').click();
  await page.getByRole('textbox', { name: 'Type your question..' }).click();
  await page.getByRole('textbox', { name: 'Type your question..' }).fill('Hello');
  await page.getByRole('main').filter({ hasText: 'Hi there! 👋Start a chat. We\'' }).getByRole('button').click();
  await page.locator('.chat-window-toggle > svg').click();
  await page.getByRole('textbox', { name: 'Search...' }).click();
  await page.getByRole('textbox', { name: 'Search...' }).fill('INC-010');
  await page.getByRole('textbox', { name: 'Search...' }).press('Enter');
});