import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com',
    viewportHeight: 768,
    viewportWidth: 1280,
    retries: {
      runMode: 2,
      openMode: 0
    },
  },
  projectId: "8zypge"
})