import { experienceDetails } from "@/utils/experienceDetails";
import JobCard from "./jobCard";

export default function Experience() {
    return (
        <>
            <div className="font-bold text-xl block">Experience </div>
            <div className="mt-6">
                {experienceDetails &&
                experienceDetails.map((job) => {
                    return (
                        <JobCard {...job} />
                    )
                })
                
                }
            </div>
        </>
    )
}