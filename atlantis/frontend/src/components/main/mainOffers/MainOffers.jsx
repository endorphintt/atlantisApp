import React, { useState } from "react"
import './MainOffers.scss'
import { useNavigate } from "react-router-dom"

const MainOffers = () => {

    const cards = [
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 1},
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 2},
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 3},
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 4},
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 5},
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 6},
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 7},
        {subtitle: 'карта побыта', deskription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', id: 8},
    ]

    const nav = useNavigate();

    const [active, setActive] = useState(false)

    return(
        <div className="MainOffers">
            <h2 className="MainOffers__title">наши услуги</h2>
            <div className={active ? `MainOffers__items active` : 'MainOffers__items'}>
                {cards.map(card => 
                <div onClick={() => nav('/offers')} key={card.id} className="MainOffers__item_container">
                    <div className="MainOffers__item">
                        <h3 className="MainOffers__subtitle">{card.subtitle}</h3>
                        <div className="MainOffers__deskription">
                            {card.deskription}
                        </div>
                    </div>
                </div>
                    )}               
            </div>
            <div className={active ? `MainOffers__more active` : 'MainOffers__more'} onClick={() => setActive(!active)}>
                больше
            </div>
        </div>
    )
}

export default MainOffers;
