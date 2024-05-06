import Topicblock from "./components/topicBlock"
import { navPages } from "./utils/navPages"

function Home() {
    return (
        
        <div>
            {navPages.map((item)=> {
                return (
                    <div key={item.id}>
                        <Topicblock {...item}>{item.text}</Topicblock>
                    </div>
                )
            })}
        </div>
        
    )
}

export default Home