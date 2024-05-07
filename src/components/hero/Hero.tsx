import img from "../../assets/hero-BCogpiE1.png"
import bgImage from "../../assets/heroBg-Ce9qioFl.png"
import { FaArrowRight } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className="relative z-[-1] bg-center bg-cover pb-4" style={{backgroundImage: `url(${bgImage})`}} >
        <div className="container">
            <div className="flex justify-between flex-col-reverse md:flex-row gap-4 items-center min-h-[600px]">
                <div className="text-dark space-y-7" >
                    <h1 className=" text-3xl sm:text-5xl " >Fresh & Healthy Meal Plan <span className="font-cursive text-secondary text-5xl sms:text-7xl" >Delivery</span> in Miami</h1>
                    <p className="" >Delicious Meals Delivered to Your Door <br /> From $132.95 per week</p>
                    <div className="flex w-fit  cursor-pointer" ><span  className="bg-primary px-3 py-2 text-white cursor-pointer" >Choose your meal plan</span> <span className="bg-primaryDark py-3 px-3 text-white cursor-pointer" > <FaArrowRight /> </span> </div>
                </div>
                <div> <img className="w-full" src={img} alt="hero_image" /> </div>
            </div>
        </div>
    </div>
  )
}

export default Hero