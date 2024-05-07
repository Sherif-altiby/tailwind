import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="mt-[200px] text-white" data-aos="zoom-in" data-aos-duration="1500" >
        <div className="container bg-[#BB2C51] rounded-tr-[40px] rounded-tl-[40px]">
            <h1 className="text-center text-5xl pt-10" > Contact US </h1>
            <div className="flex justify-between gap-5 sm:flex-row  flex-col py-10 border-b-2 border-white border-solid	" >
                <div className="flex flex-col items-center sm:gap-6"> <div className="text-5xl"> <FaLocationDot /> </div> <div>Egypt</div> </div>
                <div className="flex flex-col items-center sm:gap-6"> <div className="text-5xl"> <MdEmail /> </div> <div>sherifahmed852002@gmail.com</div> </div>
                <div className="flex flex-col items-center sm:gap-6"> <div className="text-5xl"> <FaPhone /> </div> <div>+20 1017 143 343</div> </div>
            </div>
            <div className="text-center py-5" >
                <p> © 2024 SHERIF. All rights reserved </p>     
            </div>
        </div>
    </div>
  )
}

export default Contact