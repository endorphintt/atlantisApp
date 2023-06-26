import React from "react";
import './MainAbout.scss';
import BlueButton from "../../blueButton/BlueButtonContainer";
import { motion } from 'framer-motion'
import { textAnimation, textAnimation2 } from "../../../animations/animations";

const MainAbout = () => {

    const link = {
        adress: 'about',
        id: '03'
    }

    return (
        <div className="mainAbout">
            <motion.div
             initial='hidden'
             whileInView='visible'
             variants={textAnimation}
             className="mainAbout__title">
                Про нас
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={textAnimation2}
            className="mainAbout__content">
                <div className="mainAbout__text">
                Атлантіс - це фірма з великими потенціалом.
                 Наша місія - допомогти як найбільшій кількості 
                 іноземців в питаннях, з котрими складно впоратись
                  самому. Наші послуги завжди надаються в визначені
                   терміни, є якісними та доступними, наша команда -
                    мінімалізує вашу присутність в органах <br />
                    місцевого самоврядування - тим самим забезпечує Ваш комфорт.
                     Ми надаємо можливість отримати безкоштовну консультацію від 
                     наших спеціалістів, щоб ви могли переконатись в нашому
                      професіоналізмі. Для нас - важливе професійне обслуговування,
                       чесність по відношенню як до клієнтів так до партнерів. 
                       Саме через швидку комунікацію поєднану з професіоналізмом 
                       - вам буде приємно звертатися за послугами саме до нас. 
                </div>
                <div className="mainAbout__photo_container">
                    <img src="img/VladVika.JPG" alt="" />
                    <div className="mainAbout__guarantee_container">        
                        <div className="mainAbout__guarantee">
                            гарантія якості
                            <img src="./img/signature1.png" alt="" />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            variants={textAnimation2}
            className="mainAbout__button">
                <BlueButton name={'більше про нас'} link={link}/> 
            </motion.div>           
        </div>
    )
}

export default MainAbout;
