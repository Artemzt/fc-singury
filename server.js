const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({
    path: './config.env'
});

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected");
}).catch((e) => {
    console.log("DB connection error " + e)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on ${port}`);
});


// // the __dirname is the current directory from where the script is running
// app.use(express.static('dist'));
//
// // send the user to index html page inspite of the url
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
// });
//
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'dist', '404.html'));
// });

