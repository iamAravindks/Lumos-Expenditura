"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _transactionsModel = _interopRequireDefault(require("../models/transactionsModel"));

var _authMiddleware = require("../middlewares/authMiddleware");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transactionRouter = _express.default.Router(); // @desc Get all transactions
// @route GET /api/transactions
// @access Private


transactionRouter.get("/", _authMiddleware.isAuth, (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const transactions = await _transactionsModel.default.findOne({
      user: req.user._id
    });

    if (!transactions) {
      res.json({
        message: "No transactions found",
        data: []
      });
    } else res.json({
      data: transactions.transactions
    });
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
})); // @desc Add new transaction
// @route POST /api/transactions
// @access Private

transactionRouter.post("/", _authMiddleware.isAuth, (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const newTransaction = {
      amount: req.body.amount,
      category: req.body.category,
      type: req.body.type,
      date: new Date(req.body.date)
    };
    const allTransactions = await _transactionsModel.default.findOne({
      user: req.user.id
    });

    if (!allTransactions) {
      const createdTransaction = await _transactionsModel.default.create({
        user: _mongoose.default.Types.ObjectId(req.user.id),
        transactions: [newTransaction]
      });
      const {
        amount,
        category,
        type,
        date,
        _id
      } = createdTransaction.transactions[0];
      res.status(201).json({
        message: "Transaction created",
        data: {
          amount,
          category,
          type,
          date,
          _id
        }
      });
    } else {
      allTransactions.transactions.push(newTransaction);
      const updatedTransactions = await allTransactions.save();
      const {
        amount,
        category,
        type,
        date,
        _id
      } = updatedTransactions.transactions[updatedTransactions.transactions.length - 1];
      res.status(201).send({
        message: "Transaction Created.",
        data: {
          amount,
          category,
          type,
          date,
          _id
        }
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
})); // @desc Delete the whole transactions
// @route DELETE /api/transactions
// @access Private

transactionRouter.delete("/", _authMiddleware.isAuth, (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const checkTransactions = await _transactionsModel.default.findOne({
      user: _mongoose.default.Types.ObjectId(req.user._id)
    });

    if (checkTransactions && checkTransactions.transactions) {
      await _transactionsModel.default.deleteOne({
        user: _mongoose.default.Types.ObjectId(req.user._id)
      });
      res.status(200).json({
        message: "cleared all the transactions",
        data: []
      });
    } else {
      res.status(404).json({
        message: "No transactions to delete"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
})); // @desc Get a particular transaction by an ID
// @route GET /api/transaction/:id
// @access PRIVATE

transactionRouter.get("/:id", _authMiddleware.isAuth, (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const transactions = await _transactionsModel.default.find({
      user: req.user._id,
      "transactions._id": req.params.id
    }, {
      "transactions.$": 1
    });

    if (!transactions) {
      res.json({
        message: "No transactions found",
        data: []
      });
    } else res.json({
      data: transactions
    });
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
})); // @desc update a transaction
// @route PUT /api/transaction/:id
// @access private

transactionRouter.put("/:id", _authMiddleware.isAuth, (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const existedTransactions = await _transactionsModel.default.find({
      user: req.user._id,
      "transactions._id": req.params.id
    }, {
      "transactions.$": 1
    });

    if (!existedTransactions) {
      res.json({
        message: "No transactions found",
        data: []
      });
    }

    const updatedTransactions = await _transactionsModel.default.updateOne({
      user: req.user._id,
      "transactions._id": req.params.id
    }, {
      $set: {
        "transactions.$.amount": req.body.amount || existedTransactions[0].transactions.amount,
        "transactions.$.type": req.body.type || existedTransactions[0].transactions.type,
        "transactions.$.category": req.body.category || existedTransactions[0].transactions.category,
        "transactions.$.date": req.body.date || existedTransactions[0].transactions.date
      }
    }, {
      new: true
    });
    const newOne = await _transactionsModel.default.findOne({
      user: req.user._id
    });

    if (updatedTransactions) {
      res.json({
        data: newOne
      });
    }
  } catch (e) {
    throw new Error(e);
  }
})); // @desc Delete a transaction
// @route /api/transaction/:id
// @access Private

transactionRouter.delete("/:id", _authMiddleware.isAuth, (0, _expressAsyncHandler.default)(async (req, res) => {
  try {
    const checkTransactionsExists = await _transactionsModel.default.findOne({
      user: _mongoose.default.Types.ObjectId(req.user._id)
    });

    if (checkTransactionsExists && checkTransactionsExists.transactions) {
      const deletedTransaction = await _transactionsModel.default.findOneAndUpdate({
        user: _mongoose.default.Types.ObjectId(req.user._id)
      }, {
        $pull: {
          transactions: {
            _id: _mongoose.default.Types.ObjectId(req.params.id)
          }
        }
      }, {
        new: true
      });
      res.json({
        data: deletedTransaction.transactions
      });
    } else {
      res.status(404).json({
        message: "No transactions found"
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
}));
var _default = transactionRouter;
exports.default = _default;