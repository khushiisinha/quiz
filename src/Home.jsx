import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import quizBg from "./assets/undraw-quiz.svg";
import quiz2 from "./assets/quiz8.jpg";
function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div
      className=" w-full  flex-col min-h-full h-screen font-serif bg-none md:bg-url['./assets/undraw-quiz.svg'] bg-right bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${quizBg})`,

      //   backgroundPosition: "right",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="flex justify-center items-center md:w-full pt-8 ">
        <span className="text-cyan-900  md:text-4xl  font-extrabold text-center leading-relaxed">
          Where learning meets excitement <br />– welcome to our quiz universe!
        </span>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center w-full md:mt-28 mt-20 ">
        <div
          className="  md:w-auto flex flex-col  gap-4 md:gap-10  md:p-12 p-6 justify-center items-center  md:h-80 bg-cyan-800 hover:bg-cyan-700 "
         
        >
          <div className=" md:text-3xl text-xl font-bold underline text-white text-center  ">
            Challenge your mind, embrace the quiz!
          </div>

          <div className="text-white text-base md:text-xl font-semibold text-center">
            Unlock knowledge, one question at a time
          </div>
          <div className="text-white text-lg font-semibold text-center flex gap-1 md:text-xl">
            Get Started:
            <button
              className="font-bold hover:underline  text-center"
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
              }}
            >
               Log in to Quiz!
            </button>
            👈
          </div>
          <div className="font-semibold text-white">
            Don't have an account?{" "}
            <button
              className="font-bold text-xl hover:underline"
              onClick={() => {
                setShowSignup(true);
                setShowLogin(false);
              }}
            >
              Signup
            </button>
          </div>
        </div>

        {console.log(showLogin)}

        {!showLogin && showSignup && (
          <Signup setLogin={setShowLogin} setSignup={setShowSignup} />
        )}
        {!showSignup && showLogin && <Login setLogin={setShowLogin} setSignup={setShowSignup}/>}
      </div>
    </div>
  );
}

export default Home;
