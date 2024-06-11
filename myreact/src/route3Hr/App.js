import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function Home(){
    return(
        <>Home page</>
    )
}

function About(){
    return(
        <>About page</>
    )
}

export default function App() {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
            </Routes>
        </HashRouter>
    )
}