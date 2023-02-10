import React, { useState, useEffect } from "react";
import {
    SplashImage,
    SplashImageContainer,
    SplashImageNeon,
    SplashImageNeon2,
    SplashScreenContainer,
    SplashScreenTextContainer,
} from "./SplashScreenElements";
import logo from "../../../assets/images/ThecyberworldLogo/Thecyberworld_logo_outlined.png";
import { TextGreenBG } from "../Support/SponsorsElements";

const SplashScreen = () => {
    const [showLogo, setShowLogo] = useState(true);
    const [showNeon, setShowNeon] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowLogo(false);
            setShowNeon(true);
        }, 1000);
    }, []);

    useEffect(() => {
        if (showNeon) {
            setTimeout(() => {
                setShowNeon(false);
            }, 2700);
        }
    }, [showNeon]);
    return (
        <SplashScreenContainer>
            <SplashImageContainer>
                {showLogo ? (
                    <SplashImage src={logo} alt="splash screen image" />
                ) : showNeon ? (
                    <SplashImageNeon src={logo} alt="splash screen neon image" />
                ) : (
                    <SplashImageNeon2 src={logo} alt="splash screen neon 2 image" />
                )}
            </SplashImageContainer>
            <SplashScreenTextContainer>
                <TextGreenBG>By Thecyberworld Community </TextGreenBG>
            </SplashScreenTextContainer>
        </SplashScreenContainer>
    );
};

export default SplashScreen;
