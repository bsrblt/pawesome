"use client";
import React, { useContext, useState } from "react";
import CartContext from "store/CartContext";
import DiscoverNutrition from "components/DiscoverNutrition";
import ShippingForm from "components/ui/ShippingForm";
import OrderSummary from "app/OrderSummary";
import LoginForm from "components/ui/LoginForm";
import SignUpForm from "components/ui/SignUpForm";

const Checkout = () => {
  const { items, totalAmount, totalItemsQuantity, clearCart } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isMember, setIsMember] = useState(true);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [notJoining, setNotJoining] = useState(false);

  const shippingCost = totalItemsQuantity > 0 ? 4.99 : 0.0;
  const finalTotal = totalAmount + shippingCost;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  const existingUserHandler = () => {
    setIsMember(true);
    setIsSigningUp(false);
    setNotJoining(false);
  };

  const newUserHandler = () => {
    setIsMember(false);
    setIsSigningUp(true);
    setNotJoining(false);
  };

  const noJoinHandler = () => {
    setIsMember(false);
    setIsSigningUp(false);
    setNotJoining(true);
  };

  return (
    <>
      <section className="bg-bermuda py-12 md:py-24 relative">
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: "url('products1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-darkpur mb-12 sm:mb-16 sm:-mt-6 text-center font-lobster tracking-wider">
            {submitted ? "Thank you for your purchase!" : "Checkout"}
          </h1>
          {submitted ? (
            <div className="text-center">
              <p className="text-lg mt-4">
                Your order has been placed successfully. You will receive a
                confirmation email shortly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:w-[69%] mx-auto">
              <div className={`h-full z-10 ${isMember ? "max-h-[432px]" : ""}`}>
                <OrderSummary
                  items={items}
                  totalAmount={totalAmount}
                  shippingCost={shippingCost}
                  finalTotal={finalTotal}
                />
              </div>
              <div className="h-full z-10 ">
                {notJoining && !isMember ? (
                  <ShippingForm
                    onHasAcc={existingUserHandler}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                  />
                ) : isMember ? (
                  <LoginForm
                    onNoAcc={newUserHandler}
                    onNoJoin={noJoinHandler}
                  />
                ) : isSigningUp ? (
                  <SignUpForm
                    onHasAcc={existingUserHandler}
                    onNoJoin={noJoinHandler}
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                ) : null}
              </div>
            </div>
          )}
        </div>
      </section>
      <DiscoverNutrition />
    </>
  );
};

export default Checkout;
