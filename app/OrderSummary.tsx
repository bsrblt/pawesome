import React, { useContext } from "react";
import { CartItem } from "components/utils/types";
import MiniButton from "components/ui/MiniButton";
import { MinusIcon, PlusIcon } from "components/ui/Icons";
import CartContext from "store/CartContext";

interface OrderSummaryProps {
  items: CartItem[];
  totalAmount: number;
  shippingCost: number;
  finalTotal: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  totalAmount,
  shippingCost,
  finalTotal,
}) => {
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <div className="border-turq rounded-xl border-8 p-3 bg-white/90 shadow-sh h-full max-h-[662px] min-h-[260px] overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Order Summary</h2>
        {items.length === 0 ? (
          <p className="text-sm">Your cart is empty.</p>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar">
        <ul className="">
          {items.map((item: CartItem) => (
            <li key={item.id} className="mb-4 w-full">
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold">{item.title}</span>
                <span className="text-lg font-semibold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center w-[19rem]">
                <p className="w-[25%]"> Quantity: </p>

                <span className="flex items-center justify-between sm:w-[35%]">
                  <MiniButton onClick={() => removeItem(item.id)} type="button">
                    <MinusIcon />
                  </MiniButton>
                  <span className="flex justify-center mx-3">
                    <h3 className="font-bold">{item.quantity}</h3>
                  </span>

                  <MiniButton onClick={() => addItem(item)} type="button">
                    <PlusIcon />
                  </MiniButton>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700">
          <div className="flex justify-between w-full border-darkpur border-b-[1px]">
            <p>Subtotal: </p>${totalAmount.toFixed(2)}
          </div>
        </h3>
        <h3 className="text-xl font-bold text-gray-700">
          <div className="flex justify-between w-full border-darkpur border-b-[1px]">
            <p>Shipping: </p>${shippingCost.toFixed(2)}
          </div>
        </h3>
        <br />
        <h3 className="text-xl font-bold text-gray-700">
          <div className="flex justify-between w-full border-darkpur border-b-[1px]">
            <p>Total: </p>${finalTotal.toFixed(2)}
          </div>
        </h3>
      </div>
    </div>
  );
};

export default OrderSummary;
