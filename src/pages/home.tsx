import { useRef } from "react";
import Sidebar from "../components/sidebar";
import Topicblock from "../components/topicBlock";
import { navPages } from "../utils/navPages";
import useWindowSize from "@/utils/useWindowSize";
import ScrollToHashElement from "@/utils/ScrollToHashElement";
import { ScrollRestoration } from "react-router-dom";
import Hero from "@/components/hero";

function Home() {
  const { width } = useWindowSize();
  const isMobile = width < 768
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll scrollbar-hidden">
      <Hero />
      <div className={`px-16 flex w-screen pb-10 overflow-x-hidden place-content-center h-screen scrollbar overflow-auto snap-start 
          ${isMobile ? "" : "pt-10"}`}
      >
        <Sidebar aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} />
        <div className={`w-full md:w-1/2 flex-col h-fit
            ${isMobile ? "pt-10" : ""}`}
        >
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
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/", "/#Projects", "/#About", "/#Experience"];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
            location.pathname
            : // everything else by location like the browser
            location.key;
        }}
      />
      <ScrollToHashElement />
    </div>
  );
}

export default Home;
