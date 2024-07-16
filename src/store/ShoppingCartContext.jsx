import { createContext, useContext, useReducer } from "react";

const ShoppingCartContext = createContext({
  addItem: () => {},
  cartItems: [],
});

const cartItemReducer = (currState, action) => {
  let newState = currState;
  if (action.type == "ADD_ITEM") {
    newState = [...currState, action.payload];
  }
  if (action.type == "REMOVE_ITEM") {
    newState = newState.filter((item) => {
      return item.id !== action.payload.id
    });
  }
  if (action.type == "UPDATE_ITEM") {
    let item = newState.filter((item) => {
      return item.id === action.payload.id
    });
    item.title = 'App'

    console.log("in update reducer"+item.quantity)
    newState = newState.filter((item) => {
      return item.id !== action.payload.id
    });
    newState = [item, ...newState]
  }

  if (action.type == "UPDATE_QUANTITY") {
    newState = newState.map((item) => {
      return item.id === action.payload.id ? {...item, quantity : item.quantity +1} : item
    });
  }
  if (action.type == "UPDATE_QUANTITY_REMOVE") {
    newState = newState.map((item) => {
      return item.id === action.payload.id ? {...item, quantity : item.quantity -1} : item
    });
  }

  return newState;
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, dispatchCartItem] = useReducer(cartItemReducer, []);

  const addItem = (item) => {
    dispatchCartItem({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const removeItem = (item) => {
    console.log(item.title + " remove item called");
    dispatchCartItem({
      type: "REMOVE_ITEM",
      payload: item,
    });
  };

  const updateItem = (item) => {
    console.log(item.quantity + " remove item called");
    dispatchCartItem({
      type: "UPDATE_ITEM",
      payload: item,
    });
  };
  const updateQuantity = (item) => {
    console.log(item.title + " quantity update item called");
    dispatchCartItem({
      type: "UPDATE_QUANTITY",
      payload: item,
    });
  };
  const updateQtyRemove = (item) => {
    console.log(item.title + " quantity update item called");
    dispatchCartItem({
      type: "UPDATE_QUANTITY_REMOVE",
      payload: item,
    });
  };

  return (
    <ShoppingCartContext.Provider value={{ addItem, cartItems, removeItem, updateItem, updateQuantity, updateQtyRemove }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(ShoppingCartContext);
};

export default ShoppingCartProvider;
