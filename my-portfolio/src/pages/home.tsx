import { useRef } from "react";
import Sidebar from "../components/sidebar";
import Topicblock from "../components/topicBlock";
import { navPages } from "../utils/navPages";

function Home() {

    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    return (
        <div className="px-16 flex w-screen pb-10 overflow-x-hidden place-content-center h-screen">
        <Sidebar aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} />
        <div className="w-full md:w-1/2 flex-col pt-10">
            {navPages.map((item) => {
                return (
                  <div key={item.id} className="mb-3 flex w-full justify-end">
                    <div className="flex flex-col w-full md:w-11/12">
                      <Topicblock
                        id={item.id}
                        text={item.text}
                        aboutRef={aboutRef}
                        experienceRef={experienceRef}
                        projectsRef={projectsRef}
                      >
                        {item.text}
                      </Topicblock>
                    </div>
                  </div>
                );
            })}
        </div>
        </div>
    );
}

export default Home;
