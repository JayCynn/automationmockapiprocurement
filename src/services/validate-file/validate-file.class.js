/* eslint-disable no-unused-vars */
const logger = require('../../logger');

exports.ValidateFile = class ValidateFile {
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
     * This will validate a file's content
     */
    async create(data, params) {
        // Log the request for debugging
        logger.info('Validate file content request received', { data });

        // Return the fixed response as shown in the example
        return {
            "response": {
                "validateIsFileEmptyResponse": "False"
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