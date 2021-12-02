'use strict';

/**
 * habit-log service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::habit-log.habit-log');
