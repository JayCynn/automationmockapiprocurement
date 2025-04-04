// Initializes the `user-po-dept` service on path `/dms/UserPODept/MY`
const { UserPODept } = require('./user-po-dept.class');
const hooks = require('./user-po-dept.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/dms/UserPODept/MY', new UserPODept(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('/gdms/UserPODept/MY');

    service.hooks(hooks);
}; 