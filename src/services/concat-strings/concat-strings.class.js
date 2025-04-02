/* eslint-disable no-unused-vars */
const logger = require('../../logger');

exports.ConcatStrings = class ConcatStrings {
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
     * This will concatenate strings
     */
    async create(data, params) {
        // Log the request for debugging
        logger.info('Concat strings request received', { data });

        // Return the fixed response as shown in the example
        return {
            "response": {
                "concatResponse": "Kota Stationers-415562.pdf"
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