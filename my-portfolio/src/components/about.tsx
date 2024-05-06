import { aboutDetails } from "../utils/aboutDetails";
export default function About() {
  return (
    <div className="mb-3 flex w-full justify-end">
        <div className="flex flex-col w-full md:w-11/12">
            <span className="font-bold text-xl"> {aboutDetails.title} </span>
            <div className="my-3 text-justify font-light whitespace-normal" dangerouslySetInnerHTML={{ __html: aboutDetails.description }} />
               
            
        </div>
    </div>
  );
}
