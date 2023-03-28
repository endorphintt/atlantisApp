import React from "react"
import { useNavigate } from "react-router-dom"
import './BlueButton.scss'

const BlueButton = (props) => {
    const nav = useNavigate();

    return(
        <button className="blue-button" onClick={() => nav(props.link)}>{props.name}</button>
    )
}

export default BlueButton;