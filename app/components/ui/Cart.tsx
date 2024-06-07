import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { CartItem } from "../../lib/types";
import CartContext from "app/store/CartContext";
import { CloseIcon, MinusIcon, PlusIcon } from "./Icons";
import MiniButton from "./MiniButton";
import { useRouter } from "next/navigation";

interface CartProps {
  showCart: boolean;
  onClear: () => void;
  onCheckout: () => void;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({
  showCart,
  onCheckout,
  onClose,
  onClear,
}) => {
  const router = useRouter();
  const { items, totalAmount, totalItemsQuantity, addItem, removeItem } =
    useContext(CartContext);
  const [showClearPrompt, setShowClearPrompt] = useState(false);

  const freeShippingThreshold = 100.0;
  const shippingCost =
    totalItemsQuantity > 0 && totalAmount < freeShippingThreshold ? 4.99 : 0.0;
  const finalTotal = totalAmount + shippingCost;

  const handleClearClick = () => {
    totalItemsQuantity > 0
      ? setShowClearPrompt(true)
      : router.push("/products");
  };

  const handleConfirmClear = () => {
    setShowClearPrompt(false);
    onClear();
  };

  const handleCancelClear = () => {
    setShowClearPrompt(false);
  };

  return (
    <motion.div
      className="grid grid-cols-1 h-auto w-[19rem] p-2 gap-2 text-center text-sm top-[3.2rem] bg-gray-800 rounded-bl-xl z-20 fixed"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: showCart ? 1 : 0, y: showCart ? 0 : -500 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center justify-between mx-4">
        <h1 className="pt-2 text-rosy font-semibold">YOUR CART</h1>
        <MiniButton onClick={onClose} type="button">
          <CloseIcon />
        </MiniButton>
      </div>

      {showClearPrompt ? (
        <div id="clear-prompt" className="text-lemonlight font-semibold mx-2">
          <h2>Are you sure you want to clear the cart?</h2>
          <div className="flex justify-center items-end pl-4 my-2 gap-4">
            <Button onClick={handleConfirmClear} type="button" setWidth="7rem">
              Yes
            </Button>
            <Button onClick={handleCancelClear} type="button" setWidth="7rem">
              No
            </Button>
          </div>
        </div>
      ) : (
        <div id="items" className="text-lemonlight space-y-2 mx-2">
          {items.map((item: CartItem) => (
            <div key={item.id} className="flex justify-between items-center">
              <span className="flex w-[35%] gap-1 items-center justify-start">
                <MiniButton onClick={() => removeItem(item.id)} type="button">
                  <MinusIcon />
                </MiniButton>
                <span className="w-[1%] mr-4">
                  <h3>{item.quantity}</h3>
                </span>

                <MiniButton onClick={() => addItem(item)} type="button">
                  <PlusIcon />
                </MiniButton>
              </span>
              <span className="w-[52%] ml-2 text-left text-sm">
                <h3>{item.title}</h3>
              </span>
              <span className="w-[17%]">
                <h3>${item.price.toFixed(2)}</h3>
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="text-lemonlight text-md font-bold my-2">
        <h2>Shipping: ${shippingCost.toFixed(2)}</h2>
        <h2 className="text-xl">Total: ${finalTotal.toFixed(2)}</h2>
      </div>

      <div className="flex justify-center items-end pl-4 mb-1 gap-4">
        <Button
          onClick={!showClearPrompt ? handleClearClick : handleCancelClear}
          type="submit"
          setWidth="7rem"
        >
          {totalItemsQuantity > 0 && !showClearPrompt
            ? "Clear Cart"
            : showClearPrompt
            ? "Cancel"
            : "Shop"}
        </Button>
        <Button onClick={onCheckout} type="submit" setWidth="7rem">
          {totalItemsQuantity > 0 ? "Checkout" : "Close"}
        </Button>
      </div>
    </motion.div>
  );
};

export default Cart;
