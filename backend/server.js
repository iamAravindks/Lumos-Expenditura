import express from 'express'
import cors from 'cors'
import colors from "colors";
import connectDB from './config/db'
import transactionRoute from './routes/transactionRoute'
import userRouter from "./routes/userRouter";
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

app.use((req, res) =>
{
  res.status(404).json({message :`Error 404 :${req.url} not found`})
})
  
app.listen(PORT, () =>
  console.log(`hey , i'm listening at http://localhost:${PORT}`.white.bold)
);
