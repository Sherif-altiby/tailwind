import bgImage from "../../assets/polygon-BoHGWnV6.png"
import { FaUser } from "react-icons/fa6";

const About = () => {
  return (
    <>
        <div style={{backgroundImage: `url(${bgImage})`}} className="py-10">
        <div className="container">
            <h1 className="text-white text-center text-5xl" data-aos="fade-up" data-aos-duration="1500" >About Us</h1>
            <div className="bg-white w-full p-3 sm:p-10 rounded-md mt-10" data-aos="fade-right" data-aos-duration="1500" >
                <p className=" text-dark text-md text-center sm:text-left sm:text-lg  " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloribus blanditiis culpa ipsa autem! Quas in ut cumque quo, eum ab ea inventore voluptatum at dignissimos repellat placeat quaerat veniam fugit? Quasi quidem, saepe tenetur quam nihil velit nobis eum ad hic odio mollitia itaque consectetur eaque unde cumque possimus reprehenderit quas beatae praesentium consequatur? Eum magni doloremque obcaecati necessitatibus soluta doloribus quos temporibus aperiam, at harum earum, commodi, eligendi omnis fugiat error exercitationem ullam labore culpa aliquam possimus pariatur? Atque repudiandae beatae animi ducimus voluptate minima temporibus neque libero dolore ipsam, accusamus omnis ullam id aspernatur, quas fuga esse.</p>
                <div className="flex gap-3 bg-primary text-white py-3 px-4 w-fit ml-auto mr-auto mt-4 sm:mt-10 rounded-md items-center  cursor-pointer hover:scale-110 duration-200 " > <div> <FaUser /> </div> <p>My Account</p> </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About