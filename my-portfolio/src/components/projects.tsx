
import { projectDetails } from "@/utils/projectDetails"
import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <div className="flex flex-col mb-10">
            <div className="font-bold text-2xl py-6 hidden md:block">Projects </div>
            <div className="md:grid-cols-3 md:grid md:gap-3">
               {projectDetails.map((project) => {
                return(
                    <ProjectCard  {...project} key={project.id}/>
                    )
                })
                }
            </div>
        </div>
    )
}