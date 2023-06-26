import React from "react";
import './Footer.scss'
import { useState } from "react";
import FooterBottom from "./footerBottom/FooterBottom";
import { motion } from 'framer-motion'
import { textAnimation, textAnimation2 } from "../../animations/animations";
import { useForm, ValidationError } from "@formspree/react";
import FooterSuccess from "./footerSuccess/FooterSuccess";
import { useNavigate } from "react-router-dom";
import { THANKS_ROUTE } from "../utils/consts";

const Footer = () => {
    const nav = useNavigate()
    const [thanks, setThanks] = useState(false)
    const [state, handleSubmit] = useForm("mvonerba");
    if (state.succeeded) {
        nav(THANKS_ROUTE)
    }

    return(
        <motion.div
        initial='hidden'
        whileInView='visible'
        className="footer">
            <motion.div
            variants={textAnimation2}
            className="footer__title">Контакт</motion.div>
            <div className="footer__content">
                <div className="footer__info">
                    <motion.div variants={textAnimation2} className="footer__number">
                        <div className="footer__number_img"><img src="img/point.png" alt="" /></div>
                        <div >
                            <p>Вроцлав:</p>
                            +48732851456 <br />
                            +48730638088 <br />
                            ul. Sucha 2 <br />
                            kontakt.atlantis@gmail.com
                        </div>
                    </motion.div>
                    <motion.div variants={textAnimation2} className="footer__adress">
                        <div className="footer__adress_img"><img src="img/point.png" alt="" /></div>
                        <div>
                             <p>Краків:</p>
                            +48790281145 <br />
                            ul. Mogilska 43 <br />
                            kontakt.atlantis.kr@gmail.com
                        </div>
                    </motion.div>
                    <motion.div variants={textAnimation2} className="footer__adress">
                        <div className="footer__adress_img"><img src="img/point.png" alt="" /></div>
                        <div>
                            <p>Інші міста:</p>
                            +48730638088 <br />
                            kontakt.atlantis@gmail.com
                        </div>
                    </motion.div>
                </div>
                <div className="footer__form_container">        
                    <form className="footer__form" onSubmit={handleSubmit}>
                        <motion.div variants={textAnimation} className="form__title">
                            Залиш свої дані і наші спеціалісти зв'яжуться з тобою
                        </motion.div>
                        <div className="form__items">
                            <div className="form__item">
                                <input 
                                    type="name"
                                    id="name"
                                    name="name"
                                    className="form__input"
                                    placeholder="name" 
                                />
                                <ValidationError 
                                    prefix="Name" 
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form__item">
                                <input
                                    className="form__input" 
                                    id="email"
                                    type="email" 
                                    name="email"
                                    placeholder="email"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form__item">
                                <input
                                    className="form__input"  
                                    id="phone"
                                    type="phone number" 
                                    name="phone"
                                    placeholder="phone number (+...)"
                                />
                                <ValidationError 
                                    prefix="Phone" 
                                    field="phone"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form__item">
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form__input textarea" 
                                    placeholder="text"
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>                      
                        <button className="form__button" type="submit" disabled={state.submitting}>
                            відправити
                        </button>
                    </form>
                </div>            
            </div>
            <FooterBottom />
        </motion.div>
    )
}

export default Footer;