'use strict';

/**
 *  habit controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::habit.habit');
