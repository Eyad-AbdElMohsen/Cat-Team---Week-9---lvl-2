"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const notFound_middleware_1 = __importDefault(require("./middlewares/notFound.middleware"));
const filet3_1 = __importDefault(require("./filet3"));
const file4_1 = require("./file4");
dotenv_1.default.config();
const port = process.env.port || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(file4_1.requestLogger);
//file.func()
//file2.calcTimeOfRequestInSec('https://docs.google.com/forms/d/e/1FAIpQLSe8zLC2OETXnjB6qrwK9MmQpJkPl1oiQEk7PNGvjwalv3Oj_g/formResponse')
app.use(filet3_1.default);
// glopal middleware
app.all('*', notFound_middleware_1.default);
//err handler
app.use(error_middleware_1.default);
app.listen(port, () => {
    console.log("running on port: " + port);
});
