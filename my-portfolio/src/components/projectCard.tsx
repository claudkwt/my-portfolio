import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/app/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/app/ui/dialog"
import useWindowSize from "@/utils/useWindowSize";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProjectTagBar from "./projectTag";
import { Button } from "@/app/ui/button";
import { SquareArrowUpRight } from "lucide-react";

export interface projectCardProps {
    id: number, 
    title: string, 
    description: string, 
    tags: string[],
    assets: string[][]

}

export default function ProjectCard(project: projectCardProps) {
    const navigate = useNavigate();
    const [ isOpen, setOpen ] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width < 768

    function toggleDialog() {
        if (isMobile){
            console.log("IsMobile");
            // TODO: Render Mobile dialog content as a different page
            navigate(`/projects/${project.id}`)
        }
        setOpen(!isOpen);
    }

    return (
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <Card
          className="w-full m-3 border-0 bg-popover rounded-xl overflow-x-clip clickable"
          key={project.id}
          onClick={toggleDialog}
        >
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-text">
            <span className="line-clamp-3">{project.description}</span>
          </CardContent>
          <CardFooter className="flex flex-wrap">
            {project.tags.map((tag) => (
              <span key={tag}>
                <ProjectTagBar tag={tag} />
              </span>
            ))}
          </CardFooter>
        </Card>
        <DialogContent className="p-10 min-w-[80%] ">
          <div className="justify-start space-x-8 flex">
            <div className="flex flex-col w-fit h-full">
              <DialogHeader className="grow">
                <DialogTitle className="mb-3">{project.title}</DialogTitle>
                <DialogDescription className="text-justify whitespace-normal mb-6">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="w-fit justify-self-start place-items-baseline">
                {project.tags.map((tag) => (
                  <span key={tag}>
                    <ProjectTagBar tag={tag} />
                  </span>
                ))}
              </DialogFooter>
            </div>
            {project.assets[0] && 
            <span className="place-self-center">
              <img
                className="object-contain"
                src={project.assets[0][0]}
                alt="loading..."
              />
            </span>}
          </div>
          <div className="place-self-center mt-3">
            <Button 
              className="rounded-xl" 
              variant={"destructive"}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              View More
              <SquareArrowUpRight size={20} color="#ffffff" strokeWidth={2} className="ml-1" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
}