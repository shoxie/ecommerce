import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import { BiSmile, BiMeh } from "react-icons/bi";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { isFetching, errorRegister } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordConfirm === password) {
      register(dispatch, { username, email, password });
    }
    setShowModal(true);
  };

  return (
    <div className="register-container flex items-center justify-center px-5">
      <div className="w-full md:w-1/2 p-5 bg-white rounded-md shadow-lg">
        <h3 className="text-center text-2xl font-semibold mb-5">
          CREATE AN ACCOUNT
        </h3>
        <form action="" className="flex flex-wrap gap-3 lg:gap-5">
          <input
            className="flex-1 border outline-none p-2 rounded-md"
            type="text"
            placeholder="Name"
          />
          <input
            className="flex-1 border outline-none p-2 rounded-md"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="flex-1 border outline-none p-2 rounded-md"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-1 border outline-none p-2 rounded-md"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="flex-1 border outline-none p-2 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="flex-1 border outline-none p-2 rounded-md"
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <div className="text-lg text-justify">
            By creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <span className="font-semibold">PRIVATE POLICY</span>
          </div>
          <button
            onClick={handleSubmit}
            className={`ml-auto border px-8 py-2 rounded-md bg-primary font-semibold ${
              isFetching && "opacity-75 cursor-not-allowed"
            }`}
          >
            CREATE
          </button>
        </form>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 z-20 px-5 w-[100vw] h-[100vh] flex wrapper_modal">
          <div className="m-auto bg-white rounded-md shadow-lg p-8 w-1/2">
            <div className="w-full">
              {errorRegister ? (
                <BiMeh className="text-red-600 text-3xl mb-5 text-center w-full" />
              ) : (
                <BiSmile className="text-red-600 text-3xl mb-5 text-center w-full" />
              )}
            </div>
            <div className="text-center text-xl mb-5">
              {errorRegister ? "Something went wrong ... " : "Successful!"}
            </div>
            <div className="w-full flex items-center justify-center">
              <Link to="/">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-10 py-2 w-fit border bg-primary rounded-md"
                >
                  Close
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
