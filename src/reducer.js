import {
  CLEAR_ITEMS,
  DECREASE_ITEM,
  DISPLAY_ITEMS,
  INCREASE_ITEM,
  LOADING,
  REMOVE_ITEM,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);

    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE_ITEM) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };

    newCart.set(itemId, newItem);

    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE_ITEM) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    if (item.amount === 1) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    const newItem = { ...item, amount: item.amount - 1 };

    newCart.set(itemId, newItem);

    return { ...state, cart: newCart };
  }

  if (action.type === CLEAR_ITEMS) {
    const newCart = new Map();

    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));

    return { ...state, cart: newCart, loading: false };
  }

  throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;
