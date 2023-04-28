import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/aircrafts_reducer";
import { aircrafts_url as url } from "../utils/constants";
import {
  GET_AIRCRAFTS_BEGIN,
  GET_AIRCRAFTS_SUCCESS,
  GET_AIRCRAFTS_ERROR,
  GET_SINGLE_AIRCRAFT_BEGIN,
  GET_SINGLE_AIRCRAFT_SUCCESS,
  GET_SINGLE_AIRCRAFT_ERROR,
} from "../actions";

const initialState = {
  aircrafts_loading: false,
  aircrafts_error: false,
  aircrafts: [],
  some_aircrafts: [],
  single_aircraft_loading: false,
  single_aircraft_error: false,
  single_aircraft: {},
};

const AircraftsContext = React.createContext();

export const AircraftsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAircrafts = async (url) => {
    dispatch({ type: GET_AIRCRAFTS_BEGIN });
    try {
      const response = await axios.get(url);
      const aircrafts = response.data;
      dispatch({ type: GET_AIRCRAFTS_SUCCESS, payload: aircrafts });
    } catch (error) {
      dispatch({ type: GET_AIRCRAFTS_ERROR });
    }
  };

  const fetchSingleAircraft = async (url) => {
    dispatch({ type: GET_SINGLE_AIRCRAFT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleAircraft = response.data;
      dispatch({ type: GET_SINGLE_AIRCRAFT_SUCCESS, payload: singleAircraft });
    } catch (error) {
      dispatch({ type: GET_SINGLE_AIRCRAFT_ERROR });
    }
  };

  useEffect(() => {
    fetchAircrafts(url);
  }, []);

  return (
    <AircraftsContext.Provider value={{ ...state, fetchSingleAircraft }}>
      {children}
    </AircraftsContext.Provider>
  );
};
// make sure use
export const useAircraftsContext = () => {
  return useContext(AircraftsContext);
};
