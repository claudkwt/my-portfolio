import { experienceDetails } from "@/utils/experienceDetails";
import JobCard from "./jobCard";
import useWindowSize from "@/utils/useWindowSize";

export default function Experience() {
    const { width } = useWindowSize();
    const isMobile = width < 768
    return (
        <>
            <div className="mt-6">
                {experienceDetails &&
                experienceDetails.map((job) => {
                    return (
                        <div key={job.id}>
                            <JobCard {...job} isMobile={isMobile} />
                        </div>
                    )
                })
                
                }
            </div>
        </>
    )
}