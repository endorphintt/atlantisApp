import React from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import './BlueButton.scss'
import { MyContext } from "../../App"

const BlueButton = (props) => { 
    return(
        <button className="blue-button">{props.name}</button>
    )
}

export default BlueButton;