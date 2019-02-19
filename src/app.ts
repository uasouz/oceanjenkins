import {ExpressApp} from "./expressApp";
import * as http from 'http'

export class App {
    public expressApp = new ExpressApp().express;
    public server = http.createServer(this.expressApp);
}