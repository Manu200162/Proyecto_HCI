import {
  LOAD_FLIGHTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_FLIGHTS,
  UPDATE_FILTERS,
  FILTER_FLIGHTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_FLIGHTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === SORT_FLIGHTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.Nombre.localeCompare(b.Nombre);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.Nombre.localeCompare(a.Nombre);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_FLIGHTS) {
    const { all_products } = state;
    const { text, categoria, aerolinea, pais } = state.filters;
    let tempProducts = [...all_products];
    //filtrado

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        //return product.Nombre.toLowerCase().startsWith(text);
        return product.Nombre.toLowerCase().includes(text);
      });
    }
    //categoria
    if (categoria !== "todos") {
      tempProducts = tempProducts.filter(
        (product) => product.Nacional.toString() === categoria
      );
    }
    if (aerolinea !== "todos") {
      tempProducts = tempProducts.filter(
        (product) => product.Aerolinea === aerolinea
      );
    }
    if (pais !== "todos") {
      tempProducts = tempProducts.filter((product) =>
        product.Paises.includes(pais)
      );
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        aerolinea: "todos",
        categoria: "todos",
        pais: "todos",
      },
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
