import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // Configure your E2E tests here
    baseUrl: 'https://magento.softwaretestingboard.com',
    specPattern: "cypress/e2e/**/*.cy.ts",
    viewportHeight: 768,
    viewportWidth: 1280,
    retries: {
      runMode: 2,
      openMode: 0
    },
  },
  projectId: "8zypge"
})