import { useState } from "react"

export default function Sidebar() {
    const [nav, setNav]  = useState<number>(0);
    const handleNav = (val : number) => {
        console.log(val)
        setNav(val)
    }
    const navPages = [
        { id: 1, text: 'About'},
        { id: 2, text: 'Experience'},
        { id: 3, text: 'Projects'},
    ]

    return (
    <div className="mt-10 pr-12">    
            <div className="p-3 md:p-6 bg-slate-900 dark:bg-white text-xl md:text-3xl font-black text-black w-fit">
                CL
            </div>
            <ul className="mt-12 flex flex-col space-y-1">
                {navPages.map((item)=> {
                    return (
                        <li
                            key={item.id}
                            className={`${(nav === item.id) ? "font-medium": "font-light"}`}
                            onClick={ () => {handleNav(item.id)}}
                        >
                            {item.text}
                        </li>
                    )
                })}
            </ul>
    </div>

    )
}