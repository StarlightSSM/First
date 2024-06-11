import React, {useState, useEffect} from "react";
import {getWindowSize} from './utils'; // 커스텀 훅??

function Footer() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const resizehandler = () => {
        setWindowSize(getWindowSize());
    }

    useEffect(
        () => {
            window.addEventListener('resize', resizehandler);
            return () => {
                window.removeEventListener('resize', resizehandler);
            }
        }
    , []);

    return(
        <footer>
            <h1>Footer</h1>
            <p>Width: {windowSize.width}</p>
            <p>Height: {windowSize.height}</p>
        </footer>
    )
}

export default Footer;