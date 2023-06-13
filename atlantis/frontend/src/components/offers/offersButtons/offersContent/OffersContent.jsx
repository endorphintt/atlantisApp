import React from "react";
import './OffersContent.scss'
import { motion } from 'framer-motion'
import { textAnimation2, textAnimation } from "../../../../animations/animations";

const OffersContent = (props) => {
    return(
        <motion.div
        initial='hidden'
        whileInView='visible'
        className="offers__content">
            <div className="oItem">
                <motion.div variants={textAnimation} className="oItem__title">
                    {props.offersActiveItem.title}
                </motion.div>
                <motion.div variants={textAnimation2}  onClick={props.handleScrollClick} className="callUs">
                    <p>Ми завжди на зв'язку! Можете сміливо ставити запитання або записатись на безкоштовну консультацію.</p> 
                    <img src="img/call.png" alt="" />             
                </motion.div>
                <motion.div  variants={textAnimation2} className="oItem__deskription">
                    <img src={props.offersActiveItem.photo} alt="" />
                    <p>{props.offersActiveItem.deskription}</p>
                </motion.div>
                {props.offersActiveItem.offers?
                    <div className="proposals">
                        {/* <div className="proposals__title">
                            послуги
                        </div> */}
                        <div className="proposals__items">
                            {props.offersActiveItem.offers.map(item => <p><span>{item.title}:</span> <span>{item.deskription}</span></p> )}
                        </div>
                    </div>
                    :
                    <div></div>
                }
                <div className="oItem__questions">
                    {props.offersActiveItem.questionFirst?
                        <div className="oItem__question first">
                            <div className="oItem__questionPart">
                                {props.offersActiveItem.questionFirst}
                            </div>
                            <div className="oItem__answerPart">
                                {props.offersActiveItem.answerFirst}
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    {props.offersActiveItem.questionSecond? 
                        <div className="oItem__question second">
                            <div className="oItem__questionPart">
                                {props.offersActiveItem.questionSecond}
                            </div>
                            <div className="oItem__answerPart">
                                {props.offersActiveItem.answerSecond}
                            </div>
                        </div>
                        :
                        <p></p>                      
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default OffersContent;