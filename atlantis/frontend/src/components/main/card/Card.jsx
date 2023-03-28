import React from "react";
import './Card.scss'
import BlueButton from '../../blueButton/BlueButton'

const Card = (props) => {
    return(
        <div className="card_container">
            <div className="card">
                <div className="card__content">
                    {props.name}
                </div>  
                <div className="card__button">
                    <BlueButton name={'контакт'} link={'/contact'} />
                </div>                 
            </div>
        </div>
    )
}

export default Card;
