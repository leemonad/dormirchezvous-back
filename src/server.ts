import * as express from "express";
import {HomeController} from "./controllers/HomeController";
import {ErrorController} from "./controllers/ErrorController";
import {GetUsersController} from "./controllers/GetUsersController";
import {GetAnnouncesController} from "./controllers/GetAnnouncesController";
import {GetSubscriptionsController} from "./controllers/GetSubscriptionsController";
import {GetEventsController} from "./controllers/GetEventsController";


let app = express();

app.get('/', HomeController.create);
app.get('/users', GetUsersController.create);
app.get('/announces', GetAnnouncesController.create);
app.get('/subscriptions', GetSubscriptionsController.create);
app.get('/events', GetEventsController.create);
app.use(ErrorController.create);


app.use('/assets', express.static('assets'));
app.listen(3000);