import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const usernameRef = useRef();
  const passRef = useRef();
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const [hardcodedLoginDetails] = useState({
    username: "something",
    password: "******",
  });

  function handleUsernameFocus() {
    usernameRef.current.value = hardcodedLoginDetails.username;
    passRef.current.value = hardcodedLoginDetails.password;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passRef.current.value;

    if (enteredUsername.length < 5) {
      setUsernameError(
        "Username is required and must be at least 5 characters long."
      );
    } else {
      setUsernameError("");
    }

    if (!enteredPassword || enteredPassword.length < 5) {
      setPasswordError(
        "Password is required and must be at least 5 characters long."
      );
    } else {
      setPasswordError("");
    }

    if (
      enteredUsername === "" &&
      enteredPassword === "" &&
      !usernameError &&
      !passwordError
    ) {
      alert("Please enter valid details");
    } else if (!usernameError && !passwordError) {
      // If both are valid, redirect to "now_playing"
      navigate("now_playing");
    }
  }

  return (
    <div className="flex max-w-sm mx-auto items-center justify-center h-screen ">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="username"
            ref={usernameRef}
            onFocus={handleUsernameFocus} // Call handleUsernameFocus when focused
          />
          {usernameError && (
            <p className="text-red-500 text-xs italic">{usernameError}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*****"
            ref={passRef}
          />
          {passwordError && (
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
