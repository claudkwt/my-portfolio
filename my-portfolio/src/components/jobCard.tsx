import { jobCardProps } from "@/utils/experienceDetails";
import { Badge } from "@/app/ui/badge";


export default function jobCard(props: jobCardProps) {
    return (
      <div className={`flex w-full mb-12 
      ${props.isMobile ? "flex-col": ""}`}>
                <div className={`min-w-fit w-1/3 mr-3 text-muted-text
                ${props.isMobile ? "mb-2 font-light": ""}`}>
                    {formatMonthYear(props.startTime)} -{" "}
                    {props.endTime && props.endTime
                        ? formatMonthYear(props.endTime)
                        : "Present"}
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">{props.title}</span>
                    <div
                        className="text-justify text-muted-text whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: props.description }}
                    />
                    <div className="mt-2">
                        {props.labels &&
                            props.labels.map((l) => <Badge className="mr-1" variant={"secondary"} key={l}>{l}</Badge>
                        )}
                    </div>
                </div>
        </div>
        
    );
}

function formatMonthYear(date: Date) {
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().substr(-2);
    return `${month} '${year}`
}