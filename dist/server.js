"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _colors = _interopRequireDefault(require("colors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _db = _interopRequireDefault(require("./config/db"));

var _transactionRoute = _interopRequireDefault(require("./routes/transactionRoute"));

var _userRouter = _interopRequireDefault(require("./routes/userRouter"));

var _errorHandler = require("./middlewares/errorHandler");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const PORT = process.env.PORT || 5000;
(0, _db.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use((0, _cookieParser.default)());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use('/api/transactions', _transactionRoute.default);
app.use("/api/users", _userRouter.default);

if (process.env.NODE_ENV === "production") {
  app.use(_express.default.static(_path.default.join(__dirname, '../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(_path.default.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.use(_errorHandler.notFound);
app.use(_errorHandler.errorHandler);
app.listen(PORT);