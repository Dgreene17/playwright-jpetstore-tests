import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://jpetstore.aspectran.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html', { open: 'never' }]],
});
