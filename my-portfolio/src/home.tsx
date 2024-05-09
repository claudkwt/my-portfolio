import Topicblock from "./components/topicBlock"
import { navPages } from "./utils/navPages"

function Home() {
    return (
        
        <div>
            {navPages.map((item)=> {
                return (
                    <div key={item.id} className="mb-3 flex w-full justify-end">
                        <div className="flex flex-col w-full md:w-11/12">
                            <Topicblock {...item}>{item.text}</Topicblock>
                        </div>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Home