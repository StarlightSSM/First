import React from "react";
import useWindowSize from './useWindowSize'; // 커스텀 훅??

function Footer() {
    const windowSize = useWindowSize();
    return(
        <footer>
            <h1>Footer</h1>
            <p>Width: {windowSize.width}</p>
            <p>Height: {windowSize.height}</p>
        </footer>
    )
}

export default Footer;