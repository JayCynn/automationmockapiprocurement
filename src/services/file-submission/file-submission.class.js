/* eslint-disable no-unused-vars */
const logger = require('../../logger');

exports.FileSubmission = class FileSubmission {
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
     * This will handle file submission with base64 encoding
     */
    async create(data, params) {
        // Log the request for debugging
        logger.info('File submission request received', { data });

        // Return the fixed response as shown in the example
        return {
            "response": {
                "statusId": "",
                "responseData": "True",
                "success": "True"
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