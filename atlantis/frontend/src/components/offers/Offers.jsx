import React from "react";
import './Offers.scss'
import OffersButtons from './offersButtons/OffersButtons'
import OffersContent from "./offersButtons/offersContent/OffersContent";
import Footer from "../footer/Footer";
import MainAbout from '../main/mainAbout/MainAbout'
import { useRef } from "react";
import PagesTop from "../pagesTop/PagesTop";
import { useEffect } from "react";

const Offers = (props) => {
    const ref = useRef(null);

    const handleScrollClick = () => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="offers">
            <PagesTop name={'наши услуги'} />
            <OffersButtons updateOffersItem={props.updateOffersItem}/>
            <OffersContent handleScrollClick={handleScrollClick} offersActiveItem={props.offersActiveItem}/>
            <MainAbout />
            <div ref={ref} className="footer">
                <Footer /> 
            </div> 
        </div>
    )
}

export default Offers;