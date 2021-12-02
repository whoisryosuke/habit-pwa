'use strict';

/**
 * habit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::habit.habit');
