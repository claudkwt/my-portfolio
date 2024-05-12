import { Badge } from "@/app/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
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

interface projectCardProps {
    id: number, 
    title: string, 
    description: string, 
    tags: string[],

}

export default function ProjectCard(project: projectCardProps) {
    const [ isOpen, setOpen ] = useState(false);
    const { width } = useWindowSize();
    const isMobile = width < 768

    function toggleDialog() {
        if (isMobile){
            console.log("IsMobile");
            // TODO: Render Mobile dialog content as a different page
        }
        setOpen(!isOpen);
    }

    return (
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <Card
          className="w-full m-3 border-0 bg-popover rounded-lg"
          key={project.id}
          onClick={toggleDialog}
        >
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {project.tags.map((tag) => (
              <Badge className="capitalize" key={tag}>{`#${tag}`}</Badge>
            ))}
          </CardContent>
        </Card>
        <DialogContent className="justify-start p-10">
          <DialogHeader className="w-1/2">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>
                {project.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="w-fit">
            {project.tags.map((tag) => (
                <Badge className="capitalize" key={tag}>{`#${tag}`}</Badge>
            ))}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
}