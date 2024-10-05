import { defineConfig } from 'cypress';

require('dotenv').config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...config.env,
        ...process.env
      };
      return config;
    },
    defaultCommandTimeout: 10000,
    baseUrl: 'http://localhost:4000/'
  }
});
