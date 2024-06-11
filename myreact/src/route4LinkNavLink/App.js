import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import './App.css';

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
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><NavLink to='/' activeClassName="active">Home(NavLink)</NavLink></li>
                    <li><NavLink to='/about' activeClassName="active">About(NavLink)</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}