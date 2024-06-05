const allureWriter = require('@shelex/cypress-allure-plugin/writer');

require('dotenv').config();

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    allureWriter(on, config);
    return config;
};
