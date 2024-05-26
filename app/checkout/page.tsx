"use client";
import React, { useContext, useState } from "react";
import CartContext from "store/CartContext";
import ShippingForm from "components/ui/ShippingForm";
import OrderSummary from "components/ui/OrderSummary";
import LoginForm from "components/ui/LoginForm";
import SignUpForm from "components/ui/SignUpForm";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";
import DiscoverNutrition from "components/layout/DiscoverNutrition";
import Image from "next/image";
import OrderTerms from "components/ui/OrderTerms";

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
  const [discount, setDiscount] = useState(0);

  const shippingCost = totalItemsQuantity > 0 ? 4.99 : 0.0;

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
      <Background>
        <div className="container mx-auto px-4">
          <PageTitle
            text={submitted ? "Thank you for your purchase!" : "Checkout"}
          />
          {submitted ? (
            <div className="text-center">
              <p className="text-lg mt-4">
                Your order has been placed successfully. You will receive a
                confirmation email shortly.
              </p>
              <Image
                src="/images/ty.jpg"
                alt="thankyou"
                // width={400}
                height={400}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto">
              <OrderTerms
                onDiscountApply={(discount) => setDiscount(discount)}
              />
              <div
                className={`h-full z-0 ${
                  isMember ? "max-h-[420px]" : ""
                } transition-all duration-500`}
              >
                <OrderSummary
                  items={items}
                  totalAmount={totalAmount}
                  shippingCost={shippingCost}
                  discount={discount}
                />
              </div>
              <div className="h-full z-0 ">
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
      </Background>
      <DiscoverNutrition
        href1="/products"
        button1Text="Shop More"
        href2="/"
        button2Text="Home"
        title="Make Sure Nothing is Missing"
        desc="Before you finalize your purchase, take a moment to ensure you've explored all the options available. Double-check your cart to see if there's anything else you'd like to add to enhance your pet's nutrition and well-being. With our diverse range of products catering to various dietary needs and preferences, you're bound to find the perfect fit for your furry friend. Remember, there's a wide array of products to choose from, so you might discover something new that piques your interest. Happy shopping!"
      />
    </>
  );
};

export default Checkout;
