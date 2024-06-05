"use client";
import React, { useState } from "react";
import Button from "components/ui/Button";
import FormField from "components/ui/FormField";
import { bottomSectionData } from "lib/bottomSectionData";
import BottomSection from "components/layout/BottomSection";
import OfficeMap from "components/layout/OfficeMap";
import Background from "components/layout/Background";
import PageTitle from "components/ui/PageTitle";
import Image from "next/image";
import contactus from "public/contactus.jpg";

const Contact = () => {
  const bottomData = bottomSectionData.contact;
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const messageChangeHandler = (e: any) => {
    setEnteredMessage(e.target.value);
    setMessageSent(false);
  };
  const emailChangeHandler = (e: any) => {
    setEnteredEmail(e.target.value);
    setMessageSent(false);
  };

  const submitHandler = () => {
    setEnteredEmail("");
    setEnteredMessage("");
    setMessageSent(true);
  };

  const message = (
    <div id="message-textarea" className="relative mb-2 p-1">
      <label
        htmlFor="message"
        className="leading-6 text-xs sm:text-sm sm:leading-7 text-darkpur fontpop-3"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        minLength={10}
        maxLength={160}
        value={enteredMessage}
        onChange={messageChangeHandler}
        className="w-full bg-gray-100 rounded-lg border border-gray-400 focus:border-color2 focus:ring-1 focus:ring-color2 h-24 sm:h-32 text-base outline-none text-black py-1 px-4 leading-6 transition-colors duration-200 ease-in-out shadow-sh"
      ></textarea>
    </div>
  );
  const emailInput = (
    <div className="flex items-center justify-between gap-4 px-1 mb-1">
      <label className="block text-sm font-medium text-darkpur">E-mail</label>
      <FormField
        label=""
        name="email"
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailChangeHandler}
        minLength={8}
        maxLength={50}
        placeholder="your@mail.com"
      />
    </div>
  );

  const submitButton = (
    <div className="p-1">
      <Button type="button" onClick={submitHandler}>
        Send
      </Button>
    </div>
  );

  return (
    <>
      <Background>
        <div className="container mx-auto px-4">
          <PageTitle text="Contact Us" />
          <section className="md:flex grid mx-auto gap-8 justify-center">
            <div className="grid p-2 sm:p-8 rounded-xl bg-turq shadow-sh">
              <OfficeMap />
            </div>

            <div className=" p-2 sm:p-8 text-darkpur rounded-xl bg-turq shadow-sh">
              <div className="grid gap-4 justify-center">
                <div className="grid justify-between items-center gap-4">
                  {emailInput}
                  {message}
                  <div className="flex justify-between">
                    {submitButton}
                    {messageSent ? (
                      <p className="py-4 text-darkpur/80 font-bold">
                        Message sent.
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <Image
              alt="pet care"
              src={contactus}
              width={550}
              className="border-8 p-8 bg-rosy border-rosy/90 rounded-xl z-10 shadow-sh"
            ></Image>
          </section>
        </div>
      </Background>
      <BottomSection data={bottomData} />
    </>
  );
};

export default Contact;
