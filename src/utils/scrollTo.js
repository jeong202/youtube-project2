import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollTo = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); //위로
    }, [pathname]); //pathname바뀔때마다 실행

    return null;
}

export default ScrollTo;