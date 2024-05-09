import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import useWindowSize from "@/utils/useWindowSize";

interface TopicBlockProps {
    id: 1 | 2 | 3;
    text: "About" | "Experience" | "Projects";
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
}

export default function Topicblock ({id, text, aboutRef, experienceRef, projectsRef}: TopicBlockProps) {
    const { width } = useWindowSize();
    const isMobile = width < 768;

    return (
        <section>
            {text === "About" 
            ? 
                <div ref={aboutRef} id={text}>
                    {isMobile ? <div className="font-bold text-2xl block md:hidden z-50 py-3 sticky top-0 bg-background">About </div>: <></>}
                    <About />
                </div>
            : <></>}
            {text === "Experience" 
            ? 
                <div ref={experienceRef} id={text}>
                    {isMobile ? <div className="font-bold text-2xl block md:hidden z-50 py-3 sticky top-0 bg-background">Experience</div>: <></>}
                    <Experience />
                </div>
            : <></>}
            {text === "Projects" 
            ? 
                <div ref={projectsRef} id={text}>
                    {isMobile ? <div className="font-bold text-2xl block md:hidden z-50 py-3 sticky top-0 bg-background">Projects</div>: <></>}
                    <Projects />
                </div>
            : <></>}
        </section>
    );
}