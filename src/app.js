import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import errorHandler from './config/errorHandler';
import services from './services';

const app = express();

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
}));

app.use(errorHandler);

app.use(services);

app.use('', (req, res) => {
    res.send('Not Found!');
});

export default app;