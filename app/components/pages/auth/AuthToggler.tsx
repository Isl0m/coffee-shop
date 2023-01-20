import { FC } from "react";

type Props = {
  isLogin: boolean;
  handleClick: () => void;
};

const AuthToggler: FC<Props> = ({ isLogin, handleClick }) => {
  return (
    <>
      <div className="mt-2">
        {isLogin ? "Don't have an account?" : "Have an account?"}
        <button className="ml-2 text-indigo-500" onClick={handleClick}>
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </div>
    </>
  );
};

export default AuthToggler;
