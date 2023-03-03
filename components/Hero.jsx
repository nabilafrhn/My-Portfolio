import React from "react";
import Navbar from "./Navbar";

const Hero = ({ heading, message }) => {
  return (
    <>
      <Navbar isSticky={true} />
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] mt-[-3m]">
          <h2 className="text-5xl text-center font-bold">{heading}</h2>
          <p className="py-5 text-center text-xl">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
