/* eslint-disable no-unused-vars */
const logger = require('../../logger');

exports.UserPODept = class UserPODept {
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
     * This will return information about user departments
     */
    async create(data, params) {
        // Log the request for debugging
        logger.info('User PO Dept request received');

        // Return the fixed response as shown in the example
        return {
            "response": {
                "data": {
                    "userPODeptResponse": {
                        "UserDeptMaster": [
                            {
                                "poDept": "AD",
                                "deptName": "Damansara Admin",
                                "deptType": "Administration"
                            }
                        ]
                    }
                }
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