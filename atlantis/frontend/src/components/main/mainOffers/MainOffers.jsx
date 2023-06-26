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
        {subtitle: 'Сталий побут', deskription: 'Повний супровід до отримання пластику', id: 2},
        {subtitle: 'Карта резидента', deskription: 'Повний супровід до отримання пластику', id: 3},
        {subtitle: 'Статус укр', deskription: 'Повний супровід', id: 4},
        {subtitle: 'Громадянство', deskription: 'Супровід до отримання децизії', id: 5},
        {subtitle: 'Для власників авто', deskription: 'Заміна водійського посвідчення Реєстрація авто', id: 6},
        {subtitle: 'Бізнес', deskription: 'Відкриття ТОВ, Відкриття ФОП', id: 7},
        {subtitle: 'Шлюб', deskription: 'Подача заяви до суду, Розлучення', id: 8},
        {subtitle: 'Нерухомість', deskription: 'Послуги рієлтора, отримання спадщини', id: 9},
        {subtitle: 'інші послуги', deskription: 'Pesel, PKK, Meldunek та інші', id: 10},
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
