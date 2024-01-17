import React, { useState } from "react";
import QuizPage from "./QuizPage";
import ChooseCategory from "./ChooseCategory";
import { allCategory } from './Data';
function QuizDashboard() {
  
  const [showQuiz,setShowQuiz]=useState(false);
  const [getIndex,setGetIndex]=useState();
  const [category,setCategory]=useState("");
  return (
    <div className=" flex min-h-full justify-center w-full">
      
    <div className="flex flex-col justify-center items-center md:w-full ">
        <div className=" text-center flex flex-col justify-center mt-12 md:mt-4 md:w-full gap-2">
          <span className="font-extrabold md:text-4xl text-cyan-900 text-2xl">
            Welcome back!
          </span>

          <span className="md:text-3xl text-cyan-800 font-bold text-xl ">
            You're now ready to dive into the exciting world of quizzes.
          </span>
        </div>

        <ChooseCategory setGetIndex={setGetIndex} getIndex={getIndex} setShowQuiz={setShowQuiz}/>
      </div>
    </div>
  );
}

export default QuizDashboard;
