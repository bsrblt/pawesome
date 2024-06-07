import React from "react";
import FormField from "./FormField";
import Button from "components/ui/Button";

interface ShippingFormProps {
  formData: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onHasAcc: () => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  formData,
  handleInputChange,
  handleFormSubmit,
  onHasAcc,
}) => (
  <div className="border-turq rounded-xl border-8 p-3 bg-turq/90 shadow-sh h-full">
    <h2 className="text-2xl font-bold text-gray-700 mb-4">
      Shipping Information
    </h2>
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col justify-between h-full z-10"
    >
      <div>
        <div className="grid grid-cols-2 md:grid-cols- gap-4 mb-4">
          <FormField
            label="First Name"
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Last Name"
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <FormField
          label="Address"
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleInputChange}
          setWidth="100%"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols- gap-1 my-4">
          <FormField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <FormField
            label="Phone"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
            pattern="\d*"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="flex gap-2 mt-4">
            <p> Already have an account? </p>
            <p
              className="text-darkpur font-bold cursor-pointer z-30"
              onClick={onHasAcc}
            >
              Login.
            </p>
          </span>
          <Button type="submit">Place Order</Button>
        </div>
      </div>
    </form>
  </div>
);

export default ShippingForm;
