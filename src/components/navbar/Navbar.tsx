import { FaCaretDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import { ListType } from "../types";

const naveLinks: ListType = [
    {
        id: 1, 
        name: "Home",
        link: "#"
    },
    {
        id: 2, 
        name: "About",
        link: "#"
    },
    {
        id: 3, 
        name: "Contact",
        link: "#"
    },
];

const dropDownLinks: ListType = [
    {
        id: 4,
        name: "Vegetables",
        link: "/#"
    },
    {
        id: 5,
        name: "Fruits",
        link: "/#"
    },
    {
        id: 6,
        name: "Grains",
        link: "/#"
    },
]


const Navbar = () => {
  return (
    <>
        <div className="bg-white shadow-md">
            <div className="container flex justify-between py-4 sm:py-3">
                <div className="text-3xl font-bold" >Logo</div>
                <div>
                    <ul className="flex items-center gap-10 " >
                        { naveLinks.map(link => 
                            (<li key = {link.id} className="hidden sm:block" >
                                 <a className="inline-block hover:text-primary font-semibold text-xl"  href= {link.link}> {link.name} </a> 
                            </li>))}

                            <li className="cursor-default group hidden md:block ">
                                <a href="/#" className="font-semibold text-xl hover:text-primary inline-block">
                                    <div className="flex items-center gap-[2px] py-2" >
                                    Dropdown
                                    <span> <FaCaretDown className="group-hover:rotate-180 duration-300"/> </span>
                                    </div>
                                </a>
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md text-center">
                                    <ul>
                                        { dropDownLinks.map(link => (<li key={link.id} > <a href={link.link} className="text-xl inline-block w-full rounded-ma hover:bg-primary/20 py-2" > {link.name} </a> </li>)) }
                                    </ul>
                                </div>
                            </li>

                            <li className="flex items-center bg-secondary text-white py-2 px-5 cursor-pointer hover:scale-110 duration-200 gap-2" >
                                    <FaUser className="text-white text-lg" /> <span className="text-lg font-semibold" >My Account</span>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar