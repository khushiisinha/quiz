import {React ,useState} from 'react'
import quizBg from "./assets/quiz1.jpg";
import Profile from "./Profile";
import QuizHead from "./QuizHead";
import { Link } from "react-router-dom";
import { allCategory } from './Data';
import { useNavigate } from 'react-router-dom';
function ChooseCategory(props) {
  const navigate=useNavigate();
  function handleStartQuiz(){
    props.getIndex>=0 ? navigate("/quiz-Page",{
      state:{
        getIndex:props.getIndex
      }
    }) : alert("Select Category");
           
  }
  return (
    <div className="flex flex-col justify-center items-center mt-16 md:mt-0">
          <div
            className="md:w-[100vh]  md:h-[80vh]  md:mt-10 flex-col rounded-2xl flex justify-center items-center"
            style={{
              backgroundImage: `url(${quizBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" md:w-[90vh] md:h-[70vh]   rounded-xl p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white opacity-80">
              <div className="md:text-3xl text-xl font-bold text-sky-900 text-center p-1 underline mt-2 md:mt-0">
                SELECT CATEGORY
              </div>
              <div className="flex md:gap-6 gap-4 flex-wrap md:mt-5 mt-3 justify-center md:p-4">
                {
                  allCategory.map((elem,index)=>{
                    return <QuizHead title={elem} index={index} setGetIndex={props.setGetIndex} getIndex={props.getIndex}/>
                  })
                }
                
                
              </div>
              <div className=" flex justify-center items-center w-full mt-8">
                <button className="   bg-orange-900 hover:bg-orange-800  p-2 text-white font-semibold text-lg rounded-xl " onClick={handleStartQuiz}>
                  Start Quiz 👉
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ChooseCategory