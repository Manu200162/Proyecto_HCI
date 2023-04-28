import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_FLIGHTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_FLIGHTS,
  UPDATE_FILTERS,
  FILTER_FLIGHTS,
  CLEAR_FILTERS,
} from "../actions";
import { useFlightsContext } from "./flights_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "name-a",
  filters: {
    text: "",
    aerolinea: "todos",
    categoria: "todos",
    pais: "todos",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { flights } = useFlightsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_FLIGHTS, payload: flights });
  }, [flights]);

  useEffect(() => {
    dispatch({ type: FILTER_FLIGHTS });
    dispatch({ type: SORT_FLIGHTS });
  }, [flights, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    // para demostrar
    //const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //console.log(name, value);
    if (name === "categoria") {
      if (e.target.textContent === "nacional") {
        value = "1";
      } else if (e.target.textContent === "internacional") {
        value = "0";
      } else {
        value = e.target.textContent;
      }
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
