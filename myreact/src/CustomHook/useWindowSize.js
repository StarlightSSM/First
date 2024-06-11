import { useState, useEffect } from "react";

function getWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

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

    return windowSize;
}

export default useWindowSize;