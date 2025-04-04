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

        // Extract vendor name and PO number from request data
        const { vendorName, PONo } = data;

        // Concatenate the strings with hyphen and .pdf extension
        const concatString = `${vendorName}-${PONo}.pdf`;

        // Return the concatenated response
        return {
            "response": {
                "concatResponse": concatString
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