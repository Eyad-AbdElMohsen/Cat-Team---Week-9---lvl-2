import dotenv from "dotenv";
import express , {Express} from "express" 
import errorMiddleware from "./middlewares/error.middleware";
import notFoundMiddleware from "./middlewares/notFound.middleware";
import func from "./file";
import calcTimeOfRequestInSec from "./file2";


dotenv.config()

const port = process.env.port || 8000

const app : Express = express();

app.use(express.json())

//func()
calcTimeOfRequestInSec('https://docs.google.com/forms/d/e/1FAIpQLSe8zLC2OETXnjB6qrwK9MmQpJkPl1oiQEk7PNGvjwalv3Oj_g/formResponse')

// glopal middleware
app.all('*', notFoundMiddleware)


//err handler
app.use(errorMiddleware)

app.listen(port , () => {
    console.log("running on port: " + port);
})