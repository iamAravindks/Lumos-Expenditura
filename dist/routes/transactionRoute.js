"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _transactionsModel = _interopRequireDefault(require("../models/transactionsModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transactionRouter = _express.default.Router();

transactionRouter.get('/', (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const transactions = await _transactionsModel.default.find({});
    res.send(transactions);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}));
transactionRouter.post('/', (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const allTransactions = await _transactionsModel.default.find({});
    console.log(allTransactions);
    const newTransaction = {
      amount: req.body.amount,
      category: req.body.category,
      type: req.body.type
    };
    console.log(newTransaction);
    allTransactions.transactions.push(newTransaction);
    const updatedTransactions = await allTransactions.save();
    res.status(201).send({
      message: "Transaction Created.",
      data: updatedTransactions.transactions[updatedTransactions.transactions.length - 1]
    });
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}));
var _default = transactionRouter;
exports.default = _default;