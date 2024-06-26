"use client";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "app/store/CartContext";
import ShippingForm from "app/components/ui/ShippingForm";
import OrderSummary from "app/components/ui/OrderSummary";
import LoginForm from "app/components/ui/LoginForm";
import SignUpForm from "app/components/ui/SignUpForm";
import Background from "app/components/layout/Background";
import PageTitle from "app/components/ui/PageTitle";
import { bottomSectionData } from "app/lib/bottomSectionData";
import BottomSection from "app/components/layout/BottomSection";
import Image from "next/image";
import Discount from "app/components/ui/Discount";
import WelcomeOrder from "app/components/ui/WelcomeOrder";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const {
    items,
    totalAmount,
    totalItemsQuantity,
    clearCart,
    discount,
    applyDiscount,
  } = useContext(CartContext);
  const session = useSession();
  const bottomData = bottomSectionData.checkout;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isMember, setIsMember] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [notJoining, setNotJoining] = useState(false);
  const [, setForceUpdate] = useState(false);

  const validUser = isLoggedIn || session?.data?.user;

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
    setIsLoggedIn(false);
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

  const showLoginHandler = () => {
    setIsMember(true);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (validUser)
      return () => {
        setForceUpdate(true);
      };
  }, [validUser]);

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
              <Discount onDiscountApply={applyDiscount} />
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
                ) : isMember && !validUser ? (
                  <LoginForm
                    onNoAcc={newUserHandler}
                    onNoJoin={noJoinHandler}
                  />
                ) : validUser ? (
                  <WelcomeOrder
                    onNoAcc={newUserHandler}
                    onNoJoin={noJoinHandler}
                  />
                ) : isSigningUp ? (
                  <SignUpForm
                    onHasAcc={showLoginHandler}
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
      <BottomSection data={bottomData} />
    </>
  );
};

export default Checkout;
