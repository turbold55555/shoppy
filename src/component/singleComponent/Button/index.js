import React from 'react';
import  {AiOutlineLogin}  from "react-icons/ai";
const Tovch = () =>(
    
    <div className="text-shoppyColor border border-shoppyColor px-5 py-1 rounded cursor-pointer" 
   onClick={()=> alert('Нэвтрэх хэсэгт шилжинэ ')}
    > 
        <div className="flex flex-row items-center ">
        <AiOutlineLogin className="flex mr-2" />
         Нэвтрэх
        </div>
    </div>
   
) 
export default Tovch