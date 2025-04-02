// Initializes the `order-creation` service on path `/dms/OrderCreation/MY/:company`
const { OrderCreation } = require('./order-creation.class');
const hooks = require('./order-creation.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    // Use a custom path that matches the requirement in the image
    app.use('/dms/OrderCreation/MY/:company', new OrderCreation(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('/dms/OrderCreation/MY/:company');

    service.hooks(hooks);
}; 