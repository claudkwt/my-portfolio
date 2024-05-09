import { aboutDetails } from "../utils/aboutDetails";
import { PieChart, Pie, Cell } from 'recharts';
import { useState } from "react";


export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const COLORS = ['#9A0808', '#CFC0A3' ];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fontWeight="bold"
        fill={`${aboutDetails.piechart[index % aboutDetails.piechart.length].labelColor}`}
        textAnchor={"middle"}
        style={{ outline: "none", stroke: "none"}}
        dominantBaseline="central"
      >
        {`${aboutDetails.piechart[index % aboutDetails.piechart.length].name}`}
      </text>
    );
  };

  function handleClick(_e: any, _data: { name: string; value: number; labelColor: string; }): void {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <span className="font-bold text-xl"> {aboutDetails.title} </span>
      <div
        className="my-3 text-justify text-muted-text font-light whitespace-normal"
        dangerouslySetInnerHTML={{ __html: aboutDetails.description }}
      />
      <div className="flex place-content-center">
        <div className=" w-1/3 self-center text-sm grow-0 bg-popover p-4 rounded-2xl"> 
          {aboutDetails.piechart && 
            aboutDetails.piechart[0].skills?.map((item) => (
              <ul>{item}</ul>
            ))
          }
        </div>
        <div className="min-w-fit w-1/3 self-center">
          <PieChart width={250} height={250} style={{ outline: "none", stroke: "none" }}>
            <Pie
              data={aboutDetails.piechart}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              paddingAngle={1}
              dataKey="value"
              style={{ outline: "none", stroke: "none" }}
              onClick={(e, index) => handleClick(e, aboutDetails.piechart[index])}
            >
                {aboutDetails.piechart.map((_entry, index) => (
                  <Cell
                    style={{ outline: "none", stroke: "none" }}
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                      />
                ))}
            </Pie>
          </PieChart>
        </div>
        <div className=" w-1/3 self-center text-right text-sm grow-0 bg-popover p-4 rounded-2xl"> 
          {aboutDetails.piechart && 
              aboutDetails.piechart[1].skills?.map((item) => (
                <ul>{item}</ul>
              ))
            }
        </div>
      </div>
    </>
  );
}
