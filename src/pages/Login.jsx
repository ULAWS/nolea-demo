import { useState } from "react";
import { LoginPopup } from "../components/LoginPopup";
import logo from "../logo.svg";

export const Login = () => {
  const [loginPopup, setLoginPopup] = useState(false);

  return (
    <div className="w-full h-full relative flex flex-col items-center ">
      <img src={logo} className="mt-10 w-40" alt="logo" />
      <h1 className="text-5xl font-bold mt-10 text-[#7546db]">Welcome to Nolea demo!</h1>
      <div className="mt-40 flex flex-col items-center gap-y-10">
        <span className="font-semibold text-xl">Want to try?</span>
        <button
          className="bg-[#03ff9b] w-80 h-12 rounded-full text-white font-bold text-xl"
          onClick={() => {
            setLoginPopup(true);
          }}
        >
          Login
        </button>
      </div>
      {loginPopup && <LoginPopup setLoginPopup={setLoginPopup} />}
    </div>
  );
};
