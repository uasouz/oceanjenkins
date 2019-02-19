import bodyParser = require("body-parser");
import * as express from 'express'

export class ExpressApp {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(bodyParser.json());

        this.express.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
            next();
        });
    }

}