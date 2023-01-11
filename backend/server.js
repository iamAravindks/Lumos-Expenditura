import express from 'express'
import cors from 'cors'
import colors from "colors";
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import transactionRoute from "./routes/transactionRoute.js";
import userRouter from "./routes/userRouter.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import path from "path";
import { fileURLToPath } from "url";


const app = express()
const PORT = process.env.PORT || 5000
 connectDB()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/transactions', transactionRoute)
app.use("/api/users", userRouter);
// if (process.env.NODE_ENV === "production")
// {
//   app.use(express.static(path.join(__dirname, '../frontend/build')))
//   app.get('*', (req, res) =>
//   {
//     const filePath = path.join(__dirname,'../frontend/build'
//     );
//     res.sendFile(path.resolve(filePath,'index.html'))
//   })
// }
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    const filePath = path.join(__dirname, "../frontend/build");
    res.sendFile(path.resolve(filePath, "index.html"));
  });
}

app.use(notFound)
app.use(errorHandler)
app.listen(PORT);
