import { socialMediaLinks } from "../utils/socialMediaLinks";

export default function SocialMedia() {
    return (
        <div className="h-10 w-full flex items-center">
            {socialMediaLinks.map((m) => {
                return (
                    <a key={m.id} href={m.link} target="_blank">
                        <img src={m.icon} className=" mr-1 " alt={m.alt} width={m.size[0]} height={m.size[1]} />
                    </a>
                )
            })}
        </div>
    )
}