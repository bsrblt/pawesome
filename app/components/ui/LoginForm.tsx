import React, { useEffect } from "react";
import FormField from "./FormField";
import Button from "./Button";
import GoogleButton from "./GoogleButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  onSubmit?: () => void;
  onNoAcc?: () => void;
  onNoJoin?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit = () => {},
  onNoAcc = () => {},
  onNoJoin = () => {},
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/checkout" });
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/checkout");
    }
  }, [status, router]);

  return (
    <div className="border-turq rounded-xl border-8 p-3 bg-turq/90 shadow-sh lg:max-h-[420px]">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Login</h2>
      <div className="flex sm:flex gap-1 justify-start text-sm mb-[20px]">
        <p> Not a member? </p>
        <p
          className="text-darkpur font-bold cursor-pointer z-10"
          onClick={onNoAcc}
        >
          Sign Up.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <span className="grid gap-4 justify-start">
          <GoogleButton onClick={handleSignIn} />
          or enter your account details:
        </span>

        <div className="grid lg:grid-cols-2 gap-6 mt-4">
          <div>
            <FormField
              label="Username"
              id="username"
              name="username"
              type="text"
              value=""
              onChange={() => {}}
              required
            />
          </div>
          <div>
            <FormField
              label="Password"
              id="password"
              name="password"
              type="password"
              value=""
              onChange={() => {}}
              required
            />
          </div>
          <div className="flex justify-between sm:items-end xl:mt-2 items-end gap-4 mt-2 sm:mt-6">
            <Button type="submit" setWidth="80px">
              Login
            </Button>
            <span className="grid sm:gap-2 mt-2">
              <p
                className="text-darkpur font-bold cursor-pointer z-10 text-sm"
                onClick={onNoJoin}
              >
                or continue without a membership.
              </p>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
