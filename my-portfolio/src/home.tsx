import Sidebar from "./components/sidebar"

function Home() {
    return (
        <>
            <div className="px-12 flex w-screen mb-6 overflow-x-hidden">
                <Sidebar /> 
                <div className="w-full flex-col pt-10">
                    <div className="h-80 border border-1">ABOUT</div>
                    <div className="h-80 border border-1">ABOUT</div>
                    <div className="h-80 border border-1">ABOUT</div>
                </div>
            </div>
        </>
    )
}

export default Home