import {React,useEffect,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { allCategory ,categoryImage} from './Data';
function QuizPage(props) {
  const navigate=useNavigate();
  const location=useLocation();
  const [index,setIndex]=useState(null);
useEffect(()=>{
  if(location.state==null){
    navigate("/quiz-dashboard");
  }
  if(location.state!=null){
    setIndex(location.state.getIndex);
  }
       
})
  return (
    <div className='flex flex-col items-center  w-full gap-4 '>
      <div className='mt-6 font-bold md:text-2xl  text-lg text-cyan-800 text-center'><span>The quiz adventure awaits—let the games begin!</span></div>
         <div className=' flex   border-2 border-black' 
          style={{
            backgroundImage: `url(${categoryImage[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
         >
          <div className=' bg-white p-4 opacity-80 items-center  gap-4 flex flex-col '> 
             
             <div className='font-bold  text-xl md:text-2xl text-center'>Cinephile Showdown: The Ultimate Film Quiz</div>
                        <div className='border-2 border-black p-4'>
                                   <div><span>Difficulty</span>
                                   <span>Meidum</span>
                                   <span>High</span></div>   
                        </div>
           </div>
         </div>
    </div>
  )
}

export default QuizPage