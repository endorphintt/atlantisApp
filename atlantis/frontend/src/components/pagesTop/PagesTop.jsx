import React from "react";
import './PagesTop.scss'
import { motion } from 'framer-motion'
import { textAnimation } from "../../animations/animations";


const PagesTop = (props) => {
    return (
        <motion.div 
        initial='hidden'
        whileInView='visible'
        className="pagesTop">
            <motion.h2 variants={textAnimation} className="pagesTitle">
                {props.name}
            </motion.h2>
        </motion.div>
    )
}

export default PagesTop;