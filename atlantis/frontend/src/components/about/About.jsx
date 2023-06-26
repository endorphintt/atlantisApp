import React from "react";
import Footer from "../footer/Footer";
import MainAbout from "../main/mainAbout/MainAbout";
import PagesTop from "../pagesTop/PagesTop";
import './About.scss'
import { motion } from 'framer-motion'
import { textAnimation } from "../../animations/animations";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <motion.div
        initial='hidden'
        whileInView='visible'
        className="about">
            <PagesTop name={'Про нас'}/>
            <MainAbout /> 
            <div className="about__content">
                <motion.div variants={textAnimation}  className="about__first-row">
                    <img src="img/about__second.JPG" alt="img" className="about__img" />
                    <p>Наша юридична фірма спеціалізується на легалізації іноземців у Польщі. Ми знаємо, як допомогти нашим клієнтам з отриманням необхідних документів та забезпеченням відповідного статусу проживання. Ми знаємо всі тонкощі законодавства та здатні надати нашим клієнтам ефективні та індивідуальні рішення для їх потреб. Зверніться до нашої компанії, щоб отримати якісну та професійну допомогу в легалізації вашого перебування в Польщі.</p>
                </motion.div>               
                <motion.div variants={textAnimation}  className="about__second-row">                    
                    <p>
                    <span>Як відбувається процес співпраці  на з нашою фірмою?</span> <br />

                    <span>Крок 1.</span> Безкоштовна консультація. Ви - задаєте всі питання, які вас турбують, ми - надаємо професійну оцінку вашій ситуації. <br />
                    <span>Крок 2.</span> Заключення контракту. Прозорий та покроковий план дій для кожного з клієнтів. <br />
                    <span>Крок 3.</span> Оплата. Після підписання контракту - ваш менеджер видає вам підтвердження оплати. <br />
                    <span>Крок 4.</span> Подача документів згідно вашої заявки до компетентних органів.  <br />
                    <span>Крок 5.</span> Супровід координатора в невідкладних справах.  <br />
                    <span>Крок 6.</span> Завершення співпраці.
                    </p>
                    <img src="img/about__first.JPG" alt="img" className="about__img" />
                </motion.div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default About;