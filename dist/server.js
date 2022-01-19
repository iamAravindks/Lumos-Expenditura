"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _colors = _interopRequireDefault(require("colors"));

var _db = _interopRequireDefault(require("./config/db"));

var _transactionRoute = _interopRequireDefault(require("./routes/transactionRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = process.env.PORT || 5000;
(0, _db.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/api/transactions', _transactionRoute.default);
app.listen(PORT, () => console.log(`hey , i'm listening at http://localhost:${PORT}`.white.bold));