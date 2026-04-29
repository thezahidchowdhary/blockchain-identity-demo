"use client";

import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    aadhar: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("https://zahid-backend-7ykf.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("❌ Error connecting to server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-purple-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-xl backdrop-blur-lg shadow-lg"
      >
        <h1 className="text-2xl mb-4 font-bold text-center">
          Register Identity
        </h1>

        <input
          placeholder="Name"
          className="block mb-3 p-2 text-black rounded w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Aadhar ID"
          className="block mb-3 p-2 text-black rounded w-full"
          onChange={(e) => setForm({ ...form, aadhar: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="block mb-3 p-2 text-black rounded w-full"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="bg-purple-600 px-4 py-2 rounded w-full hover:bg-purple-700">
          Submit
        </button>

        <p className="mt-4 text-center">{message}</p>
      </form>
    </div>
  );
}