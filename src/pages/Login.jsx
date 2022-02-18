import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, errorLogin } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="login-container flex items-center justify-center px-5">
      <div className="w-full md:w-1/2 lg:w-4/12 p-5 bg-white rounded-md shadow-lg">
        <h3 className="text-center text-2xl font-semibold mb-5">SIGN IN</h3>
        <form action="" className="flex flex-col flex-wrap gap-3 lg:gap-5">
          <input
            className="flex-1 border outline-none p-2 rounded-md text-lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-1 border outline-none p-2 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className={`mx-auto border px-8 py-2 rounded-md bg-primary text-lg font-semibold ${
              isFetching && "opacity-75 cursor-not-allowed"
            }`}
          >
            LOGIN
          </button>
          {errorLogin && (
            <div className="text-red-600 text-md mt-3 text-center">
              Something went wrong ...
            </div>
          )}
        </form>
        <div className="text-center mt-5">
          <div className="mb-2">
            <button>Do not you remember a password?</button>
          </div>
          <Link to="/register">
            <button>Create an account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
