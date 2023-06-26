import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';
import './FooterSuccess.scss'

const FooterSuccess = () => {
    const nav = useNavigate()
    return (
        <div className="fs">
            <h2 className="fs__title">Дякуємо за вашу заявку, незабаром наш консультант зв'яжеться з вами.</h2>
            <img className="fs__img" src="./img/ups.png" alt="аі" />
            <button className='fs__button' onClick={() => nav(MAIN_ROUTE)}>головна</button>
        </div>
    )
}

export default FooterSuccess;