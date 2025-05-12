"useClient";
import { useState, useEffect } from "react";

export interface ScreenSize {
    isXS: boolean;
    isSM: boolean;
    isMD: boolean;
    isLG: boolean;
    isXL: boolean;
    is2XL: boolean;
    is3XL: boolean;
    isMobile: boolean;
}

export function useScreenSize(): ScreenSize {
    const [isXS, setIsXS] = useState(false);
    const [isSM, setIsSM] = useState(false);
    const [isMD, setIsMD] = useState(false);
    const [isLG, setIsLG] = useState(false);
    const [isXL, setIsXL] = useState(false);
    const [is2XL, setIs2XL] = useState(false);
    const [is3XL, setIs3XL] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsXS(width < 480);
            setIsSM(width >= 480 && width < 640);
            setIsMD(width >= 640 && width < 768);
            setIsLG(width >= 768 && width < 1024);
            setIsXL(width >= 1024 && width < 1280);
            setIs2XL(width >= 1280 && width < 1536);
            setIs3XL(width >= 1536);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const isMobile = isXS || isSM || isMD;
    return { isXS, isSM, isMD, isLG, isXL, is2XL, is3XL, isMobile };
}
