import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { getTotal } from "./utils";
import {
  CLEAR_ITEMS,
  DECREASE_ITEM,
  DISPLAY_ITEMS,
  INCREASE_ITEM,
  LOADING,
  REMOVE_ITEM,
} from "./actions";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();
// custom hook
export const useGlobalContext = () => useContext(AppContext);

// default state
const defaultState = {
  loading: true,
  cart: new Map(),
};

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotal(state.cart);

  function remove(id) {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  }

  function increase(id) {
    dispatch({ type: INCREASE_ITEM, payload: { id } });
  }

  function decrease(id) {
    dispatch({ type: DECREASE_ITEM, payload: { id } });
  }

  function clear() {
    dispatch({ type: CLEAR_ITEMS });
  }

  async function fetchData() {
    dispatch({ type: LOADING });

    const response = await fetch(url);
    const cart = await response.json();

    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
        increase,
        decrease,
        clear,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
