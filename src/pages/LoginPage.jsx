import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

function LoginPage() {
  const [currentState, setCurrentState] = useState("Login"); // "Login" | "Sign Up" | "Forgot Password"
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const {login} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentState === "Sign Up" && !isDataSubmitted)  {
      console.log("User Signed Up:", { fullName, email, password });
      alert("Sign Up Successful");
      setCurrentState("Login");
      setIsDataSubmitted(false);
      setFullName("");
      setEmail("");
      setPassword("");
      return;
    }

    login(currentState ==="Sign Up" ? "signup" :"login",{fullName,email,password})

    if (currentState === "Login") {
      console.log("User Logged In:", { email, password });
      alert("Login Successful");
    }

    if (currentState === "Forgot Password") {
      console.log("Reset link sent to:", email);
      alert("Password reset link sent");
      setCurrentState("Login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:justify-evenly max-sm:flex-col gap-10 px-6 bg-gradient-to-br from-[#090913] via-[#161636] to-[#0f0f22] text-white transition-all">
      {/* --- Left Section (Logo) --- */}
      <div className="flex flex-col items-center gap-3 text-center">
        <img
          src={assets.logo_big}
          alt="App Logo"
          className="w-[min(30vw,220px)] drop-shadow-[0_0_25px_rgba(167,139,250,0.5)]"
        />
        <h1 className="text-2xl font-semibold text-violet-300 tracking-wide"></h1>
      </div>

      {/* --- Right Section (Form) --- */}
      <form
        onSubmit={handleSubmit}
        className="border border-gray-700 bg-[#111122]/80 p-8 flex flex-col gap-5 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.5)] w-[90%] max-w-sm backdrop-blur-2xl transition-all"
      >
        {/* --- Header --- */}
        <h2 className="font-semibold text-2xl flex justify-between items-center">
          {currentState === "Login"
            ? "Welcome Back"
            : currentState === "Sign Up"
            ? "Create Account"
            : "Reset Password"}

          <img
            src={assets.arrow_icon}
            alt="arrow"
            className="w-5 cursor-pointer rotate-90 opacity-70 hover:opacity-100 transition"
            onClick={() => {
              if (currentState === "Login") setCurrentState("Sign Up");
              else if (currentState === "Sign Up") setCurrentState("Login");
              else if (currentState === "Forgot Password") setCurrentState("Login");
            }}
            title="Switch Form"
          />
        </h2>

        {/* --- Input Fields --- */}
        {currentState === "Sign Up" && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Full Name"
            required
            className="bg-[#1c1c3b] border border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
          className="bg-[#1c1c3b] border border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
        />

        {currentState !== "Forgot Password" && (
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="bg-[#1c1c3b] border border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
          />
        )}

        {/* --- Submit Button --- */}
        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 transition text-white py-2 rounded-lg font-medium mt-2 shadow-md"
        >
          {currentState === "Login"
            ? "Login"
            : currentState === "Sign Up"
            ? "Sign Up"
            : "Send Reset Link"}
        </button>

        {/* --- Bottom Text --- */}
        <div className="text-center text-sm text-gray-400 space-y-2">
          {currentState === "Login" && (
            <>
              <p>
                Don’t have an account?{" "}
                <span
                  onClick={() => {
                    setCurrentState("Sign Up");
                    setIsDataSubmitted(false);
                  }}
                  className="font-medium text-violet-400 cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </p>
              <p>
                Forgot your password?{" "}
                <span
                  onClick={() => {
                    setCurrentState("Forgot Password");
                    setIsDataSubmitted(false);
                  }}
                  className="font-medium text-violet-400 cursor-pointer hover:underline"
                >
                  Reset Here
                </span>
              </p>
            </>
          )}

          {currentState === "Sign Up" && (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrentState("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-400 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          )}

          {currentState === "Forgot Password" && (
            <p>
              Remembered your password?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="font-medium text-violet-400 cursor-pointer hover:underline"
              >
                Back to Login
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
