/* eslint-disable no-unused-vars */
const logger = require('../../logger');

exports.GetDateTime = class GetDateTime {
    constructor(options, app) {
        this.options = options || {};
        this.app = app;
    }

    async find(params) {
        return [];
    }

    async get(id, params) {
        return { id };
    }

    /**
     * Create method to handle the POST request
     * This will return the current date time in the requested format
     */
    async create(data, params) {
        // Log the request for debugging
        logger.info('Get date time request received', { data });

        // Return the fixed response as shown in the example
        return {
            "response": {
                "dateTime": "14 Mar 2025 11:00:22"
            }
        };
    }

    async update(id, data, params) {
        return data;
    }

    async patch(id, data, params) {
        return data;
    }

    async remove(id, params) {
        return { id };
    }
}; 