import * as express from "express";
import {Server} from "typescript-rest";
import {UserController} from "./controller/UserController";
import {CalculationController} from "./controller/CalculationController";
import {TransactionItemController} from "./controller/TransactionItemController";

const app: express.Application = express();
Server.buildServices(app, UserController, CalculationController, TransactionItemController);
Server.swagger(app, { endpoint: "swagger", filePath: './dist/swagger.json' });

app.listen(3000, () => {console.log("Server listening on port 3000")});