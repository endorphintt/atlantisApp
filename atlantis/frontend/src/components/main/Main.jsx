import React, { useState } from "react";
import Footer from "../footer/Footer.jsx";
import Card from "./card/Card.jsx";
import Hi from "./hi/Hi";
import './Main.scss'
import MainAbout from "./mainAbout/MainAbout.jsx";
import MainOffers from "./mainOffers/MainOffers.jsx";
import MainSlider from "./mainSlider/MainSlider.jsx";
import SecondCard from "./secondCard/SecondCard.jsx";

const Main = (props) => {

    return (
        <div className="main">
            <Hi />
            <MainOffers/>
            <Card name={'Запишись на бесплатную консультацию!'}/>
            <MainAbout />
            <SecondCard />
            <MainSlider />
            <div className="third-card">
                <Card name={'наши специалисты с юридическим образованием помогут решить вашу проблему качественно и быстро!'}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;