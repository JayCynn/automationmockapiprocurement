// Initializes the `concat-strings` service on path `/procu-utils/concat-strings`
const { ConcatStrings } = require('./concat-strings.class');
const hooks = require('./concat-strings.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/procu-utils/concat-strings', new ConcatStrings(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('/procu-utils/concat-strings');

    service.hooks(hooks);
}; 