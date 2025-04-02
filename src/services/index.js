// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    // Register your services here
    app.configure(require('./users/users.service.js'));
    app.configure(require('./order-creation/order-creation.service.js'));
    app.configure(require('./file-submission/file-submission.service.js'));
    app.configure(require('./validate-file/validate-file.service.js'));
    app.configure(require('./concat-strings/concat-strings.service.js'));
    app.configure(require('./get-datetime/get-datetime.service.js'));
    app.configure(require('./user-po-dept/user-po-dept.service.js'));
}; 