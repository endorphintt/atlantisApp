import React from "react";
import './Hi.scss'
import { motion } from 'framer-motion'
import { textAnimation } from "../../../animations/animations";

const Hi = () => {
    return(
        <motion.div
        initial='hidden'
        whileInView='visible'
        className="hi">
            <div className="hi_container">
                <motion.h1 variants={textAnimation} className="hi__title">Легалізація іноземців в Польщі</motion.h1>
                <motion.h2 variants={textAnimation}  className="hi__subtitle">Гарантуємо 100% результат</motion.h2>
            </div>
        </motion.div>
    )
}

export default Hi;
