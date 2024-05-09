import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import useWindowSize from "@/utils/useWindowSize";

export default function Topicblock(props: {id: number, text: string}) {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    return (
        <section id={props.text}>
            {props.text === "About" 
            ? 
                <div>
                    {isMobile ? <div className="font-bold text-2xl block md:hidden z-50 py-3 sticky top-0 bg-background">About </div>: <></>}
                    <About />
                </div>
            : <></>}
            {props.text === "Experience" 
            ? 
                <div>
                    {isMobile ? <div className="font-bold text-2xl block md:hidden z-50 py-3 sticky top-0 bg-background">Experience</div>: <></>}
                    <Experience />
                </div>
            : <></>}
            {props.text === "Projects" 
            ? 
                <div>
                    {isMobile ? <div className="font-bold text-2xl block md:hidden z-50 py-3 sticky top-0 bg-background">Projects</div>: <></>}
                    <Projects />
                </div>
            : <></>}
        </section>
    );
}