import React, { useContext } from "react";
import { CartItem } from "app/lib/types";
import MiniButton from "app/components/ui/MiniButton";
import { MinusIcon, PlusIcon } from "app/components/ui/Icons";
import CartContext from "app/store/CartContext";
import Button from "./Button";
import Link from "next/link";

interface OrderSummaryProps {
  items: CartItem[];
  totalAmount: number;
  shippingCost: number;
  discount: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  totalAmount,
  shippingCost,
  discount,
}) => {
  const { addItem, removeItem } = useContext(CartContext);

  const discountAmount = totalAmount * discount;
  const applyShippingCost = totalAmount <= 100 ? shippingCost : 0;
  const finalTotal = totalAmount - discountAmount + applyShippingCost;

  return (
    <div className="border-turq rounded-xl border-8 p-3 bg-white/90 shadow-sh h-full max-h-[688px] min-h-[250px] overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col justify-between transition-all duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Order Summary</h2>
        {items.length === 0 ? (
          <>
            <p className="text-sm mb-4">Your cart is empty.</p>
            <div className="flex gap-[3px] justify-center lg:mt-14">
              <Link href={"/products"}>
                <Button>Products</Button>
              </Link>
              <Link href={"/"}>
                <Button>Home</Button>
              </Link>
            </div>
          </>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden justify-between pr-1 custom-scrollbar">
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
                <p className="w-[25%]"> Quantity: </p>
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
            <p className="text-darkpur/90">Subtotal: </p>
            <p className="text-darkpur/90">${totalAmount.toFixed(2)}</p>
          </div>
        </h3>
        {totalAmount <= 100 ? (
          <h3 className="text-xl font-bold text-gray-700">
            <div className="flex justify-between w-full border-darkpur border-b-[1px]">
              <p>Shipping: </p>${shippingCost.toFixed(2)}
            </div>
          </h3>
        ) : (
          <h3 className="text-xl font-bold text-gray-700">
            <div className="flex justify-between w-full border-darkpur border-b-[1px]">
              <p className="text-emerald">Shipping: </p>
              <p className="text-emerald"> $0.00</p>
            </div>
          </h3>
        )}
        {discount > 0 && (
          <h3 className="text-xl font-bold text-gray-700">
            <div className="flex justify-between w-full border-darkpur border-b-[1px] text-tahiti">
              <p>Discount: </p>$-{discountAmount.toFixed(2)}
            </div>
          </h3>
        )}
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
