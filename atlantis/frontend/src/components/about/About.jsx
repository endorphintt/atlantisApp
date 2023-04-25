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
            <PagesTop name={'О нас'}/>
            <MainAbout /> 
            <div className="about__content">
                <motion.div variants={textAnimation}  className="about__first-row">
                    <img src="img/about__second.JPG" alt="img" className="about__img" />
                    <p>Наша юридична фірма спеціалізується на легалізації іноземців у Польщі. Ми знаємо, як допомогти нашим клієнтам з отриманням необхідних документів та забезпеченням відповідного статусу проживання. Ми знаємо всі тонкощі законодавства та здатні надати нашим клієнтам ефективні та індивідуальні рішення для їх потреб. Зверніться до нашої компанії, щоб отримати якісну та професійну допомогу в легалізації вашого перебування в Польщі.</p>
                </motion.div>               
                <motion.div variants={textAnimation}  className="about__second-row">                    
                    <p>
                    Атлантіс має багаторічний досвід у супроводі іноземних
                     клієнтів із різних країн, включаючи Україну, Білорусь, Росію, Китай та інші.
                     Ми надаємо повний спектр юридичних послуг, пов'язаних із легалізацією
                     перебування іноземців у Польщі, включаючи отримання віз, робочих дозволів
                     та постійного проживання.

                     Наші юристи знають, що кожен клієнт є унікальним і має свої власні
                     потреби. Тому ми зосереджуємось на індивідуальному підході до кожного
                     клієнту та забезпечуємо, щоб наші рішення відповідали їхнім потребам та бажанням.

                     Наша мета - зробити легалізацію перебування в Польщі якомога простіший
                     та безпечною для наших клієнтів. Ми пропонуємо юридичну підтримку на кожному
                     етапі процесу та забезпечуємо, що наші клієнти мають повну інформацію та
                     розуміння процедур, необхідні їх легалізації.
                    </p>
                    <img src="img/about__first.JPG" alt="img" className="about__img" />
                </motion.div>
            </div>
            <Footer />
        </motion.div>
    )
}

export default About;