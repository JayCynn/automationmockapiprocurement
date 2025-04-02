const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const orderRoutes = require('./routes/order.routes').default;
const fileRoutes = require('./routes/file.routes').default;
const userDeptRoutes = require('./routes/user-dept.routes').default;

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json({ limit: '50mb' })); // Increased limit for base64 file uploads

// Routes
app.use('/', orderRoutes);
app.use('/', fileRoutes);
app.use('/', userDeptRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        response: {
            result: 'Error',
            opResp: 'Internal server error',
            opRespCode: '500',
            opIsSuccess: 'False'
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 