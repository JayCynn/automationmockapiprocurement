/* eslint-disable no-unused-vars */
const logger = require('../../logger');

exports.OrderCreation = class OrderCreation {
    constructor(options, app) {
        this.options = options || {};
        this.app = app;
    }

    // We're not implementing 'find' as it's not needed
    async find(params) {
        return [];
    }

    // We're not implementing 'get' as it's not needed
    async get(id, params) {
        return {
            id, text: `A new message with ID: ${id}!`
        };
    }

    /**
     * Create method to handle the POST request
     * This method will be called when a POST request is made to /dms/OrderCreation/MY/:company
     */
    async create(data, params) {
        // Log the request for debugging
        logger.info('Order creation request received', {
            company: params.route.company || 'unknown',
            data
        });

        // Even if we receive different order creation data, we'll return the fixed response
        // This is according to the requirement to return a fixed response as shown

        return {
            response: {
                orderCreationResponse: {
                    pONumber: "415562",
                    pONoStatus: "Raised",
                    pOPdf: "Kota Stationers-415562.pdf"
                }
            }
        };
    }

    // The following methods are not needed for this API but included for completeness
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