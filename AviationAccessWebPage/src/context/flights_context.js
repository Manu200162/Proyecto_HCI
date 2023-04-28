import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/flights_reducer";
import { flights_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_FLIGHTS_BEGIN,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_ERROR,
  GET_SINGLE_FLIGHT_BEGIN,
  GET_SINGLE_FLIGHT_SUCCESS,
  GET_SINGLE_FLIGHT_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  flights_loading: false,
  flights_error: false,
  flights: [],
  featured_flights: [],
  single_flight_loading: false,
  single_flight_error: false,
  single_flight: {},
};

const FlightsContext = React.createContext();

export const FlightsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url2) => {
    dispatch({ type: GET_FLIGHTS_BEGIN });
    try {
      const response = await axios.get(url2);
      const products = response.data;
      dispatch({ type: GET_FLIGHTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_FLIGHTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_FLIGHT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: GET_SINGLE_FLIGHT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_FLIGHT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <FlightsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </FlightsContext.Provider>
  );
};
// make sure use
export const useFlightsContext = () => {
  return useContext(FlightsContext);
};
