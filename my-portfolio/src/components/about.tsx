import { aboutDetails } from "../utils/aboutDetails";
import { PieChart, Pie, Cell } from 'recharts';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/ui/popover"


export default function About() {
  const data = [
    { name: 'Coder', value: 3, labelColor: "#FFFFFF" },
    { name: 'Designer', value: 2, labelColor: "#9A0808" },
  ];
  const COLORS = ['#9A0808', '#CFC0A3' ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fontWeight="bold"
        fill={`${data[index % data.length].labelColor}`}
        textAnchor={"middle"}
        style={{ outline: "none", stroke: "none"}}
        dominantBaseline="central"
      >
        {`${data[index % data.length].name}`}
      </text>
    );
  };

  return (
    <div className="mb-3 flex w-full justify-end">
      <div className="flex flex-col w-full md:w-11/12">
        <span className="font-bold text-xl"> {aboutDetails.title} </span>
        <div
          className="my-3 text-justify font-light whitespace-normal"
          dangerouslySetInnerHTML={{ __html: aboutDetails.description }}
        />
        <div className="flex place-content-center">
          <div className="self-center text-sm grow-0"> 
            <ul>HTML, CSS & JS</ul>
            <ul>React & Typescript</ul>
            <ul>Python</ul>
            <ul>MRTK in Unity C#</ul>
          </div>
          <PieChart width={250} height={250} style={{ outline: "none", stroke: "none" }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              paddingAngle={1}
              dataKey="value"
              style={{ outline: "none", stroke: "none" }}
            >
                {data.map((_entry, index) => (
                  <Cell
                    style={{ outline: "none", stroke: "none" }}
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                      />
                ))}
            </Pie>
          </PieChart>
          <div className="self-center text-right text-sm grow-0"> 
            <ul>3D Modeling & Rendering</ul>
            <ul>Illustrator & Photoshop</ul>
            <ul>Product Development Pipeline</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
