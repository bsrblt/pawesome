import React, { useState } from "react";
import Button from "./Button";
import FormField from "./FormField";

interface DiscountProps {
  onDiscountApply: (discount: number) => void;
}

const Discount: React.FC<DiscountProps> = ({ onDiscountApply }) => {
  const [enteredCode, setEnteredCode] = useState("");
  const [codeApplied, setCodeApplied] = useState(false);
  const [codeMessage, setCodeMessage] = useState("");
  const [codeAppliedSuccessfully, setCodeAppliedSuccessfully] = useState(false);
  const [discountApplied, setDiscountApplied] = useState(false);

  const validCode = enteredCode.includes("11");

  const handleDiscountCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (discountApplied) return;
    setEnteredCode(event.target.value.toUpperCase());
    setCodeMessage("");
    setCodeApplied(false);
    setCodeAppliedSuccessfully(false);
    if (event.target.value === "") {
      setCodeMessage("Please enter your discount code.");
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
    setCodeMessage("Discount code removed.");
    setEnteredCode("");
    onDiscountApply(0);
  };

  return (
    <div className="h-full z-00 border-turq bg-rosy/70 rounded-xl border-8 p-3 shadow-sh max-h-[688px] min-h-[240px] overflow-y-auto overflow-x-hidden transition-all duration-500">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Discount Options
      </h2>
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

          <div className="flex items-end justify-between sm:mt-8 mt-4 relative right-[2px]">
            {discountApplied ? (
              <Button onClick={handleRemoveDiscount}>Cancel</Button>
            ) : (
              <Button onClick={handleApplyDiscount}>Apply</Button>
            )}
            <p
              className={`text-sm relative mt-3 sm:ml-0 ml-2 ${
                codeAppliedSuccessfully ? "text-darkpur/80 font-bold" : ""
              }`}
            >
              {codeMessage}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discount;
