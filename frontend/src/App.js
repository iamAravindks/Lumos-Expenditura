import { Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Route>
    </div>
  );
};

export default App;
