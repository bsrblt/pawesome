"use client";
import React, { useContext, useState } from "react";
import CartContext from "store/CartContext";
import ShippingForm from "components/ui/ShippingForm";
import OrderSummary from "components/ui/OrderSummary";
import LoginForm from "components/ui/LoginForm";
import SignUpForm from "components/ui/SignUpForm";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";
import { bottomSectionData } from "lib/bottomSectionData";
import BottomSection from "components/layout/BottomSection";
import Image from "next/image";
import Discount from "components/ui/Discount";
import WelcomeOrder from "components/ui/WelcomeOrder";
import { signIn, signOut, useSession } from "next-auth/react";

const Checkout = () => {
  const { items, totalAmount, totalItemsQuantity, clearCart } =
    useContext(CartContext);
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
              <Discount onDiscountApply={(discount) => setDiscount(discount)} />
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
                ) : isMember && !isLoggedIn ? (
                  <LoginForm
                    onNoAcc={newUserHandler}
                    onNoJoin={noJoinHandler}
                  />
                ) : (isMember && session) || isLoggedIn ? (
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
