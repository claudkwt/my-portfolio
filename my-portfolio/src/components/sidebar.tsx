import { useState } from "react";
import { Link } from 'react-router-dom';
import { navPages } from "../utils/navPages";
import { motion } from 'framer-motion';
import SocialMedia from "./socialMedia";
import useWindowSize from "@/utils/useWindowSize";

export default function Sidebar() {
    const [nav, setNav]  = useState<number>(0);

    const scrollToSection = (sectionId : string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const handleNav = (val : number, label: string) => {
        setNav(val)
        scrollToSection(label)
    }
    const { width } = useWindowSize();
    const isMobile = width < 768;

    return (
        <>
            {!isMobile ?
            <div
                className="top-0 sticky h-full md:flex md:flex-col pt-10 pr-24 justify-between"
            >
                <div>
                    <div
                        className="p-6 bg-primary text-2xl font-black text-black w-fit"
                        onClick={() => {handleNav(0, "")}}
                    >
                        CL
                    </div>
                    <ul className="mt-12 flex flex-col space-y-1">
                        {navPages.map((item)=> {
                            return (
                                <motion.div
                                    whileHover={{ scale: 1.1, translateX: 4 }}
                                    whileTap={{ scale: 0.9, translateX: 3 }}
                                    key={item.id}
                                >
                                    <li
                                        onClick={ () => {handleNav(item.id, item.text)}}
                                    >
                                        <Link
                                            className={`${(nav === item.id) ? "font-medium": "font-light"}`}
                                            to={`/#${item.text}`}
                                        >
                                            {item.text}
                                        </Link>
            
                                    </li>
                                </motion.div>
                            )
                        })}
                    </ul>
                </div>
                <SocialMedia />
            </div>
            : <></>}
        </>            
    )
}