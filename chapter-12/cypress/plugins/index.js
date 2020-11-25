const percyHealthCheck = require('@percy/cypress/task')

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on("task", percyHealthCheck);
}


require('@applitools/eyes-cypress')(module);
