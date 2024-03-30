import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../store/features/userSlice";
import { auth } from "../utils/firebase";
import { PageLoader, SmallLoader } from "./PageLoader";

export const LoginPopup = ({ setLoginPopup }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(setCurrentUser({ email: user.email, uid: user.uid }));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Invalid email or password!");
        console.log(errorCode, errorMessage);
        setLoading(false);
      });
  };
  return (
    <div className="fixed w-screen h-screen backdrop-blur bg-black/50 top-0 left-0">
      <form
        onSubmit={onLogin}
        className="relative shadow-xl rounded-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 min-w-96 w-2/5 h-3/5 bg-white flex flex-col items-center justify-center gap-y-8 px-10"
      >
        <button
          type="button"
          className="absolute top-4 right-8 text-3xl font-bold"
          onClick={() => setLoginPopup(false)}
        >
          x
        </button>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 bg-black/10 rounded-lg w-80 "
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          className="px-4 py-2 bg-black/10 rounded-lg w-80 "
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="bg-red-100 text-red-900 w-80 rounded text-xs -mt-4 px-2 py-1">{error}</div>}
        <button
          type="submit"
          className="bg-[#7546db] rounded-full w-60 h-10 mt-8 text-white flex items-center justify-center"
        >
          {loading ? <SmallLoader size={40} /> : "Login"}
        </button>
      </form>
    </div>
  );
};
