import { ArrowDownToLine } from "lucide-react";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";

export default function LandingPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const variants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    };
    return (
        <motion.div 
            className="overflow-hidden snap-start h-full"
            ref={ref}
            initial="visible"
            animate={isInView ? "hidden" : "visible"}
            variants={variants}
            transition={{ duration: 0.5 }}
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
                <div className="justify-self-end mb-5">
                    <ArrowDownToLine />
                </div>
            </div>
            
        </motion.div>
    )
}