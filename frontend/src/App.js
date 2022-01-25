import { Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./Home";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute component={Home} path='/' exact />
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
