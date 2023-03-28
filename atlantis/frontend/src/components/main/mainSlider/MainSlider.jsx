import React from "react";
import './MainSlider.scss'
import { useState } from "react";
import { useRef } from "react";
import BlueButton from "../../blueButton/BlueButton"; 

const MainSlider = () => {

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const slider = useRef()

    const prevHandler = () => {
        if(position != 0){
            position += 260
            slider.current.childNodes.forEach(el => {
            el.style = `transform: translateX(${position}px)`
        })}
    }

    let position = 0

    const nextHandler = () => {
        if(position >= -(items.length) * 260 + 780){
            position -= 260
            slider.current.childNodes.forEach(el => {
                el.style = `transform: translateX(${position}px)`
            })
        }  
    }

    return (
        <div className="mainSlider_container">
            <div className="mainSlider__title">
                Клиенты о нас
            </div>
            <div className="mainSlider">
                <div className="mainSlider__track" ref={slider}>
                    {items.map((item) => {
                        return (
                            <div key={item} className="mainSlider__item">
                                <img src="./img/review1.jpeg" alt="" />
                            </div>
                        )
                    })}
                </div>
                <button onClick={prevHandler} className='slider__button button-prev'></button>
                <button onClick={nextHandler} className='slider__button button-next'></button>
            </div>
            <div className="mainSlider__button">
                <BlueButton name={'наш блог'} link={'/blog'} />
            </div>
        </div>
    )
}

export default MainSlider;