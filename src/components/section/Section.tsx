import img1 from "../../assets/apple-B3cOfIDT.png";
import img2 from "../../assets/kiwi-Do64hCSg.png";
import img3 from "../../assets/leaf-C1v4Wmxv.png";
import img4 from "../../assets/lemon-B-yhuoNo.png";
import img5 from "../../assets/tomato-BArVx_-y.png"
import { FaArrowRight } from "react-icons/fa6";


const Section = () => {
  return (
    <div className="" >
        <div className="container">
            <div className="relative text-center" >
                <div className="absolute top-[-30px] left-[-100px] w-40" ><img className="w-full"  src={img3} alt="" /></div>
                <h1 className="text-3xl text-dark mt-20 w-fit ml-auto mr-auto"  >Taste the Healthy Difference</h1>
                <div className="absolute right-0 w-48" ><img className="w-full" src={img4} alt="" /></div>
            </div>
            <div className="w-full mt-32" >
                <p className="w-full md:w-1/2 relative z-30" >We know that <span className="text-red-500" >time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.</p>
            </div>

            <div className="w-full relative mt-20 mb-20" >
                <p className="w-full md:w-1/2 ml-auto relative z-30" >We know that <span className="text-red-500" >time</span> is the greatest value in the modern world.Our healthy meal plan delivery service Good Food in Miami is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meals.</p>
                <div className="absolute top-[-120px] md:top-[-70px] left:50 md:left-1/3" ><img src={img2} alt="" /></div>
            </div>

            <div className="relative " >
                <div className="absolute left-0 w-52 md:w-80 top-[-100px]"><img className="w-full" src={img5} alt="" /></div>
                <div className="w-fit ml-auto mr-auto flex items-center cursor-pointer group text-white relative z-30" >
                    <p className="bg-primary px-2 py-2 " >Choose your meal plan</p>
                     <div className="bg-primaryDark text-2xl py-2 px-1 group-hover:translate-x-2 duration-200" > <FaArrowRight /> </div>
                </div>
                <div className="absolute right-0 w-0 md:w-52 top-[-50px]" > <img src={img1} alt="" /> </div>
            </div>
           
        </div>
    </div>
  )
}

export default Section