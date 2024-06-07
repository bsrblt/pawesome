"use client";
import React from "react";
import FileUploadInput from "app/components/ui/FileUploadInput";
import Button from "app/components/ui/Button";
import FormField from "app/components/ui/FormField";
import Image from "next/image";
import petcare from "../public/petcare.jpg";
import Background from "app/components/layout/Background";
import { bottomSectionData } from "app/lib/bottomSectionData";
import BottomSection from "app/components/layout/BottomSection";

const Careers = () => {
  const bottomData = bottomSectionData.careers;
  const handleBrowse = (file: File) => console.log("Selected file:", file);

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
        value={""}
        onChange={() => {}}
        className="w-full bg-gray-100 rounded-lg border border-gray-400 focus:border-color2 focus:ring-1 focus:ring-color2 h-24 sm:h-32 text-base outline-none text-black py-1 px-3 leading-6 transition-colors duration-200 ease-in-out shadow-sh"
      ></textarea>
    </div>
  );
  const emailInput = (
    <div className="flex items-center justify-between gap-4 p-1 mb-1 min-w-[15rem]">
      <label className="block text-sm font-medium text-darkpur fontpop-3">
        E-mail
      </label>
      <FormField
        label=""
        name="email"
        type="email"
        id="email"
        value={""}
        onChange={() => {}}
        minLength={8}
        maxLength={50}
        placeholder="your@mail.com"
      />
    </div>
  );
  const positionText = (
    <div className="grid">
      <div className="text-md sm:text-3xl mt-1 antialiased pl-1">
        No available positions at this time.
      </div>
      <div
        id="blog-content"
        className="text-sm sm:text-lg md:text-xl text-justify leading-tight sm:py-4 mb-2 antialiased p-1"
      >
        Why not send us your CV along with a message so that we know where to
        look for in case we need your qualities?
      </div>
    </div>
  );
  const mainTitle = (
    <h1 className="text-3xl md:text-4xl font-bold text-darkpur mb-12 sm:mb-16 sm:-mt-6 text-center font-lobster tracking-wider">
      Care to join us?
    </h1>
  );
  const submitButton = (
    <div className="p-1">
      <Button type="button" onClick={() => {}}>
        Submit
      </Button>
    </div>
  );
  const cvForm = (
    <div className="grid p-2 mt4 sm:p-8 text-darkpur border-darkpur border-transparent rounded-xl bg-turq shadow-sh">
      {positionText}
      <div className="grid gap-4">
        <div className="grid sm:flex justify-between sm:items-center gap-4">
          <FileUploadInput onChange={handleBrowse} isValid={true} />
          {emailInput}
        </div>
        {message}
        {submitButton}
      </div>
    </div>
  );

  return (
    <>
      <Background>
        <div className="flex flex-col justify-start items-center z-10">
          {mainTitle}
          <div className="container mx-auto px-4">
            <div className="grid sm:flex gap-4 justify-center">
              <Image
                alt="pet care"
                src={petcare}
                height={550}
                className="border-4 border-rosy/90 rounded-xl z-10 shadow-sh"
              ></Image>
              {cvForm}
            </div>
          </div>
        </div>
      </Background>
      <BottomSection data={bottomData} />
    </>
  );
};

export default Careers;
