import React from "react";
import './Footer.scss'
import { useState } from "react";
import FooterBottom from "./footerBottom/FooterBottom";

const Footer = () => {

    const [name, setName] = useState({name: '', error: false})
    const [email, setEmail] = useState({email: '', error: false})
    const [number, setNumber] = useState({number: '', error: false})
    const [deskription, setDeskription] = useState({deskription: '', error: false})

    const onNameChange = (e) => {
        name.name = e.target.value
        if(name.name.length >= 3){
            setName({name: name.name, error: false})
        } else {
            setName({name: name.name, error: true})
        }
    }
    const onEmailChange = (e) => {
        email.email = e.target.value
        if(email.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setEmail({email: email.email, error: false})
        } else {
            setEmail({email: email.email, error: true})
        }
    }
    const onNumberChange = (e) => {
        number.number = e.target.value
        if(number.number[0] === '+'){
            setNumber({number: number.number, error: false})
        } else {
            setNumber({number: number.number, error: true})
        }
    }
    const onDeskriptionChange = (e) => {
        deskription.deskription = e.target.value
        if(deskription.deskription.length >= 3){
            setDeskription({deskription: deskription.deskription, error: false})
        } else {
            setDeskription({deskription: deskription.deskription, error: true})
        }
    }

    const onSubmitClick = (e) => {
        e.preventDefault()
        if(!name.error && !email.error && !number.error && !deskription.error && name.name.length != 0 && email.email.length != 0 && number.number.length != 0){
            console.log({
                name: name.name,
                email: email.email,
                number: number.number,
                deskription: deskription.deskription
            })
            setName({name: '', error: false})
            setEmail({email: '', error: false})
            setNumber({number: '', error: false})
            setDeskription({deskription: '', error: false})
            alert('Ваши даные отправлены! Ждите ответ в ближайшее робочее время')
        }
    }

    return(
        <div className="footer">
            <div className="footer__title">Контакт</div>
            <div className="footer__content">
                <div className="footer__info">
                    <div className="footer__number">
                        <div className="footer__number_img"></div>
                        <div>
                            Наши номера: <br />
                            +48730638088 <br />
                            +48732851456
                        </div>
                    </div>
                    <div className="footer__adress">
                        <div className="footer__adress_img"></div>
                        <div>
                            Wrocław, ul. Sucha 2
                        </div>
                    </div>
                </div>
                <div className="footer__form_container">        
                    <form action="" className="footer__form">
                            <div className="form__title">
                                Отправь нам сообщение и наш специалист тебе перезвонит
                            </div>
                        <div className="form__items">
                            <div className='form__item'>
                                <input type="text" 
                                placeholder="name" 
                                value={name.name} 
                                className={name.error ? `form__input error` : "form__input"} 
                                onChange={onNameChange} />
                            </div>
                            <div className="form__item">
                                <input type="text" 
                                placeholder="email" 
                                value={email.email} 
                                className={email.error ? `form__input error` : "form__input"} 
                                onChange={onEmailChange} />
                            </div>
                            <div className="form__item">
                                <input type="text" 
                                placeholder="number (+...)" 
                                value={number.number} 
                                className={number.error ? `form__input error` : "form__input"}  
                                onChange={onNumberChange} />
                            </div>
                            <div className="form__item">
                                <input type="text" 
                                placeholder="deskription" 
                                value={deskription.deskription} 
                                className={deskription.error ? `form__input error textarea` : `form__input textarea`}  
                                onChange={onDeskriptionChange} />
                            </div>
                        </div>
                        <button className="form__button" onClick={onSubmitClick} type="submit">Выслать</button>
                    </form>
                </div>                    
            </div>
            <FooterBottom />
        </div>
    )
}

export default Footer;