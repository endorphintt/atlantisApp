import React from "react";
import './SecondCard.scss'
import { motion } from 'framer-motion'
import { textAnimation, textAnimation2 } from "../../../animations/animations";

const SecondCard = () => {
    return (
        <div className="secondCard">
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            className="secondCard__items">
                <div className="secondCard__item">
                    1000+
                    довольных
                    клиентов 
                </div>
                <div className="secondCard__item">
                    25+
                    видов 
                    услуг
                </div>
                <div className="secondCard__item">
                    365+
                    выпитых
                    кофе                   
                </div>
            </motion.div>
        </div>
    )
}

export default SecondCard;