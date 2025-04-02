/* eslint-disable no-unused-vars */
exports.Users = class Users {
    constructor(options, app) {
        this.options = options || {};
        this.app = app;
        this.users = [];
    }

    async find(params) {
        return this.users;
    }

    async get(id, params) {
        const user = this.users.find(user => user.id === parseInt(id, 10));

        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }

        return user;
    }

    async create(data, params) {
        const user = {
            id: this.users.length + 1,
            ...data
        };

        this.users.push(user);

        return user;
    }

    async update(id, data, params) {
        const index = this.users.findIndex(user => user.id === parseInt(id, 10));

        if (index === -1) {
            throw new Error(`User with id ${id} not found`);
        }

        const user = {
            id: parseInt(id, 10),
            ...data
        };

        this.users[index] = user;

        return user;
    }

    async patch(id, data, params) {
        const index = this.users.findIndex(user => user.id === parseInt(id, 10));

        if (index === -1) {
            throw new Error(`User with id ${id} not found`);
        }

        const user = {
            ...this.users[index],
            ...data
        };

        this.users[index] = user;

        return user;
    }

    async remove(id, params) {
        const index = this.users.findIndex(user => user.id === parseInt(id, 10));

        if (index === -1) {
            throw new Error(`User with id ${id} not found`);
        }

        const user = this.users[index];

        this.users.splice(index, 1);

        return user;
    }
}; 