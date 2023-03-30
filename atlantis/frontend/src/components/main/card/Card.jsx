import React from "react";
import './Card.scss'
import BlueButton from '../../blueButton/BlueButton'
import { motion } from 'framer-motion'
import { textAnimation, textAnimation2 } from "../../../animations/animations";

const Card = (props) => {
    return(
        <div className="card_container">
            <div className="card">
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={textAnimation}
                className="card__content">
                    {props.name}
                </motion.div>  
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={textAnimation2}
                className="card__button">
                    <BlueButton name={'контакт'} link={'/contact'} />
                </motion.div>                 
            </div>
        </div>
    )
}

export default Card;
