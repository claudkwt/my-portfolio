import { ArrowDownToLine } from "lucide-react";
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import face from '@/assets/face.svg';
import eye from '@/assets/eye.svg';
import specs from '@/assets/specs.svg';
import smile from "@/assets/smile.svg";
import useWindowSize from "@/utils/useWindowSize";
import dizzy from "@/assets/dizzy.svg";

export default function Hero() {
    const [state, setState] = useState<"awake" | "sleep" | "confused">("sleep");
    const [clicks, updateClicks] = useState(0);
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

    function awakeChar(
      e: MouseEvent,
      timeout: number | NodeJS.Timeout,
      sleepTimeout: number | NodeJS.Timeout,
      justAwoke: boolean,
      clicks: number,
    ) {
      if (state == "confused") {
        return;
      }
      const boundingBox = anchor?.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      if (boundingBox) {
        const anchorX = boundingBox.left + boundingBox.width / 2;
        const anchorY = boundingBox.top + boundingBox.height / 2;
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        //console.log(angleDeg);

        //console.log(eyes, eyes.length)
        eyes.forEach((eye) => {
          eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        });
      }
      const movementX = e.movementX;
      const movementY = e.movementY;
      const movement = Math.sqrt(movementX * movementX + movementY * movementY);
      //speed=movement/100ms= movement/0.1s= 10*movement/s
      const speed = 10 * movement; //current speed
      //console.log(speed)
      if (speed > 1200 || clicks > 3) {
        setState("confused");
        justAwoke = false; // Reset the flag
        clearTimeout(timeout); // Clear any existing sleep timeout
        clearTimeout(sleepTimeout);
        timeout = setTimeout(() => {
          setState("awake");
          clearTimeout(sleepTimeout);
          justAwoke = true;
          updateClicks(1);
          setTimeout(() => {
            justAwoke = false; // Reset the flag after a short delay
          }, 2000); // 2-second delay before allowing sleep
        }, 15000);
      } else if (state == "awake" && !justAwoke) {
        clearTimeout(sleepTimeout);
        clearTimeout(timeout);
        sleepTimeout = setTimeout(() => {
          setState("sleep");
        }, 8000);
      } else if (state == "sleep") {
        setState("awake");
        justAwoke = true; // Ensure it stays awake for a short period
        clearTimeout(sleepTimeout);
        clearTimeout(timeout);
        sleepTimeout = setTimeout(() => {
          setState("sleep");
        }, 8000);
      }

      return;
    }
    
    useEffect(() => {
        let timeout: number | NodeJS.Timeout;
        let sleepTimeout: number | NodeJS.Timeout;
        // eslint-disable-next-line prefer-const
        let justAwoke = false; 
        const handleMouseMove = (e: MouseEvent) => awakeChar(e, timeout, sleepTimeout, justAwoke, clicks);
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
          };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchor, eyes, width, clicks])
   
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
                    <div className={`char ${state} flex w-1/3 self-center place-content-center relative
                        ${isMobile ? 'order-first mb-5 h-1/5' : 'h-1/3'}
                        `}>    
                        <span className="face" onClick={() => updateClicks(clicks +1)}>
                            <img id="anchor" src={face}/>
                        </span>
                        <div id="eyes" className={`${(state != "awake") ? "hidden": ""}`}>
                            <img id="eye" className="rightEye" src={eye} />
                            <img id="eye" className="leftEye" src={eye}/>
                        </div>    
                        <img id="specs" src={specs}/>
                        <img id="smile" className={`${(state != "awake") ? "hidden": ""}`} src={smile}/>
                        <div id="sleepFace"></div>
                        <div id="dizzyEyes" className={`${(state != "confused") ? "hidden": ""}`}>
                            <img id="dizzy" className="rightEye" src={dizzy}/>
                            <img id="dizzy" className="leftEye" src={dizzy} style={{}}/>
                        </div>    
                    </div>
                </div>
                <div className="justify-self-end mb-5">
                    <ArrowDownToLine />
                </div>
            </div>
            
        </motion.div>
    )
}