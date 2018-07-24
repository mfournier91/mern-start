import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.get('/', (req, res) => {
    res.json({ message: 'Jello, World!' });
});

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Navi listens on ${API_PORT}`));