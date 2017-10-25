"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const HomeController_1 = require("./controllers/HomeController");
const ErrorController_1 = require("./controllers/ErrorController");
const GetUsersController_1 = require("./controllers/GetUsersController");
const GetAnnouncesController_1 = require("./controllers/GetAnnouncesController");
const GetSubscriptionsController_1 = require("./controllers/GetSubscriptionsController");
const GetEventsController_1 = require("./controllers/GetEventsController");
let app = express();
app.get('/', HomeController_1.HomeController.create);
app.get('/users', GetUsersController_1.GetUsersController.create);
app.get('/announces', GetAnnouncesController_1.GetAnnouncesController.create);
app.get('/subscriptions', GetSubscriptionsController_1.GetSubscriptionsController.create);
app.get('/events', GetEventsController_1.GetEventsController.create);
app.use(ErrorController_1.ErrorController.create);
app.use('/assets', express.static('assets'));
app.listen(3000);
//# sourceMappingURL=server.js.map