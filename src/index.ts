import express, {Request, Response} from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();

//Adds body property
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieSession({ keys: ['asdlkasmdlkm']}));
app.use(router);
app.listen(3000, () => {
    console.log('listening port 3000')
});