import React, { createContext, useContext, useReducer } from "react";

// Prepare the Data Layer
export const StateContext = createContext();

// Wrap our app and provider that Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull the information from the Data Layer
export const useStateValue = () => useContext(StateContext);
