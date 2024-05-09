import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './home.tsx'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"
import Sidebar from "./components/sidebar"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
            <div className="px-16 flex w-screen pb-10 overflow-x-hidden place-content-center h-screen">
                <Sidebar /> 
                <div className="w-full md:w-2/3 flex-col pt-10">
                    <Routes>
                      <Route
                        path="/"
                        Component={() =>(
                            <Home />
                        )}
                      />
                    </Routes>
                </div>
            </div>
        </Router>
  </React.StrictMode>,
)
