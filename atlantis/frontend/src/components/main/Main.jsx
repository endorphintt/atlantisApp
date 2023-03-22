import React, { useState } from "react";
import Card from "./card/Card.jsx";
import Hi from "./hi/Hi";
import './Main.scss'

const Main = (props) => {

    return (
        <div className="main">
            <Hi />
            <Card />
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae assumenda totam sapiente atque ullam laboriosam quam maxime. Culpa, numquam neque rem cumque cupiditate ex iure corporis tempore a quidem!
            </div>
        </div>
    )
}

export default Main;