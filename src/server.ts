import * as express from "express";
import * as bodyParser from 'body-parser';
import * as session from 'express-session';

import {Facade} from "./Facade";
import {IdParamGuard} from "./guards/IdParamGuard";
import {AuthGuard} from "./guards/AuthGuard";
import {CRSFGuard} from "./guards/CRSFGuard";

import {HomeController} from "./controllers/HomeController";
import {ErrorController} from "./controllers/ErrorController";
import {AuthController} from "./controllers/AuthController";
import {AnnounceController} from "./controllers/AnnounceController";
import {EventController} from "./controllers/EventController";
import {SubscriptionController} from "./controllers/SubscriptionController";
import {UserController} from "./controllers/UserController";


let app = express();

// for sessions
app.use(session({secret:"ff17b250a5175022a37ab034cb7b54d7"}));
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); 

Facade.getInstance().register(  "announces", 
                                AnnounceController.create, 
                                [new AuthGuard()],                                      // get 
                                [new AuthGuard(), new CRSFGuard()],                     // post
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()], // put
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()]  // delete
);

Facade.getInstance().register(  "events", 
                                EventController.create, 
                                [new AuthGuard()],                                      // get 
                                [new AuthGuard(), new CRSFGuard()],                     // post
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()], // put
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()]  // delete
);

Facade.getInstance().register(  "subs", 
                                SubscriptionController.create, 
                                [new AuthGuard()],                                      // get 
                                [new AuthGuard(), new CRSFGuard()],                     // post
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()], // put
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()]  // delete
);

Facade.getInstance().register(  "users", 
                                UserController.create, 
                                [new AuthGuard()],                                      // get 
                                [new AuthGuard(), new CRSFGuard()],                     // post
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()], // put
                                [new AuthGuard(), new CRSFGuard(), new IdParamGuard()]  // delete
);

Facade.getInstance().register( "auth", AuthController.create, [], [], [], [] );


app.get     ('/'                    , HomeController.create                       ); // ping server
app.post    ('/auth'                , Facade.getInstance().create("auth")         ); // do auth


app.post    ('/announces'           , Facade.getInstance().create("announces")   ); // add one 
app.get     ('/announces'           , Facade.getInstance().create("announces")   ); // get all or one
app.get     ('/announces/:id'       , Facade.getInstance().create("announces")   ); // get all or one
app.put     ("/announces/:id"       , Facade.getInstance().create("announces")   ); // update one
app.delete  ('/announces/:id'       , Facade.getInstance().create("announces")   ); // remove one



app.post    ('/users'               , Facade.getInstance().create("users")      ); // add one 
app.get     ('/users'               , Facade.getInstance().create("users")      ); // get all or one
app.get     ('/users/:id'           , Facade.getInstance().create("users")      ); // get all or one
app.put     ("/users/:id"           , Facade.getInstance().create("users")      ); // update one
app.delete  ('/users/:id'           , Facade.getInstance().create("users")      ); // remove one

app.post    ('/events'              , Facade.getInstance().create("events")     ); // add one 
app.get     ('/events'              , Facade.getInstance().create("events")     ); // get all or one
app.get     ('/events/:id'          , Facade.getInstance().create("events")     ); // get all or one
app.put     ("/events/:id"          , Facade.getInstance().create("events")     ); // update one
app.delete  ('/events/:id'          , Facade.getInstance().create("events")     ); // remove one


app.post    ('/subscriptions'       , Facade.getInstance().create("subs")       ); // add one 
app.get     ('/subscriptions'       , Facade.getInstance().create("subs")       ); // get all or one
app.get     ('/subscriptions/:id'   , Facade.getInstance().create("subs")       ); // get all or one
app.put     ("/subscriptions/:id"   , Facade.getInstance().create("subs")       ); // update one
app.delete  ('/subscriptions/:id'   , Facade.getInstance().create("subs")       ); // remove one




app.use('/assets', express.static('assets'));

app.use(ErrorController.create);
app.listen(3000);