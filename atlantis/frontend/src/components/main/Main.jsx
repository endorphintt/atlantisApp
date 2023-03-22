import React, { useState } from "react";
import './Main.scss'

const Main = (props) => {

    return (
        <div className="main">
            <button onClick={() => props.onMenuLinkClick({id: '02', adress: 'about'})}>toAbout</button>
        </div>
    )
}

export default Main;