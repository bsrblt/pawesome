import React, { useContext } from "react";
import { motion } from "framer-motion";
import Button from "components/ui/Button";
import { CartItem } from "components/utils/types";
import CartContext from "store/CartContext";
import { CloseIcon, MinusIcon, PlusIcon } from "./Icons";
import MiniButton from "./MiniButton";

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
  const { items, totalAmount, totalItemsQuantity, addItem, removeItem } =
    useContext(CartContext);

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

      <div className="text-lemonlight space-y-2">
        {items.map((item: CartItem) => (
          <div key={item.id} className="flex justify-between items-center">
            <span className="flex w-[25%] gap-2 items-center justify-start">
              <MiniButton onClick={() => removeItem(item.id)} type="button">
                <MinusIcon />
              </MiniButton>
              <span className="w-[5%]">
                <h3>{item.quantity}</h3>
              </span>

              <MiniButton onClick={() => addItem(item)} type="button">
                <PlusIcon />
              </MiniButton>
            </span>
            <span className="w-[55%] ml-2 text-left">
              <h3>{item.title}</h3>
            </span>
            <span className="w-[20%]">
              <h3>${item.price.toFixed(2)}</h3>
            </span>
          </div>
        ))}
      </div>

      <h2 className="text-lemonlight text-lg font-bold">
        Total: ${totalItemsQuantity === 0 ? "0.00" : totalAmount.toFixed(2)}
      </h2>

      <div className="flex justify-center items-end p-4 gap-8">
        <Button onClick={onClear} type="submit">
          Clear
        </Button>
        <Button onClick={onCheckout} type="submit">
          Checkout
        </Button>
      </div>
    </motion.div>
  );
};

export default Cart;
