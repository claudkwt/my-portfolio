import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { navPages } from "../utils/navPages";
import { motion } from 'framer-motion';
import SocialMedia from "./socialMedia";
import useWindowSize from "@/utils/useWindowSize";
import { ArrowLeft } from "lucide-react";

export interface SideBarProps {
    isBasic?: boolean;
    aboutRef?: React.RefObject<HTMLDivElement>;
    experienceRef?: React.RefObject<HTMLDivElement>;
    projectsRef?: React.RefObject<HTMLDivElement>;
    logoVariant?: string;
}

export default function Sidebar({isBasic, aboutRef, experienceRef, projectsRef, logoVariant}: SideBarProps) {
    const navigate = useNavigate();
    const [nav, setNav]  = useState<number>(0);
    const [activeSection, setActiveSection] = useState<string>('about');
    const { width } = useWindowSize();
    const isMobile = width < 768

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
    useEffect(() => {
        const options = {
          rootMargin: '0px 0px -30% 0px',
          threshold: 0.6,
        };
    
        if (!isBasic) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            }, options);
        
            const sections = [aboutRef?.current, experienceRef?.current, projectsRef?.current];
            sections.forEach((section) => {
            if (section) observer.observe(section);
            });
    
            return () => {
              sections.forEach((section) => {
                if (section) observer.unobserve(section);
              });
            };
        }
      }, []);

    function handleLogoClick(){
        if (isBasic){
            navigate("/")
        }
    }

    return (
        <>
            {!isMobile ?
            <div
                className="top-0 sticky h-full md:flex md:flex-col pr-24 justify-between"
            >
                <div>
                    <div
                        className="p-6 bg-primary text-2xl font-black text-black w-fit"
                        onClick={handleLogoClick}
                    >
                        {(logoVariant == "back") 
                        ? <ArrowLeft size={28} strokeWidth={3} />
                        : "CL"}
                    </div>
                    {!isBasic
                    ? <ul className="mt-12 flex flex-col space-y-1">
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
                                            className={`${(nav === item.id|| activeSection === item.text) ? "font-medium": "font-light"}`}
                                            to={`/#${item.text}`}
                                        >
                                            {item.text}
                                        </Link>
            
                                    </li>
                                </motion.div>
                            )
                        })}
                    </ul>
                    : <></>}
                </div>
                <SocialMedia />
            </div>
            : <></>}
        </>            
    )
}