import React from "react";
import { useSelector } from "react-redux";
import classes from './BlogContent.module.scss'
import { motion } from 'framer-motion'
import { textAnimation } from "../../../animations/animations";


const BlogContent = () => {
    const Items = useSelector(state => state.blogPage.blogActiveItem)
    return (
        <motion.div
        initial='hidden'
        whileInView='visible'
        className={classes.items} >
            {Items.map(item => {
                return(
                    <div className={classes.item} key={item.newsId}>
                        <h2 className={classes.item__title}>
                            {item.title}
                        </h2>
                        <div className={classes.item__content}>
                            <img src={item.photo} alt="img" />
                            <p>{item.deskription}<span>{item.day}</span></p>
                        </div>
                    </div> 
                )               
            })}
        </motion.div>
    )
}

export default BlogContent;