import * as express from "express";
import * as bodyParser from 'body-parser';

import {HomeController} from "./controllers/HomeController";
import {ErrorController} from "./controllers/ErrorController";


import {AddAnnounceController} from "./controllers/announces/AddAnnounceController";
import {GetAnnouncesController} from "./controllers/announces/GetAnnouncesController";
import {RemoveAnnounceController} from "./controllers/announces/RemoveAnnounceController";
import {UpdateAnnouncesController} from "./controllers/announces/UpdateAnnouncesController";

import {GetSubscriptionsController} from "./controllers/subscriptions/GetSubscriptionsController";
import {AddSubscriptionController} from "./controllers/subscriptions/AddSubscriptionController";
import {RemoveSubscriptionController} from "./controllers/subscriptions/RemoveSubscriptionController";
import {UpdateSubscriptionsController} from "./controllers/subscriptions/UpdateSubscriptionsController";

import {AddUserController} from "./controllers/users/AddUserController";
import {GetUsersController} from "./controllers/users/GetUsersController";
import {RemoveUserController} from "./controllers/users/RemoveUserController";
import {UpdateUsersController} from "./controllers/users/UpdateUsersController";

import {GetEventsController} from "./controllers/events/GetEventsController"
import {AddEventController} from "./controllers/events/AddEventController";
import {RemoveEventController} from "./controllers/events/RemoveEventController";
import {UpdateEventsController} from "./controllers/events/UpdateEventsController";


let app = express();


// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); 



app.get     ('/'                    , HomeController.create                 ); // ping server


app.post    ('/announces'           , AddAnnounceController.create          ); // add one 
app.get     ('/announces'           , GetAnnouncesController.create         ); // get all or one
app.get     ('/announces/:id'       , GetAnnouncesController.create         ); // get all or one
app.put     ("/announces/:id"       , UpdateAnnouncesController.create      ); // update one
app.delete  ('/announces/:id'       , RemoveAnnounceController.create       ); // remove one

app.post    ('/users'               , AddUserController.create              ); // add one 
app.get     ('/users'               , GetUsersController.create             ); // get all or one
app.get     ('/users/:id'           , GetUsersController.create             ); // get all or one
app.put     ("/users/:id"           , UpdateUsersController.create          ); // update one
app.delete  ('/users/:id'           , RemoveUserController.create           ); // remove one

app.post    ('/events'              , AddEventController.create             ); // add one 
app.get     ('/events'              , GetEventsController.create            ); // get all or one
app.get     ('/events/:id'          , GetEventsController.create            ); // get all or one
app.put     ("/events/:id"          , UpdateEventsController.create         ); // update one
app.delete  ('/events/:id'          , RemoveEventController.create          ); // remove one


app.post    ('/subscriptions'       , AddSubscriptionController.create      ); // add one 
app.get     ('/subscriptions'       , GetSubscriptionsController.create     ); // get all or one
app.get     ('/subscriptions/:id'   , GetSubscriptionsController.create     ); // get all or one
app.put     ("/subscriptions/:id"   , UpdateSubscriptionsController.create  ); // update one
app.delete  ('/subscriptions/:id'   , RemoveSubscriptionController.create   ); // remove one



app.use('/assets', express.static('assets'));

app.use(ErrorController.create);
app.listen(3000);