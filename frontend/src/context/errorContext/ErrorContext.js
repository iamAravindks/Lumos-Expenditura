import { createContext, useReducer } from "react";
import errorContextReducer from "./errorContextReducer";
import { CLEAR_ERROR, SET_ERROR } from "./types";

const initialState = { error: null };
export const ErrorContext = createContext(initialState);

export const ErrorProvider = ({ children }) => {
  const [errorState, dispatch] = useReducer(errorContextReducer, initialState);

  const setError = (error) => {
    dispatch({ type: SET_ERROR, payload: error });
      setTimeout(() => {
          dispatch({type:CLEAR_ERROR})
      }, 2000);
  };

  return (
    <ErrorContext.Provider
      value={{
        error: errorState.error,
        setError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};
