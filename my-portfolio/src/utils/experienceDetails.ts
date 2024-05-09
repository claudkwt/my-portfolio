export const experienceDetails = [
    {
        title: "Research Officer  • TLabs @ SUTD",
        description: `Design & administered experiments investigating human-computer interactions (HCI) using Unity and 
        C# to create simulations in HoloLens. 
        
        Analyse data obtained using MATLab and create Machine Learning models using Python OpenCV and pytorch to detect furniture objects.`,
        startTime: new Date("2022-09-01"),
        labels: ["Unity", "C#", "OpenCV", "Matlab"],
    },
    {
        title: "Software Engineer Intern • ST Kinetics",
        description: `Developed testing frameworks to evaluate performance of middlewares using
        Python and C++ for ROS 1 and ROS 2
        
        Engineered scalable and reusable software for more than 7 middleware and optimised robotic middleware to consistently maximise its potential`,
        startTime: new Date("2021-06-01"),
        endTime: new Date("2021-09-01"),
        labels: ["C++", "Pandas", "ROS"],
    }
];

export type jobCardProps = {
    title: string, 
    description: string, 
    startTime: Date, 
    endTime?: Date,
    labels?: string[] ,
}