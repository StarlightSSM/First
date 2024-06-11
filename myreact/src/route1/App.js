import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/about'>About</Link>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About</h1>
            <Link to='/home'>Home</Link>
        </div>
    )
}

function UserProfile() {
    const {userid} = useParams();
    return (
        <div>
            <h1>UserProfile</h1>
            <p>{userid}님 안녕하세요!</p>
        </div>
    )
}

export default function App(){
    return (
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/user/1'>User 1</Link></li>
                <li><Link to='/user/2'>User 2</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/user/:userid" element={<UserProfile/>} />
        </Routes>
        </BrowserRouter>
    )
}

// node.js
// get, post 통신으로 라우팅