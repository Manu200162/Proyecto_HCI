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

const flights_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === GET_FLIGHTS_BEGIN) {
    return { ...state, flights_loading: true };
  }

  if (action.type === GET_FLIGHTS_SUCCESS) {
    const featured_flights = action.payload.filter(
      (flight) => flight.Nacional === 0
    );
    return {
      ...state,
      flights_loading: false,
      flights: action.payload,
      featured_flights,
    };
  }

  if (action.type === GET_FLIGHTS_ERROR) {
    return { ...state, flights_loading: false, flights_error: true };
  }
  if (action.type === GET_SINGLE_FLIGHT_BEGIN) {
    return {
      ...state,
      single_flight_loading: true,
      single_flight_error: false,
    };
  }
  if (action.type === GET_SINGLE_FLIGHT_SUCCESS) {
    return {
      ...state,
      single_flight_loading: false,
      single_flight: action.payload,
    };
  }
  if (action.type === GET_SINGLE_FLIGHT_ERROR) {
    return {
      ...state,
      single_flight_loading: false,
      single_flight_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default flights_reducer;
