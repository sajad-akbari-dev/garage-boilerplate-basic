import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/auth/signin');

  // Fill in login form
  // Using labels to locate the input fields
  // Tests must reflect what the user sees, so we use the labels themselves instead of ids
  await page.getByLabel(/email/i).fill(process.env.E2E_USER_EMAIL || '');
  await page.getByLabel(/password/i).fill(process.env.E2E_USER_PASSWORD || '');
  await page.click('button[type="submit"]');

  // Keep in mind that the site automatically redirects to team page after login. If this changes in the future, we may need to update this test to reflect the new flow.
  await page.waitForURL('**/team');
  await page.goto('/dashboard');
  await page.waitForURL('**/dashboard');
  await page.goto('/team');
  await page.waitForURL('**/team');

  await page.context().storageState({ path: authFile });
});