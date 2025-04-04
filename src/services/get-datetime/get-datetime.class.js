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

        const now = new Date();
        let formattedDate;

        // Format the date according to the requested format
        switch (data.format) {
            case 'YYYYMMDD':
                formattedDate = now.toISOString().slice(0, 10).replace(/-/g, '');
                break;
            case 'DD-MM-YYYY':
                formattedDate = now.toLocaleDateString('en-GB').replace(/\//g, '-');
                break;
            case 'MM/DD/YYYY':
                formattedDate = now.toLocaleDateString('en-US');
                break;
            case 'DD MMM YYYY':
                formattedDate = now.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                });
                break;
            case 'DD MMM YYYY HH:mm:ss':
                formattedDate = now.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).replace(',', '');
                break;
            default:
                formattedDate = now.toISOString(); // Default ISO format
        }

        return {
            "response": {
                "dateTime": formattedDate,
                "supportedFormats": [
                    "YYYYMMDD",          // Example: 20240314
                    "DD-MM-YYYY",        // Example: 14-03-2024
                    "MM/DD/YYYY",        // Example: 03/14/2024
                    "DD MMM YYYY",       // Example: 14 Mar 2024
                    "DD MMM YYYY HH:mm:ss", // Example: 14 Mar 2024 11:00:22
                    "ISO"                // Example: 2024-03-14T11:00:22.000Z
                ]
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