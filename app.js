const express = require('express');
const path = require('path');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const compression = require('compression');
const AppError = require('./api/utils/appError');
const playerRouter = require('./api/routes/playerRoutes');
const teamRouter = require('./api/routes/teamRoutes');
const globalErrorHandler = require('./api/controllers/errorController');

const app = express();

// if the host provider proxify our requests
// needed to get access to some header which are set by provider
//app.enable('trust proxy');

// 1) Global request middleware

//Implement CORS
if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}else {
    // In order to allow cors for specific domain
//ex: api.fc-singury.com, front - fc-singury.com
    app.use(cors({origin: 'http://fc-singury.com.ua'}));
}

//we need to allow options method for cors
// because when complex requests (PATCH, DELETE) are sent there is preflight phase
//where options request is sent first
app.options('*', cors());

// Set security HTTP headers
//app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Limit request from the same IP
const limiter = rateLimit({
    max: 300,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again on 1 hour'
});

app.use('/api', limiter);

//Body parser, reading data from the body into req.body with 10kb limit
app.use(express.json({
    limit: '10kb'
}));

// Data sanitazation against NOSQL query injection
app.use(mongoSanitize()); // filter out all $ and :

// Data sanitazation against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp({
    whitelist: [
        // query params to whitelist
    ]
}));

//Serving the static files
app.use(express.static('dist'));

//Compression of text data
if (process.env.NODE_ENV === 'development') {
    app.use(compression());
}

//Test middleware with timestamp
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) ROUTES
app.use('/api/v1/players', playerRouter);
app.use('/api/v1/teams', teamRouter);

// will redirect all the requests to our frontend application,
// unless we specify any route before this code.
// send the user to index html page inspite of the url
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// handle unhandled routers for GET method
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', '404.html'));
});

// handle unhandled routers ALL THE REST methods
app.all('*', (req, res, next) => {
    next(new AppError(`Can not find ${req.originalUrl} on the server!`, 404))
});

app.use(globalErrorHandler);

// 4) START SERVER
module.exports = app;
