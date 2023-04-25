import React, { useState } from "react";
import './Main.scss'
import { useRef } from "react";
import { useEffect } from "react";

import Footer from "../footer/Footer.jsx";
import Card from "./card/Card.jsx";
import Hi from "./hi/Hi";
import MainAbout from "./mainAbout/MainAbout.jsx";
import MainOffers from "./mainOffers/MainOffers.jsx";
import MainSlider from "./mainSlider/MainSlider.jsx";
import SecondCard from "./secondCard/SecondCard.jsx";

const Main = (props) => {

    const ref = useRef(null);

    const handleScrollClick = () => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="main">
            <Hi />
            <MainOffers/>
            <Card handleScrollClick={handleScrollClick} name={'Запишись на безкоштовну консультацію!'}/>
            <MainAbout />
            <SecondCard handleScrollClick={handleScrollClick}/>
            <MainSlider />
            <div className="third-card">
                <Card name={'Наші спеціалісти допоможуть вирішити вашу проблему якісно та в максимально короткі терміни.'}/>
            </div>
            <div ref={ref} className="footer">
                <Footer/>
            </div>           
        </div>
    )
}

export default Main;