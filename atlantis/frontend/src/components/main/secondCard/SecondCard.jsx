import React from "react";
import './SecondCard.scss'
import { motion } from 'framer-motion'
import { textAnimation, textAnimation2 } from "../../../animations/animations";

const SecondCard = (props) => {
    return (
        <div className="secondCard">
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            className="secondCard__items"
            onClick={props.handleScrollClick}>
                <div className="secondCard__item">
                    1000+
                    довольних
                    клієнтів
                </div>
                <div className="secondCard__item">
                    25+
                    видів послуг
                </div>
                <div className="secondCard__item">
                    365+
                    випитих кав                  
                </div>
            </motion.div>
        </div>
    )
}

export default SecondCard;