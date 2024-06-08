import React, { useState } from "react";
import Button from "./Button";
import MiniButton from "./MiniButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface WelcomeOrderProps {
  onSubmit?: () => void;
  onNoAcc?: () => void;
  onNoJoin?: () => void;
}

const WelcomeOrder: React.FC<WelcomeOrderProps> = ({
  onSubmit = () => {},
  onNoAcc = () => {},
  onNoJoin = () => {},
}) => {
  const session = useSession();
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(
    "123 Main St, Rand District, City, 12345"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (termsAccepted) {
      onSubmit();
    } else {
      alert("You must accept the terms and conditions to proceed.");
    }
  };

  const toggleTermsModal = () => {
    setShowTermsModal(!showTermsModal);
  };

  const handleTermsClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setShowTermsModal(true);
  };

  const handleTermsCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsAccepted(e.target.checked);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddress(e.target.value);
  };

  const toggleAddressModal = () => {
    setShowAddressModal(!showAddressModal);
  };

  return (
    <div className="border-turq rounded-xl border-8 p-3 bg-turq/90 shadow-sh lg:min-h-[420px]">
      <section className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          {`Welcome, ${session?.data?.user?.name}`}
        </h2>
        <img
          alt="userAvatar"
          src={session?.data?.user?.image ?? "/default-avatar.png"}
          className="rounded-[3rem]"
        />
      </section>
      <div className="flex gap-1 justify-start text-sm mb-[20px]">
        <p>Not you?</p>
        <p
          className="text-darkpur font-bold cursor-pointer z-10"
          onClick={onNoAcc}
        >
          Log out.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div id="addresses" className="mt-4">
          <div className="mb-4">
            <h3 className="font-bold text-gray-700">
              Preferred Delivery Address:
            </h3>
            <p className="text-gray-700">{selectedAddress}</p>
            <p className="text-gray-700 mb-6">Phone Number: (123) 456-7890</p>
            <Button onClick={toggleAddressModal} setWidth="200px">
              Change Delivery Address
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-end gap-2 sm:mt-8">
          <Button type="submit">Place Order</Button>
          <div className="grid sm:flex flex-row sm:my-4 my-2 sm:gap-2 relative top-2">
            <label className="flex items-start justify-start">
              <input
                type="checkbox"
                className="h-5 w-5 text-bermuda"
                checked={termsAccepted}
                onChange={handleTermsCheckboxChange}
              />
              <span
                className="sm:flex grid sm:gap-[0px] sm:ml-2 ml-1
               text-sm text-gray-700 mt-[2px]"
              >
                I accept the
              </span>
            </label>
            <p
              className="font-bold text-darkpur cursor-pointer sm:ml-0 ml-6"
              onClick={handleTermsClick}
            >
              terms and conditions.
            </p>
          </div>
        </div>
      </form>
      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-center">
              Terms and Conditions
            </h3>
            <p className="text-sm sm:w-[28rem] w-[15rem] mb-4 text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              tempore veniam! Sit ratione babanızı yalayacağız blanditiis amet
              unde, illum inventore incidunt voluptas dignissimos sint, numquam
              cupiditate magni sapiente fuga babanızı yalayacağız repellendus
              esse labore? Delectus, recusandae? Facilis dolor repellendus
              expedita cum facere maxime et ratione repudiandae nobis provident?
              babanızı yalayacağız Totam corporis ut quod repellendus natus
              tempora at, corrupti, inventore ratione illo molestias obcaecati
              sequi minima. Voluptas suscipit babanızı yalayacağız
              necessitatibus asperiores architecto fugit babanızı yalayacağız
              dolorum odio. Veniam dignissimos exercitationem, babanızı
              yalayacağız iure necessitatibus amet babanızı yalayacağız
              accusantium delectus at alias odio corporis. Aliquid babanızı
              yalayacağız quibusdam eveniet babanızı yalayacağız quaerat
              consequuntur. Quidem ea voluptates minus debitis.
            </p>
            <span className="flex justify-center">
              <Button onClick={toggleTermsModal} setWidth="80px">
                Close
              </Button>
            </span>
          </div>
        </div>
      )}
      {showAddressModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-end">
              <MiniButton onClick={toggleAddressModal} className="text-red-600">
                X
              </MiniButton>
            </div>
            <h3 className="text-lg font-bold mb-2">Choose Address</h3>
            <form>
              <div className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="address"
                    value="123 Main St, Cityville, State, 12345"
                    checked={
                      selectedAddress === "123 Main St, Cityville, State, 12345"
                    }
                    onChange={handleAddressChange}
                    className="mr-2"
                  />
                  <span>123 Main St, Cityville, State, 12345</span>
                </label>
              </div>
              <div className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="address"
                    value="456 Elm St, Townsville, State, 67890"
                    checked={
                      selectedAddress === "456 Elm St, Townsville, State, 67890"
                    }
                    onChange={handleAddressChange}
                    className="mr-2"
                  />
                  <span>456 Elm St, Townsville, State, 67890</span>
                </label>
              </div>
              <div className="flex justify-end">
                <Button onClick={toggleAddressModal} setWidth="80px">
                  Close
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeOrder;
