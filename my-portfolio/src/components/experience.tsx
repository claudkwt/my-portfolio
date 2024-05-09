import { experienceDetails } from "@/utils/experienceDetails";
import JobCard from "./jobCard";

export default function Experience() {
    return (
        <>
            <div className="mt-6">
                {experienceDetails &&
                experienceDetails.map((job) => {
                    return (
                        <div key={job.id}>
                            <JobCard {...job} />
                        </div>
                    )
                })
                
                }
            </div>
        </>
    )
}