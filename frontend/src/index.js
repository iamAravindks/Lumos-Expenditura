import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/authContext/authContext";
import { ErrorProvider } from "./context/errorContext/ErrorContext";
import { Provider } from "./context/transactionContext/context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorProvider>
        <AuthProvider>
          <Provider>
            <App />
          </Provider>
        </AuthProvider>
      </ErrorProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
