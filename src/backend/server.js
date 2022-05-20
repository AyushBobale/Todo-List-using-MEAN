import express from "express";
import 'dotenv/config'
import router from "./routes/taskRouter.js";
import errorHandler from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/tasks', router);
app.use(errorHandler);

app.listen(PORT, () => {
    console,console.log(`Server running at http://localhost:${PORT}`);
});
