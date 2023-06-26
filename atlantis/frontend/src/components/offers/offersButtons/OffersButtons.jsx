import React from "react";
import './OffersButtons.scss'
import { motion } from 'framer-motion'
import { textAnimation2 } from "../../../animations/animations";


const OffersButtons = (props) => {

    const buttonsData = [
        {id: 1, name: 'Тимчасовий побут'},
        {id: 3, name: 'сталий побут'},
        {id: 6, name: 'громадянство'},
        {id: 4, name: 'карта резидента'},
        {id: 2, name: 'статус укр' },
        {id: 5, name: 'Бізнес' },
        {id: 7, name: 'для водія'},
        {id: 8, name: 'шлюб' },
        {id: 9, name: 'нерухомість'},
        {id: 10, name: 'інші послуги'},
    ]

    return (
        <motion.div
        initial='hidden'
        whileInView='visible'
        className="offers__buttons">
            {buttonsData.map((button => {
                return(
                    <motion.div variants={textAnimation2}  key={button.id} className="offers__button_container">
                        <button onClick={() => {props.updateOffersItem(button.id)}} className="offers__button">
                            {button.name}
                        </button>
                    </motion.div>
                )
            }))

            }
        </motion.div>
    )
}

export default OffersButtons;