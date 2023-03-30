import React from "react"
import { UpdateMenuActionCreator } from "../../redux/menuReducer"
import './BlueButton.scss'
import { useNavigate } from "react-router-dom"

const BlueButton = (props) => {
    const nav = useNavigate();

    const OnMenuLinkClick = (link) => {
        props.updateMenu(link)
        nav('/' + link.adress)
    }
    return(
        <button className="blue-button" onClick={() => OnMenuLinkClick(props.link)} >{props.name}</button>
    )
}

export default BlueButton;