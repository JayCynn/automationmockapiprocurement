// Initializes the `validate-file` service on path `/procu-utils/validate-file-content`
const { ValidateFile } = require('./validate-file.class');
const hooks = require('./validate-file.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/procu-utils/validate-file-content', new ValidateFile(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('/procu-utils/validate-file-content');

    service.hooks(hooks);
}; 