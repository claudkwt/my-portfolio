import LinkedInLogo from '../assets/LinkedIn.svg';
import GmailLogo from "../assets/Gmail.svg";
import GithubLogo from "../assets/Github.svg";


//Logos are obtained from Luicide React Icons, strok 1px, Color #d8d8e4, size 16px
export const socialMediaLinks = [
    {
        id: 0, 
        alt: "LinkedIn", 
        icon : LinkedInLogo, 
        link:"https://www.linkedin.com/in/claudia-koh-wei-ting/",
        size: [40,40],
    }, 
    {
        id: 1, 
        alt: "Github", 
        icon : GithubLogo, 
        link:"https://github.com/claudkwt/",
        size: [42,42],
    }, 
    {
        id: 2, 
        alt: "Gmail", 
        icon : GmailLogo, 
        link:"mailto: kwtclaudia@gmail.com",
        size: [35,40],
    },
]