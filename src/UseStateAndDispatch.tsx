import React from "react";
import { Reducer } from "react";
import { createContext, useContext, useReducer } from "react";
import { Action, State, StateProviderProps } from "./Utils/interface";

export const InitialState = (): State => ({
  islogin: false,
  data: "",
});

const defaultDispatch: React.Dispatch<Action> = () => ({});

export const reducer: Reducer<State, Action> = (prevState, action): State => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...prevState, islogin: true };
    case "SET_LOGOUT":
      return { ...prevState, islogin: false };
    case "SET_VALUE":
      return { ...prevState, data: action.data };
    default:
      return { ...prevState };
  }
};

const RawContext = createContext({
  login: InitialState(),
  dispatch: defaultDispatch,
});

export const StateProvider = ({ children }: StateProviderProps) => {
  const [store, dispatch] = useReducer(reducer, InitialState());
  return (
    <RawContext.Provider value={{ login: store, dispatch }}>
      {children}
    </RawContext.Provider>
  );
};

export const useStateAndDispatch = () => useContext(RawContext);

export const useMyDispatch = (): React.Dispatch<Action> => {
  const { dispatch } = useStateAndDispatch();
  return dispatch;
};

export const useGlobalState = (): State => {
  const { login } = useStateAndDispatch();
  return login;
};
