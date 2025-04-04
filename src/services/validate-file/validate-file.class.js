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

        // Extract base64FileData from request
        const { base64FileData } = data;

        // Check if base64FileData is empty
        const isEmpty = !base64FileData || base64FileData.trim() === '';

        // Return response based on whether file data is empty
        return {
            "response": {
                "validateIsFileEmptyResponse": isEmpty ? "True" : "False"
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