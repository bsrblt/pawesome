"use client";
import React, { ReactNode, createContext, useReducer } from "react";
import { CartItem } from "../lib/types";

interface CartState {
  items: CartItem[];
  totalAmount: number;
  discount: number;
}

interface CartContextProps extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  totalItemsQuantity: number;
  applyDiscount: (discount: number) => void;
  removeDiscount: () => void;
}

const CartContext = createContext<CartContextProps>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  totalAmount: 0,
  totalItemsQuantity: 0,
  discount: 0,
  applyDiscount: function (discount: number): void {
    throw new Error("Function not implemented.");
  },
  removeDiscount: function (): void {
    throw new Error("Function not implemented.");
  },
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

  if (action.type === "APPLY_DISCOUNT") {
    const discountedAmount = state.totalAmount * action.discount;
    const updatedTotalAmount = state.totalAmount - discountedAmount;
    return {
      ...state,
      totalAmount: updatedTotalAmount,
      discount: action.discount,
    };
  }

  if (action.type === "REMOVE_DISCOUNT") {
    const discountedAmount = state.totalAmount * state.discount;
    const updatedTotalAmount = state.totalAmount + discountedAmount;
    return {
      ...state,
      totalAmount: updatedTotalAmount,
      discount: 0,
    };
  }

  if (action.type === "CLEAR") {
    return { ...state, items: [], totalAmount: 0 };
  }

  return state;
};

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    discount: 0,
  });

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

  function applyDiscountHandler(discount: number) {
    dispatchCartAction({ type: "APPLY_DISCOUNT", discount: discount });
  }

  function removeDiscountHandler() {
    dispatchCartAction({ type: "REMOVE_DISCOUNT" });
  }

  const totalItemsQuantity = getTotalItemsQuantity(cart.items);

  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    totalItemsQuantity,
    discount: cart.discount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
    applyDiscount: applyDiscountHandler,
    removeDiscount: removeDiscountHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
