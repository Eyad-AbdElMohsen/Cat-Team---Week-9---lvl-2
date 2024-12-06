import dotenv from "dotenv";
import express , {Express} from "express" 
import errorMiddleware from "./middlewares/error.middleware";
import notFoundMiddleware from "./middlewares/notFound.middleware";
import * as file from "./file";
import router from "./filet3";


dotenv.config()

const port = process.env.port || 8000

const app : Express = express();

app.use(express.json())

//file.func()
//file2.calcTimeOfRequestInSec('https://docs.google.com/forms/d/e/1FAIpQLSe8zLC2OETXnjB6qrwK9MmQpJkPl1oiQEk7PNGvjwalv3Oj_g/formResponse')
app.use(router)

// glopal middleware
app.all('*', notFoundMiddleware)


//err handler
app.use(errorMiddleware)

app.listen(port , () => {
    console.log("running on port: " + port);
})