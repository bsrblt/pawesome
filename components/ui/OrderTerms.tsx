import React, { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";
import MiniButton from "./MiniButton"; // Import the provided MiniButton component

interface OrderTermsProps {
  onDiscountApply: (discount: number) => void;
}

const OrderTerms: React.FC<OrderTermsProps> = ({ onDiscountApply }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const [codeApplied, setCodeApplied] = useState(false);
  const [codeMessage, setCodeMessage] = useState(
    "Please enter a valid discount code."
  );
  const [codeAppliedSuccessfully, setCodeAppliedSuccessfully] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false); // State to control visibility of terms modal

  const validCode = enteredCode.includes("11");

  const handleDiscountCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (discountApplied) return;
    setEnteredCode(event.target.value.toUpperCase());
    setCodeApplied(false);
    setCodeAppliedSuccessfully(false);
    if (event.target.value === "") {
      setCodeMessage("Please enter a valid discount code.");
    }
  };

  const handleApplyDiscount = () => {
    if (discountApplied) return;
    setCodeApplied(true);
    if (!validCode) {
      setCodeMessage("Invalid code. Please try again.");
      setCodeAppliedSuccessfully(false);
      onDiscountApply(0);
    } else {
      setCodeMessage("Discount applied.");
      setCodeAppliedSuccessfully(true);
      setDiscountApplied(true);
      onDiscountApply(0.1);
    }
  };

  const handleRemoveDiscount = () => {
    setDiscountApplied(false);
    setCodeApplied(false);
    setCodeAppliedSuccessfully(false);
    setCodeMessage("Please enter a valid discount code.");
    setEnteredCode("");
    onDiscountApply(0);
  };

  const toggleTermsModal = () => {
    setShowTermsModal(!showTermsModal);
  };

  const handleTermsClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    toggleTermsModal();
  };

  const handleTermsCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTermsAccepted(event.target.checked);
  };

  return (
    <div className="h-full z-10 border-turq bg-rosy/70 rounded-xl border-8 p-3 shadow-sh max-h-[688px] min-h-[240px] overflow-y-auto overflow-x-hidden transition-all duration-500">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Codes and Terms</h2>
      <p className="text-sm mb-4">
        If you have a discount code, enter it below.
      </p>
      <section>
        <div className="mt-6">
          <span className="relative right-[2px]">
            <FormField
              label="Your Code:"
              id="discountCode"
              name="discountCode"
              value={enteredCode}
              onChange={handleDiscountCodeChange}
              placeholder="Enter discount code"
            />
          </span>
          {/* <span className="flex items-end justify-between mt-4 relative right-[2px]"></span> */}
          <div className="flex items-end justify-between mt-4 relative right-[2px]">
            {discountApplied ? (
              <Button onClick={handleRemoveDiscount}>Remove Discount</Button>
            ) : (
              <Button onClick={handleApplyDiscount}>Apply</Button>
            )}
            <p
              className={`text-sm relative mt-3 sm:ml-0 ml-2 ${
                codeAppliedSuccessfully ? "text-bermuda font-bold" : ""
              }`}
            >
              {codeMessage}
            </p>
          </div>
        </div>
      </section>

      <div className="my-6 relative right-[2px]">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="h-5 w-5 text-bermuda"
            checked={termsAccepted}
            onChange={handleTermsCheckboxChange}
          />
          <span className="flex gap-1 ml-2 text-sm text-gray-700">
            I accept the
            <p
              className="font-bold text-darkpur cursor-pointer"
              onClick={handleTermsClick}
            >
              terms and conditions.
            </p>
          </span>
        </label>
      </div>

      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-end">
              <MiniButton onClick={toggleTermsModal} className="text-red-600">
                X
              </MiniButton>
            </div>
            <h3 className="text-lg font-bold mb-2">Terms and Conditions</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
              ultricies massa, eu eleifend sapien. Vestibulum euismod eget velit
              nec sollicitudin. Fusce eget suscipit justo, sit amet aliquet
              felis. Sed eget scelerisque neque.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTerms;
