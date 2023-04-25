import React from "react";
import './MainSlider.scss'
import { useState } from "react";
import { useRef } from "react";
import BlueButtonContainer from "../../blueButton/BlueButtonContainer";
import { motion } from 'framer-motion'
import { textAnimation, textAnimation2 } from "../../../animations/animations";

const MainSlider = () => {

    const toBlogLink = {
        adress: 'blog',
        id: '04'
    }

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
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            className="mainSlider__title">
                Клієнти про нас
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={textAnimation2}
            className="mainSlider">
                <div className="mainSlider__track" ref={slider}>
                    {items.map((item) => {
                        return (
                            <div key={item} className="mainSlider__item">
                                <img src="img/review1.jpeg" alt="" />
                            </div>
                        )
                    })}
                </div>
                <button onClick={prevHandler} className='slider__button button-prev'></button>
                <button onClick={nextHandler} className='slider__button button-next'></button>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={textAnimation2}
            className="mainSlider__button">
                <BlueButtonContainer name={'наш блог'} link={toBlogLink} />
            </motion.div>
        </div>
    )
}

export default MainSlider;