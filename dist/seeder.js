"use strict";

var _colors = _interopRequireDefault(require("colors"));

var _db = _interopRequireDefault(require("./config/db"));

var _transactions = _interopRequireDefault(require("./data/transactions"));

var _users = _interopRequireDefault(require("./data/users"));

var _transactionsModel = _interopRequireDefault(require("./models/transactionsModel"));

var _userModel = _interopRequireDefault(require("./models/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const importData = async () => {
  try {
    await (0, _db.default)();
    await _transactionsModel.default.deleteMany();
    await _userModel.default.deleteMany();
    const createdUsers = await _userModel.default.insertMany(_users.default);
    const sampleTransactions = createdUsers.map(user => {
      return {
        user,
        transactions: [..._transactions.default]
      };
    });
    console.log(sampleTransactions);
    await _transactionsModel.default.insertMany(sampleTransactions);
    console.log("Data imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error on importing ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await (0, _db.default)();
    await _transactionsModel.default.deleteMany();
    await _userModel.default.deleteMany();
    console.log("Data destroyed".yellow.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error on importing ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") destroyData();else importData();