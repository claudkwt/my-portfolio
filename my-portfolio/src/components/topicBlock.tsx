import About from "./about";
import Experience from "./experience";
import Projects from "./projects";

export default function Topicblock(props: {id: number, text: string}) {
    return (
      <div>
        <section id={props.text}>
            {props.text === "About" 
            ? 
                <About />
            : <></>}
            {props.text === "Experience" 
            ? 
                <Experience />
            : <></>}
            {props.text === "Projects" 
            ? 
                <Projects />
            : <></>}
        </section>
      </div>
    );
}