"use client";
import React, { ReactNode, createContext, useReducer, useEffect } from "react";
import { CartItem } from "lib/types";

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

interface CartContextProps extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItemsQuantity: number;
}

const CartContext = createContext<CartContextProps>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalAmount: 0,
  totalItemsQuantity: 0,
});

const cartReducer = (state: CartState, action: any): CartState => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];

    if (existingCartItemIndex >= 0) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "CLEAR") {
    return { ...state, items: [], totalAmount: 0 };
  }

  return state;
};

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const initializeCart = (): CartState => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { items: [], totalAmount: 0 };
  };

  const [cart, dispatchCartAction] = useReducer(cartReducer, initializeCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addItemToCartHandler(item: CartItem) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItemFromCartHandler(id: string) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  function clearCartHandler() {
    dispatchCartAction({ type: "CLEAR" });
  }

  function getTotalItemsQuantity(items: CartItem[]) {
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  const totalItemsQuantity = getTotalItemsQuantity(cart.items);

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    totalItemsQuantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
