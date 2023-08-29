"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BiSend } from "react-icons/bi";

const Contact = () => {
  const [email, setEmail] = useState("");

  //send data to localhost:3000/api/contact using axios

  const sendData = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.error("Please enter your email");
        return;
      }
      const { data } = await axios.post("/api/contact", {
        email: email,
      });
      toast.success("Email sent successfully");
      setEmail("");
      return data.response;
    } catch (error) {
      console.log(error);
      const errorMessage = await error.response.data.message;
      toast.error(errorMessage);
    }
  };
  return (
    <form className="w-full mx-auto max-w-[800px] py-8" onSubmit={sendData}>
      <div className="flex items-center shadow-xl shadow-purple-400 border px-6 border-purple-400 text-base text-primary duration-300  text-ellipsis rounded-full w-[95%] mx-auto">
        <input
          type="text"
          value={`${email}`}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email. We will contact you soon"
          className="flex-1 bg-transparent  outline-none capitalize py-4 placeholder-description text-base w-full"
        />
        <button
          type="submit"
          className=" px-6 py-2 bg-secondary rounded-full text-base text-white duration-300 hover:bg-opacity-80 hover:shadow-xl shadow-zinc-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
        >
          <BiSend size={24} />
        </button>
      </div>
    </form>
  );
};

export default Contact;
