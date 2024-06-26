import { aboutDetails } from "../utils/aboutDetails";
import { Pie, Cell, PieChart } from 'recharts';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomizedLabelProps {
  cx: number, 
  cy: number,
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  index: number;
}


export default function About() {
  const [isOpen, setOpen] = useState(0);
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }: CustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fontWeight="bold"
        className="clickable"
        fill={`${aboutDetails.pieChart[index % aboutDetails.pieChart.length].labelColor}`}
        textAnchor={"middle"}
        dominantBaseline="central"
      >
        {`${aboutDetails.pieChart[index % aboutDetails.pieChart.length].name}`}
      </text>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClick(input?: boolean, index?: any): void {
    if (input && index.target){
      if (index.target.id)
        setOpen(Number(index.target.id)+1);
      } else {
        setOpen(0);
      }
  }
  
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen, setOpen])

  return (
    <>
      <span className="font-bold text-xl"> {aboutDetails.title} </span>
      <div
        className="my-7 text-justify text-muted-text whitespace-normal"
        dangerouslySetInnerHTML={{ __html: aboutDetails.description }}
      />
      <div className="font-light italic text-muted-text text-center">
        Click/Hover on me!
      </div>
      <div className="flex place-content-center mb-3">
        <PieChart
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
        {/* <div className=" w-1/3 self-center text-right text-sm grow-0 bg-popover p-4 rounded-2xl"> 
          {aboutDetails.pieChart && 
              aboutDetails.pieChart[1].skills?.map((item) => (
                <ul key={item}>{item}</ul>
              ))
            }
        </div> */}
      </div>
      {isOpen == 1 && (
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
      )}
    </>
  );
}
