// Initializes the `get-datetime` service on path `/procu-utils/getDateTime`
const { GetDateTime } = require('./get-datetime.class');
const hooks = require('./get-datetime.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/procu-utils/getDateTime', new GetDateTime(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('/procu-utils/getDateTime');

    service.hooks(hooks);
}; 