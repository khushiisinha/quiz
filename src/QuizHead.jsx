import React, { useState } from "react";

function QuizHead(props) {
  const [border,setBorder]=useState(false);
  return (
    <button
      className={`bg-blue-500 rounded-2xl flex justify-center items-center
       text-white md:text-2xl text-lg font-semibold text-center hover:underline p-2 md:p-6  ${(props.getIndex==props.index) ? "border-4 border-red-700":"border-4 border-white"}`}
         onClick={()=>{
          props.setGetIndex(props.index);
         }}
         >
      {props.title}
      
    </button>
  );
}

export default QuizHead;
