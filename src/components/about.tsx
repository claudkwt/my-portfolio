import { aboutDetails, aboutDetailsSkillLabels, type aboutDetailsSkillGroups } from "../utils/aboutDetails";
import { ScrollArea, ScrollBar } from "@/app/ui/scroll-area";
import { Badge } from "@/app/ui/badge";
import { motion } from "framer-motion";

export default function About() {

  return (
    <>
      <h1 className="hidden md:block"> {aboutDetails.title} </h1>
      <div
        className="my-7 text-justify text-muted-text whitespace-normal"
        dangerouslySetInnerHTML={{ __html: aboutDetails.description }}
      />
      <div>
        <h2>Skills</h2>
        {Object.keys(aboutDetails.skillGroups).map((skillGroupKey) => {
          return <SkillGroupBlock 
            skills={aboutDetails.skillGroups[skillGroupKey as aboutDetailsSkillGroups]} 
            label={skillGroupKey}
          />
        })}
      </div>
      {/* <div className="font-light italic text-muted-text text-center">
        Click/Hover on me!
      </div> */}
      {/*<div className="flex place-content-center mb-3">
        * <PieChart
          width={200}
          height={200}
          style={{ outline: "none", stroke: "none" }}
          onClick={(_data, index) => handleClick(true, index)}
          onMouseEnter={(_data, index) => handleClick(true, index)}
          onMouseLeave={() => handleClick(false)}
          className="z-0"
        >
            <Pie
              data={aboutDetails.pieChart}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              paddingAngle={1}
              dataKey="value"
              style={{ outline: "none", stroke: "none" }}
            >
              {aboutDetails.pieChart.map((_entry, index) => (
                <Cell
                  id={`${index}`}
                  style={{ outline: "none", stroke: "none" }}
                  className="clickable"
                  key={`cell-${index}`}
                  fill={
                    aboutDetails.pieColors[
                      index % aboutDetails.pieColors.length
                    ]
                  }
                />
              ))}
            </Pie>
        </PieChart> 
      </div>*/}
      {/* {isOpen == 1 && (
        <motion.div 
          className="bg-popover rounded-2xl w-full text-sm text-center p-2"
          animate={{opacity: 1, y: 0}}
          initial={{opacity: 0, y:20}}
          transition={{duration: 0.5}}
        >
          {aboutDetails.pieChart &&
            aboutDetails.pieChart[0].skills?.map((item) => (
              <ul key={item}>{item}</ul>
            ))}
        </motion.div>
      )}
      {isOpen == 2 && (
        <motion.div 
          className="bg-popover rounded-2xl w-full text-sm text-center p-2"
          animate={{opacity: 1, y: 0}}
          initial={{opacity: 0, y:20}}
          transition={{duration: 0.5}}
        >
          {aboutDetails.pieChart &&
            aboutDetails.pieChart[1].skills?.map((item) => (
              <ul key={item}>{item}</ul>
            ))}
        </motion.div>
      )} */}
    </>
  );
}

function SkillGroupBlock ({skills, label}: {skills: string[], label: string}) {
  
  const formattedLabels: aboutDetailsSkillLabels  = {
    "frontEnd": "Frontend",
    "backEnd": "Backend",
    "specialMentions": "Special Mentions",
    "userDesign": "User Design",
  }
  return (
    <div className="mb-3">
      <motion.div 
        className="italic mb-1"
        whileHover={{ x: 10, scale:1.1 }}
      >
        {formattedLabels[label as aboutDetailsSkillGroups]}
      </motion.div>
      <ScrollArea className="w-full whitespace-nowrap rounded">
        <div className="flex w-max space-x-4 p-4">
          {skills.map((skill: string) => (
            <Badge className="bg-highlight-secondary text-white" >{skill}</Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}