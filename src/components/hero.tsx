import { ArrowDownToLine } from "lucide-react";
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";
import face from '@/assets/face.svg';
import eye from '@/assets/eye.svg';
import specs from '@/assets/specs.svg';
import useWindowSize from "@/utils/useWindowSize";

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { width } = useWindowSize();
    const isMobile = width < 768
    const variants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    };

    function angle (cx: number, cy: number, ex: number, ey: number) {
        const dy = ey-cy;
        const dx = ex-cx;
        const rad = Math.atan2(dy, dx); //range (-PT, PT]
        const deg = rad*180/ Math.PI;
        return deg
    }
    const eyes = document.querySelectorAll<HTMLElement>("#eye");
    const anchor = document.getElementById('anchor');
    useEffect(() => {
        const boundingBox = anchor?.getBoundingClientRect();

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            if (boundingBox){
                
                const anchorX = boundingBox.left + boundingBox.width /2;
                const anchorY = boundingBox.top + boundingBox.height /2;
                const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
                console.log(angleDeg);

                console.log(eyes, eyes.length)
                eyes.forEach(eye => {
                    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
            })
            }
            
        })
    }, [anchor, eyes, width])
   
    return (
        <motion.div 
            className="overflow-hidden snap-start h-full"
            ref={ref}
            initial="visible"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center justify-center h-full">
                <div className={`flex h-full w-full justify-center space-x-10
                ${isMobile ? 'flex-col' : ""} 
                `}>
                    <span className="self-center">
                        <div className="mb-3 text-3xl md:text-4xl font-medium text-center">
                            Hi, my name is <span className="font-black">Claudia.</span>
                        </div>
                        <div className="font-light text-muted-text text-xl text-center">
                            Full Stack Developer | UI-UX Designer
                        </div>
                    </span>
                    <div className={`flex w-1/3 h-fit self-center place-content-center relative
                        ${isMobile ? 'order-first mb-5' : ''}
                        `}>    
                        <img id="anchor" src={face}/>
                        <div id="eyes" className="w-full h-full" style={{position: "absolute"}}>
                            <img id="eye" className="rightEye" src={eye} style={{}}/>
                            <img id="eye" className="leftEye" src={eye} style={{}}/>
                        </div>    
                        <img id="specs" src={specs}
                        />
                    </div>
                </div>
                <div className="justify-self-end mb-5">
                    <ArrowDownToLine />
                </div>
            </div>
            
        </motion.div>
    )
}