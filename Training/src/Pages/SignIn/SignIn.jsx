import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim()) return alert("Please enter your email.");
    if (!password.trim()) return alert("Please enter your password.");
    // Navigate to dashboard after login
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-[#080808] flex items-center justify-center px-4"
      style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Glow */}
      <div className="fixed -top-40 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="fixed -bottom-40 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />

      {/* Grid */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      <div className="relative z-10 w-full max-w-md bg-[#111111] border border-orange-500/25 rounded-2xl p-10 shadow-2xl">

        {/* Back */}
        <button onClick={() => navigate("/")}
          className="absolute top-4 left-5 text-gray-500 hover:text-white text-sm bg-transparent border-none cursor-pointer transition-colors flex items-center gap-1">
          ← Back
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-4xl">⚡</span>
          <h2 className="text-2xl font-extrabold text-white mt-3 mb-1">Welcome Back</h2>
          <p className="text-sm text-gray-500">Sign in to your Pro Academy account</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-1.5">Email Address</label>
          <input type="email" placeholder="Enter your email" autoComplete="off"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm outline-none focus:border-orange-500 placeholder:text-gray-600 transition-colors" />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-1.5">Password</label>
          <input type="password" placeholder="Enter your password" autoComplete="current-password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white text-sm outline-none focus:border-orange-500 placeholder:text-gray-600 transition-colors" />
        </div>

        {/* Submit */}
        <button onClick={handleLogin}
          className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-base rounded-xl cursor-pointer border-none shadow-lg shadow-orange-900/40 transition-all mb-4">
          Login →
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-500 font-semibold hover:text-orange-400 transition-colors">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;