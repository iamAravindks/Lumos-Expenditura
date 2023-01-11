import express from "express";
import expressAsyncHandler from "express-async-handler";
import Transactions from "../models/transactionsModel.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import mongoose from "mongoose";
const transactionRouter = express.Router();

// @desc Get all transactions
// @route GET /api/transactions
// @access Private
transactionRouter.get(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const transactions = await Transactions.findOne({ user: req.user._id });
      if (!transactions) {
        res.json({
          message: "No transactions found",
          data: [],
        });
      } else
        res.json({
          data: transactions.transactions,
        });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

// @desc Add new transaction
// @route POST /api/transactions
// @access Private

transactionRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const newTransaction = {
        amount: req.body.amount,
        category: req.body.category,
        type: req.body.type,
        date: new Date(req.body.date),
      };
      const allTransactions = await Transactions.findOne({ user: req.user.id });
      if (!allTransactions) {
        const createdTransaction = await Transactions.create({
          user: mongoose.Types.ObjectId(req.user.id),
          transactions: [newTransaction],
        });
        const { amount, category, type, date, _id } =
          createdTransaction.transactions[0];
        res.status(201).json({
          message: "Transaction created",
          data: {
            amount,
            category,
            type,
            date,
            _id,
          },
        });
      } else {
        allTransactions.transactions.push(newTransaction);
        const updatedTransactions = await allTransactions.save();
        const { amount, category, type, date, _id } =
          updatedTransactions.transactions[
            updatedTransactions.transactions.length - 1
          ];

        res.status(201).send({
          message: "Transaction Created.",
          data: { amount, category, type, date, _id },
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

// @desc Delete the whole transactions
// @route DELETE /api/transactions
// @access Private
transactionRouter.delete(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const checkTransactions = await Transactions.findOne({
        user: mongoose.Types.ObjectId(req.user._id),
      });
      if (checkTransactions && checkTransactions.transactions) {
        await Transactions.deleteOne({
          user: mongoose.Types.ObjectId(req.user._id),
        });
        res.status(200).json({
          message: "cleared all the transactions",
          data: [],
        });
      } else {
        res.status(404).json({ message: "No transactions to delete" });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

// @desc Get a particular transaction by an ID
// @route GET /api/transaction/:id
// @access PRIVATE

transactionRouter.get(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const transactions = await Transactions.find(
        {
          user: req.user._id,
          "transactions._id": req.params.id,
        },
        {
          "transactions.$": 1,
        }
      );
      if (!transactions) {
        res.json({
          message: "No transactions found",
          data: [],
        });
      } else
        res.json({
          data: transactions,
        });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

// @desc update a transaction
// @route PUT /api/transaction/:id
// @access private

transactionRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const existedTransactions = await Transactions.find(
        {
          user: req.user._id,
          "transactions._id": req.params.id,
        },
        {
          "transactions.$": 1,
        }
      );
      if (!existedTransactions) {
        res.json({
          message: "No transactions found",
          data: [],
        });
      }

      const updatedTransactions = await Transactions.updateOne(
        {
          user: req.user._id,
          "transactions._id": req.params.id,
        },
        {
          $set: {
            "transactions.$.amount":
              req.body.amount || existedTransactions[0].transactions.amount,
            "transactions.$.type":
              req.body.type || existedTransactions[0].transactions.type,
            "transactions.$.category":
              req.body.category || existedTransactions[0].transactions.category,
            "transactions.$.date":
              req.body.date || existedTransactions[0].transactions.date,
          },
        },
        {
          new: true,
        }
      );
      const newOne = await Transactions.findOne({
        user: req.user._id,
      });
      if (updatedTransactions) {
        res.json({
          data: newOne,
        });
      }
    } catch (e) {
      throw new Error(e);
    }
  })
);

// @desc Delete a transaction
// @route /api/transaction/:id
// @access Private
transactionRouter.delete(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const checkTransactionsExists = await Transactions.findOne({
        user: mongoose.Types.ObjectId(req.user._id),
      });
      if (checkTransactionsExists && checkTransactionsExists.transactions) {
        const deletedTransaction = await Transactions.findOneAndUpdate(
          {
            user: mongoose.Types.ObjectId(req.user._id),
          },
          {
            $pull: {
              transactions: { _id: mongoose.Types.ObjectId(req.params.id) },
            },
          },
          { new: true }
        );
        res.json({
          data: deletedTransaction.transactions,
        });
      } else {
        res.status(404).json({
          message: "No transactions found",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  })
);

export default transactionRouter;
