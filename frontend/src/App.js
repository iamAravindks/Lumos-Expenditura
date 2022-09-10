import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./Home";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile/Profile";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ForgotPassword from "./components/ResetPassword/ForgotPassword";

const App = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute component={Home} path="/" exact />

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/password-reset">
          <ResetPassword />
        </Route>
        <PrivateRoute component={Profile} path="/profile" exact />
      </Switch>
    </div>
  );
};

export default App;
