// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    // Add your custom middleware here. Remember that
    // in Express, the order matters.

    // Custom middleware for the order-creation service
    app.use('/dms/OrderCreation/MY/:company', (req, res, next) => {
        // Save the company parameter to request object for use in the service
        req.feathers.company = req.params.company;
        next();
    });
}; 