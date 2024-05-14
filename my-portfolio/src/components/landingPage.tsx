import { ArrowDownToLine } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import useWindowSize from "@/utils/useWindowSize";

export default function LandingPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [nav, setNav]  = useState<number>(0);
    const [isVisible, setIsVisible] = useState(true);
    const { width } = useWindowSize();
    const isMobile = width < 768
    const controls = useAnimation();
  
    useEffect(() => {
        let lastScrollY = window.scrollY;
        if (!isMobile) {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setIsVisible(false);
                    controls.start({
                    opacity: 0,  // fades the div out
                    height: 0,   // collapses the div's height
                    transition: { duration: 0.5 } // controls the speed of the animation
                    });
                } else if (window.scrollY < 30 && !isVisible) {
                    setIsVisible(true);
                    controls.start({
                    opacity: 1, // restores opacity
                    height: '100vh', // expands the div's height
                    transition: { duration: 0.5 } // controls the speed of the animation
                    });
                }
                lastScrollY = window.scrollY;
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
       
      }, [controls, isMobile, isVisible]);


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
    return (
        <motion.div 
            className="overflow-hidden"
            animate={controls}
            initial={{ y: 0, opacity: 1, height: '100vh' }}
        >
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex grow">
                    <span className="self-center">
                        <div className="mb-3 text-3xl md:text-4xl font-black text-center">
                            CLAUDIA KOH
                        </div>
                        <div className="font-light text-muted-text text-xl text-center">
                            Full Stack Developer | UI-UX Designer
                        </div>
                    </span>
                </div>
                <div className="justify-self-end mb-5" onClick={() => {handleNav(1, "About")}}>
                    <ArrowDownToLine />
                </div>
            </div>
            
        </motion.div>
    )
}