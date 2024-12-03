import dotenv from "dotenv";
import express , {Express} from "express" 
import errorMiddleware from "./middlewares/error.middleware";
import notFoundMiddleware from "./middlewares/notFound.middleware";
import func from "./file";


dotenv.config()

const port = process.env.port || 8000

const app : Express = express();

app.use(express.json())

func()


// glopal middleware
app.all('*', notFoundMiddleware)


//err handler
app.use(errorMiddleware)

app.listen(port , () => {
    console.log("running on port: " + port);
})