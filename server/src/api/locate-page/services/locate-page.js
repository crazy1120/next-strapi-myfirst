'use strict';

/**
 * locate-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::locate-page.locate-page');
