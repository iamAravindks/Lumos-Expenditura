import express from 'express'
import cors from 'cors'
import colors from "colors";
import cookieParser from 'cookie-parser'
import connectDB from './config/db'
import transactionRoute from './routes/transactionRoute'
import userRouter from "./routes/userRouter";
import { errorHandler, notFound } from "./middlewares/errorHandler";
import path from "path";

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
if (process.env.NODE_ENV === "production")
{
  app.use(express.static(path.join(__dirname, '../frontend/build')))
  app.get('*', (req, res) =>
  {
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}

app.use(notFound)
app.use(errorHandler)
app.listen(PORT);
