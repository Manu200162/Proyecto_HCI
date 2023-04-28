import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
} from "../actions";

const scheduled_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, fecha, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + "_" + fecha);
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + "_" + fecha) {
          return { ...item };
        } else {
          return item;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + "_" + fecha,
        name: product.Nombre,
        from: product.Origen,
        to: product.Destino,
        img: product.Img_vuelo,
        ftime: product.Tiempo_vuelo,
        airline: product.Aerolinea,
        fecha,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { state, cart: [] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { total_items } = state.cart.reduce(
      (total) => {
        total.total_items += 1;
        return total;
      },
      {
        total_items: 0,
      }
    );
    return { ...state, total_items };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default scheduled_reducer;
