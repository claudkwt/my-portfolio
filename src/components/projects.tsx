
import { projectDetails } from "@/utils/projectDetails"
import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <div className="flex flex-col mb-16">
            <h1 className="hidden md:block">Projects </h1>
            <div className="xl:grid-cols-3 xl:grid xl:gap-2">
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