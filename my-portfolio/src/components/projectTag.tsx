import { Badge } from "@/app/ui/badge";

export default function ProjectTagBar (props: {tag: string}) {
    return (
        <Badge className="capitalize mr-1 text-muted-text" variant="outline">{`#${props.tag}`}</Badge>
    )
}