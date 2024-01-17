import React from "react";
import { Link } from "react-router-dom";
import quizBg from "./assets/quiz-bg.png";
function Login(props) {
  return (
    <div
      className=" relative md:h-80 h-72 md:w-96 flex flex-col items-center shadow-xl border-4 border-cyan-800  p-5 gap-4  md:rounded-r-xl md:rounded-b-none rounded-b-xl"
      
    >
      <button className="absolute top-2 right-2 border-cyan-800 border-2 p-1" onClick={()=>{
        props.setLogin(false);
      }}>Close</button>
      <span className=" px-1 text-cyan-800 text-3xl font-bold underline py-4">
        LOGIN
      </span>
      <input
        type="text"
        className="outline-none  w-72 p-2 font-semibold border-l-8 border-cyan-800 bg-cyan-50"
        placeholder="Username"
      />
      <input
        type="text"
        className="outline-none  w-72 p-2 font-semibold border-l-8 border-cyan-800 bg-cyan-50"
        placeholder="Password"
      />
      <Link
        to="/quiz-dashboard"
        className=" bg-cyan-800 text-white p-1 px-2 text-xl font-semibold rounded-2xl"
      >
        Submit
      </Link>
    </div>
  );
}

export default Login;
