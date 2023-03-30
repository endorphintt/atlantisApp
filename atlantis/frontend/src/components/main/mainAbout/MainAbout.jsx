import React from "react";
import './MainAbout.scss';
import BlueButton from "../../blueButton/BlueButton";

const MainAbout = () => {

    const link = {
        adress: 'about',
        id: '02'
    }

    return (
        <div className="mainAbout">
            <div className="mainAbout__title">
                Немного о нашей компании
            </div>
            <div className="mainAbout__content">
                <div className="mainAbout__text">
                    Atlantis - современная юридическая фирма, специализирующаяся на помощи людям с юридическими проблемами.
                     Мы являемся ответом на растущий спрос на профессиональные юридические 
                     консультации. Благодаря разветвленной сети филиалов, расположенных по всей Польше,<br /><br />
                     мы можем добраться до любого места, а также обслуживать клиентов прямо в их городах. Как 
                     единственная компания в Польше, мы разработали локальную систему представительств, благодаря 
                     которой мы находимся рядом с людьми, которые нуждаются в нашей помощи.
                </div>
                <div className="mainAbout__photo_container">
                    <img src="./img/VladVika.JPG" alt="" />
                    <div className="mainAbout__guarantee_container">        
                        <div className="mainAbout__guarantee">
                            гарантия качества
                            <img src="./img/signature1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainAbout__button">
                <BlueButton name={'больше о нас'} link={link}/> 
            </div>           
        </div>
    )
}

export default MainAbout;
