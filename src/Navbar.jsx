import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky top-0  bg-cyan-800 h-12 md:h-20 w-full flex  justify-between items-center z-10 overflow-hidden">
      <div className="items-center flex justify-center md:ml-4 ml-2">
        <div className="text-white font-bold md:text-5xl text-xl">QuizHub</div>
      </div>

      <div className="flex gap-4 md:gap-8 items-center text-white  text-xs md:text-xl md:mr-5 mr-1">
        <NavLink
          to="/home"
          className=" hover:underline"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold", textDecoration: "underline" } : {}
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className=" hover:underline"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold", textDecoration: "underline" } : {}
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact-us"
          className=" hover:underline"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold", textDecoration: "underline" } : {}
          }
        >
            Contact Us
        </NavLink>
        
      </div>
    </div>
  );
}

export default Navbar;
