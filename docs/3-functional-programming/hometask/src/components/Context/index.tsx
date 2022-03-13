import React, { useContext } from "react";
import { Row } from "../Table";

interface IAction {
  type: "TABLE_DATA" | "FILTER" | "SEARCH" | "SORT";
  payload: Row[] | string[];
}

interface IState {
  filter: string[];
  data: Row[];
  search: string;
  sort: "asc" | "desc" | "";
}

const initialState: IState = {
  filter: [],
  data: [],
  search: "",
  sort: "",
};

const StateContext = React.createContext(null);

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "TABLE_DATA":
      return { ...state, data: action.payload };
    case "FILTER":
      return { ...state, filter: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "SORT":
      return { ...state, sort: action.payload };

    default:
      return { ...state };
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalDispatch = () => useContext(StateContext).dispatch;
export const useGlobalState = () => useContext(StateContext).state;
