export const aboutDetails = {
  title: "Hi there!",
  description: `Welcome to my corner of the digital universe! 
    I'm Claudia, a Software Engineer and UI/UX designer hailing from Singapore.
    With a background in product design and a penchant for tinkering with Robotics, I
    stumbled upon the captivating realm of web development and never looked
    back. My passion lies in crafting software that not only enhances our
    daily experiences but also leaves a meaningful impact on the world around
    us.

    <br /><br />
    
    These days I am busy with my research in interaction between humans and
    machines, with Singapore University of Technology & Design. When I'm not
    busy squashing digital bugs or pushing pixels, you'll often find me
    concocting culinary creations in the kitchen or scaling heights at climbing gyms. 

    <br /><br />
        
    Feel free to explore my work and find out more about me!`,
    skillGroups: {
      frontEnd: ["React", "Typescript", "HTML & CSS", "JavaScript", "TailwindCSS", "Vite" ],
      backEnd: ["Nodejs", "Prisma", "Python","REST APIs"],
      userDesign: ["Figma", "Responsive Design", "Interaction Design"],
      specialMentions: ["Mandarin", "AR Development in Unity", "3D Modeling", "Baking"],
    }
  /*pieChart: [
    {
      name: 'Coder', 
      value: 15, 
      labelColor: "#FFFFFF", 
      skills: [
        "HTML, CSS & JS",
        "React & Typescript",
        "Python",
        "AR Development using Unity"
      ] 
    },
    { 
      name: 'Designer', 
      value: 12, 
      labelColor: "#FFFFFF",
      skills: [
        "3D Modeling & Rendering",
        "Illustrator & Photoshop",
        "Product Design"
      ]
    },
  ],
  pieColors: ['#9A0808', '#000C47' ],
  */
};

export type aboutDetailsSkillGroups = keyof typeof aboutDetails.skillGroups;
export type aboutDetailsSkillLabels = {
  [P in aboutDetailsSkillGroups]: string;
}