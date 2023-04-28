import {
  GET_AIRCRAFTS_BEGIN,
  GET_AIRCRAFTS_SUCCESS,
  GET_AIRCRAFTS_ERROR,
  GET_SINGLE_AIRCRAFT_BEGIN,
  GET_SINGLE_AIRCRAFT_SUCCESS,
  GET_SINGLE_AIRCRAFT_ERROR,
} from "../actions";

const aircrafts_reducer = (state, action) => {
  if (action.type === GET_AIRCRAFTS_BEGIN) {
    return { ...state, aircrafts_loading: true };
  }

  if (action.type === GET_AIRCRAFTS_SUCCESS) {
    const some_aircrafts = action.payload.filter(
      (aircraft) => aircraft.Modernidad === 1
    );
    return {
      ...state,
      aircrafts_loading: false,
      aircrafts: action.payload,
      some_aircrafts,
    };
  }

  if (action.type === GET_AIRCRAFTS_ERROR) {
    return { ...state, aircrafts_loading: false, aircrafts_error: true };
  }
  if (action.type === GET_SINGLE_AIRCRAFT_BEGIN) {
    return {
      ...state,
      single_aircraft_loading: true,
      single_aircraft_error: false,
    };
  }
  if (action.type === GET_SINGLE_AIRCRAFT_SUCCESS) {
    return {
      ...state,
      single_aircraft_loading: false,
      single_aircraft: action.payload,
    };
  }
  if (action.type === GET_SINGLE_AIRCRAFT_ERROR) {
    return {
      ...state,
      single_aircraft_loading: false,
      single_aircraft_error: true,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default aircrafts_reducer;
