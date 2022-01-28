import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    type: { type: String, required: true },
    date : {type : Date,required : true}
  },

);

const TransactionsSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    transactions : [transactionSchema]
});

const Transactions = mongoose.models.Transactions || mongoose.model("Transactions", TransactionsSchema)
export default Transactions