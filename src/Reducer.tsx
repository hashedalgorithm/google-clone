import { State } from "./Utils/interface";

type Action =
  | {
      type: "SET_LOGIN" | "SET_LOGOUT";
    }
  | {
      type: "SET_VALUE";
      data: string;
    };

const reducer: React.Reducer<State, Action> = (prevstate, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...prevstate, islogin: true };
    case "SET_LOGOUT":
      return { ...prevstate, islogin: false };
    case "SET_VALUE":
      return { ...prevstate, data: action.data };
    default:
      return { ...prevstate };
  }
};
