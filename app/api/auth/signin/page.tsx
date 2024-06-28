"use client";
import React, { useContext, useState, useEffect } from "react";
// import CartContext from "app/store/CartContext";
// import ShippingForm from "app/components/ui/ShippingForm";
// import OrderSummary from "app/components/ui/OrderSummary";
import LoginForm from "app/components/ui/LoginForm";
import SignUpForm from "app/components/ui/SignUpForm";
import Background from "app/components/layout/Background";
import PageTitle from "app/components/ui/PageTitle";
import { bottomSectionData } from "app/lib/bottomSectionData";
import BottomSection from "app/components/layout/BottomSection";
import Image from "next/image";
import WelcomeOrder from "app/components/ui/WelcomeOrder";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import pethi from "public/pethi.jpg";
import Modal from "app/components/ui/Modal";

const Signin = () => {
  // const {
  //   items,
  //   totalAmount,
  //   totalItemsQuantity,
  //   clearCart,
  //   discount,
  //   applyDiscount,
  // } = useContext(CartContext);
  const session = useSession();
  const bottomData = bottomSectionData.ourStory;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [isMember, setIsMember] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [notJoining, setNotJoining] = useState(false);
  const [, setForceUpdate] = useState(false);

  const validUser = isLoggedIn || session?.data?.user;

  // const shippingCost = totalItemsQuantity > 0 ? 4.99 : 0.0;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
    router.push("/");
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
      <section className="bg-bermuda py-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-80 z-0"
          style={{
            backgroundImage: "url('/pethi.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* <div className="relative z-10">{children}</div> */}

        <div className="flex items-start justify-start">
          <Image alt="welcome" src={pethi} width={1920} className="py20" />
        </div>
        <Modal>
          <div className="container mx-auto px-4">
            {/* <PageTitle text="Login or Sign up" /> */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mx-auto">
              <div className="z-0 flex justify-center">
                {isMember && !validUser ? (
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
          </div>
        </Modal>
      </section>
      {/* <BottomSection data={bottomData} /> */}
    </>
  );
};

export default Signin;
