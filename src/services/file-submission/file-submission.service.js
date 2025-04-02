// Initializes the `file-submission` service on path `/api/util/kubeops/submission/v2/uploadSubmissionFileBase64`
const { FileSubmission } = require('./file-submission.class');
const hooks = require('./file-submission.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/api/util/kubeops/submission/v2/uploadSubmissionFileBase64', new FileSubmission(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('/api/util/kubeops/submission/v2/uploadSubmissionFileBase64');

    service.hooks(hooks);
}; 