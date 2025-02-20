import React, { createContext, useReducer } from "react";

// import reducer
import AppReducer from "./AppReducer";

// create inital state
const initialState = {
  transaction: [
    { id: "1", title: "bike", descrption: "expense", price: 1000 },
    { id: "2", title: "bike", descrption: "income", price: 1000 },
    { id: "3", title: "bike", descrption: "expense", price: 3000 },
    { id: "4", title: "bike", descrption: "income", price: 1000 },
  ],
};

// create global context store
export const Globalcontext = createContext(initialState);

// create context prvider
export const GlobalPrvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function Addtransactions(obj) {
    dispatch({
      type: "ADD-Transaction",
      payload: {
        id: obj.id,
        price: obj.price,
        title: obj.title,
        descrption: obj.descrption,
      },
    });
  }
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  return (
    <Globalcontext.Provider
      value={{
        transaction: state.transaction,
        totalIncone: state.totalIncone,
        Addtransactions,
        deleteTransaction,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
};
