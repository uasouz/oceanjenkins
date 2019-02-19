import {App} from "./app";
import {RestRouter} from './rest/routes';
import * as dotenv from "dotenv";


dotenv.config({path: require.resolve("./.env")});

const Service = new App();

const restRouter = new RestRouter(Service.expressApp);
//start our server
Service.server.listen(process.env.PORT || 8999, () => {
    // @ts-ignore
    console.log(`Welcome back,Commander. I am a service running at port ${Abaddon.server.address().port}`);
});