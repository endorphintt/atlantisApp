import React, { useState } from "react"
import './MainOffers.scss'
import { MyContext } from "../../../index"
import { useContext } from "react"
import { motion } from 'framer-motion'
import { textAnimation2, textAnimation } from "../../../animations/animations"



const MainOffers = () => {
    const store = useContext(MyContext)

    const cards = [
        {subtitle: 'Тимчасовий побут', deskription: 'Повний супровід до отримання пластику', id: 1},
        {subtitle: 'Тимчасовий побут UKR', deskription: 'Повний супровід до отримання пластику', id: 2},
        {subtitle: 'Сталий побут', deskription: 'Повний супровід до отримання пластику', id: 3},
        {subtitle: 'Карта резидента', deskription: 'Повний супровід до отримання пластику', id: 4},
        {subtitle: 'Аналіз справи', deskription: 'Супровід до отримання децизії', id: 5},
        {subtitle: 'Громадянство', deskription: 'Супровід до отримання децизії;', id: 6},
        {subtitle: 'Для власників авто', deskription: 'Заміна водійського посвідчення Реєстрація авто', id: 7},
        {subtitle: 'Бізнес', deskription: 'Відкриття ТОВ, Відкриття ФОП', id: 8},
        {subtitle: 'Для власників авто', deskription: 'Заміна водійського посвідчення Реєстрація авто', id: 9},
        {subtitle: 'Шлюб', deskription: 'Присяжний переклад, Подача заяви до суду, Розлучення;', id: 10},
    ]

    const [active, setActive] = useState(false)

    return(
        <div className="MainOffers">
            <motion.h2
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            className="MainOffers__title">наші послуги</motion.h2>
            <div className={active ? `MainOffers__items active` : 'MainOffers__items'}>
                {cards.map(card => 
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={textAnimation2} key={card.id} className="MainOffers__item_container">
                    <div className="MainOffers__item">
                        <h3 className="MainOffers__subtitle">{card.subtitle}</h3>
                        <div className="MainOffers__deskription">
                            {card.deskription}
                        </div>
                    </div>
                </motion.div>
                    )}               
            </div>
            <div className={active ? `MainOffers__more active` : 'MainOffers__more'} onClick={() => setActive(!active)}>
                більше
            </div>
        </div>
    )
}

export default MainOffers;
