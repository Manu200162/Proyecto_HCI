import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/scheduled_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
};

const ScheduledContext = React.createContext();

export const ScheduledProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, fecha, product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, fecha, product },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <ScheduledContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart }}
    >
      {children}
    </ScheduledContext.Provider>
  );
};
// make sure use
export const useScheduledContext = () => {
  return useContext(ScheduledContext);
};
