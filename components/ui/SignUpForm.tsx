// SignUpForm.tsx
import React from "react";
import FormField from "./FormField";
import Button from "./Button";

interface SignUpFormProps {
  formData: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
  onHasAcc?: () => void;
  onNoJoin?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit = () => {},
  onHasAcc = () => {},
  onNoJoin = () => {},
  formData,
  handleInputChange,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };
  const username = (
    <FormField
      label="Username"
      id="username"
      name="username"
      type="text"
      value=""
      onChange={() => {}}
      required
    />
  );
  const password = (
    <FormField
      label="Password"
      id="password"
      name="password"
      type="password"
      value=""
      onChange={() => {}}
      required
    />
  );
  const confirmPassword = (
    <FormField
      label="Confirm Password"
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      value=""
      onChange={() => {}}
      required
    />
  );
  const email = (
    <FormField
      label="Email"
      id="email"
      name="email"
      type="email"
      value=""
      onChange={() => {}}
      required
    />
  );
  const phone = (
    <FormField
      label="Phone"
      id="phone"
      name="phone"
      type="tel"
      value=""
      onChange={() => {}}
      required
      pattern="\d*"
    />
  );
  const address = (
    <FormField
      label="Address"
      id="address"
      name="address"
      type="text"
      value=""
      onChange={() => {}}
      required
    />
  );
  const firstName = (
    <FormField
      label="First Name"
      id="firstName"
      name="firstName"
      type="text"
      value=""
      onChange={() => {}}
      required
    />
  );
  const lastName = (
    <FormField
      label="Last Name"
      id="lastName"
      name="lastName"
      type="text"
      value=""
      onChange={() => {}}
      required
    />
  );

  return (
    <div className="border-turq rounded-xl border-8 p-3 bg-turq/90 shadow-sh">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-full"
      >
        <div>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-4 mb-4">
              {username}
              <div className="flex gap-1 mt-12 text-sm">
                <p> Already a member? </p>
                <p
                  className="text-darkpur font-bold cursor-pointer z-30"
                  onClick={onHasAcc}
                >
                  Login.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {password}
              {confirmPassword}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {firstName}
              {lastName}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
              {email}
              {phone}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols- gap-4 my-4">
            {address}
          </div>

          <div className="sm:flex grid items-center justify-between gap-4">
            <div>
              <Button type="submit">Sign Up</Button>
            </div>
            <span className="grid gap-2 mt-4">
              <div className="sm:flex grid gap-1">
                <p>or </p>
                <p
                  className="text-darkpur font-bold cursor-pointer z-30"
                  onClick={onNoJoin}
                >
                  Continue without a membership.
                </p>
              </div>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
