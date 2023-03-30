import React from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import './BlueButton.scss'
import { MyContext } from "../../App"

const BlueButton = (props) => {
    const onMenuLinkClick = useContext(MyContext) 

    return(
        <button className="blue-button" onClick={() => onMenuLinkClick(props.link)}>{props.name}</button>
    )
}

export default BlueButton;