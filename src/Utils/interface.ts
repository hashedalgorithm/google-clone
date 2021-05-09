
export interface State {
  islogin: boolean;
  data: string;
}
export type Action =
  | {
      type: "SET_LOGIN" | "SET_LOGOUT";
    }
  | {
      type: "SET_VALUE";
      data: string;
    };

export interface StateProviderProps {
  children: React.ReactNode;
}

export interface Navbaritems {
  id: number;
  name: string;
  active: Boolean;
}
