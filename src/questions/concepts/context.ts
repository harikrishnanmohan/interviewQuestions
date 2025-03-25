CONTEXT;

import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

// this function will be called by react automattically and the state wll be passed by react.
// action is what we pass. normally it will contain the an action object which contains type and payload.
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // add
  }
  if (action.type === "REMOVE_ITEM") {
    // remove
  }
  return updatedState;
};

// wrap this CartContextProvider in App.js to expose the context
export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const cartState = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartState}>{children}</CartContext.Provider>
  );

  // return <CartContext value={cartState}>{children}</CartContext>; in react 19 or higher
}

export default CartContext;

// counter context------------------------------------------------------------------------------

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
interface CounterContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create the context
const CounterContext =
  (createContext < CounterContextType) | (undefined > undefined);

// Provider component
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook for using the context
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
