import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import  AuthProvider  from "./context/authContext/authContext";
import { Provider } from "./context/transactionContext/context";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Provider>
          <App />
        </Provider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
