"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connectDB = async () => {
  try {
    const con = await _mongoose.default.connect(_config.default.MONGODB_LOCALHOST_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`MongoDB connected : ${con.connection.host}`.blue.underline);
  } catch (error) {
    console.log();
    console.log(`Error : ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

var _default = connectDB;
exports.default = _default;