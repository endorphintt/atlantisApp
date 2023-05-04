import React from "react";
import './OffersButtons.scss'
import { motion } from 'framer-motion'
import { textAnimation2 } from "../../../animations/animations";


const OffersButtons = (props) => {

    const buttonsData = [
        {id: 1, name: 'Тимчасовий побит'},
        {id: 2, name: 'тимчасовий побит укр' },
        {id: 3, name: 'сталий побит'},
        {id: 4, name: 'карта резидента'},
        {id: 5, name: 'Бізнес' },
        {id: 6, name: 'громадянство'},
        {id: 7, name: 'права на водіння'},
        {id: 8, name: 'реєстрація авто' },
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