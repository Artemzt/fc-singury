const AppError = require('./../utils/appError');

const sendErrorDev = (error, res) => {
    res.status(error.statusCode).json({
        status: error.status,
        error: error,
        message: error.message,
        stack: error.stack
    });
};

const sendErrorProd = (error, res) => {
    //Operational, trusted error: send message to the client
    if (error.isOperational) {
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message
        });

        //Programming or other unknown error: dont leak error details
    } else {
        // 1) Log the error
        console.error('ERROR \u{1F9B0}', error);
        res.status(500).json({
            status: error,
            message: 'Something went wrong!'
        });
    }
};

const handleCastErrorDB = error => {
    const message = `Invalid ${error.path}: ${error.value}`;
    return new AppError(message, 400);
};

const handleduplicateFieldsDB = error => {
    const value = error.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please use another one!`
    return new AppError(message, 400);
};

const handleValidationErrorDB = error => {
    const validationErrors = Object.values(error.errors).map(el => el.error);

    const message = `Invalid input data. ${validationErrors.join('. ')}`;
    return new AppError(message, 400);
};

const handleJWTError = () => {
    return new AppError('Please authorize to access this resource', 401);
};

module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(error, res);
    } else if (process.env.NODE_ENV === 'production') {
        let ourError = {
            ...error
        };
        if (ourError.name === 'CastError') {
            ourError = handleCastErrorDB(ourError);
        }
        if (ourError.code === 11000) {
            ourError = handleduplicateFieldsDB(ourError);
        }
        if (error.name === 'ValidationError') {
            ourError = handleValidationErrorDB(ourError);
        }
        if (error.name === 'JsonWebTokenError') {
            ourError = handleJWTError(ourError);
        }
        sendErrorProd(ourError, res);
    }
};