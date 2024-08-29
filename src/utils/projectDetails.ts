import project0_1 from "@/assets/IndigoWebApp/Indigo_Figma.png";
import project0_3 from "@/assets/IndigoWebApp/IndigoScales_demo.gif";
import project0_2 from "@/assets/IndigoWebApp/Mockups.png";
import project1_POC from "@/assets/HololensGearDetection/POCVideo.mp4"

export const assetType = {
    Image: "image",
    Video: "video",
};

export const projectDetails = [
    {
        id: 0, 
        title: "Indigo Scales Community Web",
        description: `Used by 130 community users, this web app was made for local music community Indigo Scales to 
        help them create a space for local musicians to network and find opportunities to collaborate in bands and perform together
        in open mics and concert events. As they are a closed community, this webapp ensures privacy via google authentication and have
        a separate admin page to handle account onboarding.
        <br /><br />
        My team of 2 conducted user research closely with the community
        and designed this social web app, ensuring that the app fits perfectly
        into the user needs. Based off the community's requirements, the app is designed with mobile users in mind, 
        with intuitive UI compacted with many features.
        <br /><br />
        This webapp allows users to interact in a Facebook-inspired forum, creating their own posts
        and interacting with others via likes and comments, as well as searching and filtering posts. Musicians can also organise
        and attend events within the community, fostering strong bonds and collaboration. They can view each other profiles to connect
        with others of similar musical taste and share music they made via soundcloud api. 
        `,
        tags: [ 
            'React',
            'Typescript',
            'TailwindCSS',
            'NextJS',
            'UI/UX', 
        ],
        assets: [
            [assetType["Image"], project0_1, "Figma Design"],
            [assetType["Image"], project0_2, "Mockups for user research"],
            [assetType["Image"], project0_3, "Release 1 of our Product"],
        ],
        isCard: false,
    },
    {
        id: 1, 
        title: "AI Future in Engineering",
        description: `How would hardware engineering transform with the rise of handy robots and AI? As robots get more intelligent and
        capable in replacing labour, they can aid engineers in hardware assembly and testing, keeping humans safe and increase efficiency.
        As augmented reality become REAL and accessible, this project aim to show how computer vision, AI and AR can blend into a helping hand
        for engineers.
        <br /><br />
        In my research with Professor U-Xuan Tan, my team and I created a computer vision model capable of identifying the correct gear part
        based on verbal commands given by the user, displaying a 3 dimensional bounding box on the gear part in an augmented reality environment.
        Using the Mixed Reality Toolkit by Microsoft and Unity, I built the AR app to use with Hololens, that combines both eye tracking and
        raycast data to accurately display a 3D bounding box. The computer vision model is trained using Python and YOLOv5 model, on different types 
        of gears and bearing, as well as live images from Hololens. 
        <br /><br />
        Our proof of concept video envisions a situation where the engineer wearing the AR device commmands the AI to locate and grasp a specific gear part
        they want, which is out of their reach or unable to obtain as they are occupied. This proof of concept shows the software portion of this process
        without the robotic arm.
        `, 
        tags: [ 
            'Interaction Design',
            'HRI',
            "Unity",
            "Computer Vision",
        ],
        assets: [
            [assetType["Video"], project1_POC, ""]
        ],
        isCard: false,
    },
    {
        id: 2, 
        title: "Aim Trainer",
        description: `As an novice gamer, when I first started playing FPS shooting games like Apex Legends and Overwatch2,
        I found that it was hard to land my shots. Shooting in these games was not easy and I needed to work on my aim to contribute
        meaningfully to my team. I needed to get good quick. After all, gaming is a team sport. ;)
        <br /><br />
        Here, I made my own aim trainer to practice flicking the gun and moving quickly to targets. It's aesthetically clean, easy to use and
        you can try it for yourself! Save your highscore and compete with others :)
        `, //ThreeJS 3D cafe or Aim trainer
        tags: [ 
            'Vue',
            'Typescript',
            'Vite',

        ],
        assets: [],
        isCard: true,
        link: "",
    },
    {
        id: 3, 
        title: "Portfolio Site",
        description: `My humble portfolio site you are looking at right now~
        <br /><br />
        Created using Vite & React, written in typescript. Hosted on Vercel.
        `,
        tags: [ 
            'Vite', 
            'React',
            'TailwindCSS'
        ],
        assets: [],
        isCard: true,
        link: "https://github.com/claudkwt/my-portfolio"
    },
    // {
    //     id: 4, 
    //     title: "Project Title",
    //     description: `Deploy your new project in one-click.`, //Using emoji or avatar on a drawing board and upload (https://personas.draftbit.com/)
    //     tags: [ 
    //         'tag' 
    //     ],
    //     assets: [],
    //     isCard: true,
    // },
]