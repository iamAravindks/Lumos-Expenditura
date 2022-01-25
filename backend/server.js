import express from 'express'
import cors from 'cors'
import colors from "colors";
import connectDB from './config/db'
import transactionRoute from './routes/transactionRoute'
import userRouter from "./routes/userRouter";
import { errorHandler, notFound } from "./middlewares/errorHandler";
const app = express()
const PORT = process.env.PORT || 5000
 connectDB()
app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/transactions', transactionRoute)
app.use("/api/users", userRouter);

app.use(notFound)
app.use(errorHandler)
app.listen(PORT, () =>
  console.log(`hey , i'm listening at http://localhost:${PORT}`.white.bold)
);
