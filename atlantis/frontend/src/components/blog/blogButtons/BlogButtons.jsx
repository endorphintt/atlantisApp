import React from "react";
import { useDispatch } from "react-redux";
import { UpdateBlogActionCreator } from "../../../redux/blogReducer";
import { FROM_US, ALL, LEGALIZATION, LIFE_IN_POLAND, OUR_LIFE } from '../../../variables/variables'
import { motion } from 'framer-motion'
import { textAnimation } from "../../../animations/animations";


const BlogButtons = () => {
    const dispatch = useDispatch();

    const buttonsData = [
        {id: ALL, name: 'все'},
        {id: LEGALIZATION, name: 'о легализации'},
        {id: FROM_US, name: 'от нас' },
        {id: LIFE_IN_POLAND, name: 'жизнь в Польше'},
        {id: OUR_LIFE, name: 'наша рутина'},
    ]

    return (
        <motion.div
        initial='hidden'
        whileInView='visible'
        className="offers__buttons">
            {buttonsData.map((button => {
                return(
                    <motion.div variants={textAnimation} key={button.id} className="offers__button_container">
                        <button onClick={() => dispatch(UpdateBlogActionCreator(button.id))} className="offers__button">
                            {button.name}
                        </button>
                    </motion.div>
                )
            }))

            }
        </motion.div>
    )
}

export default BlogButtons;