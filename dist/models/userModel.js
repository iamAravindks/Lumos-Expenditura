"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  passwordResetToken: String,
  passwordResetExpires: Date
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await _bcryptjs.default.compare(enteredPassword, this.password);
};

UserSchema.pre("save", async function (next) {
  // if not password modified (if an existed user updates the email and name)
  if (!this.isModified("password")) return next();
  const salt = await _bcryptjs.default.genSalt(10);
  this.password = await _bcryptjs.default.hash(this.password, salt);
});

UserSchema.methods.createResetPasswordToken = function () {
  const resetToken = _crypto.default.randomBytes(32).toString("hex");

  this.passwordResetToken = _crypto.default.createHash("sha256").update(resetToken).digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = _mongoose.default.models.User || _mongoose.default.model("User", UserSchema);

var _default = User;
exports.default = _default;