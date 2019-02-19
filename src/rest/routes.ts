import {Application, RequestHandler} from "express";
// @ts-ignore
import {Serializer} from "@nucashadmin/auth-lib-nodejs";
import {list, starwars, test} from "./controller";

export class RestRouter {
    constructor(app: Application) {
        app.route("/api/test")
            .get(test);
        app.route("/api/list")
            .get(list);
        app.route("/api/sw")
            .get(starwars);
    }
}