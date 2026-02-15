const { defineConfig } = require("cypress");
const createBlunder = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(
  on,
  config
) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createEsbuildPlugin(config)
  );

  return config;
} 

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    specPattern: "cypress/e2e/features/**/*.feature",
    setupNodeEvents,
  }
});
