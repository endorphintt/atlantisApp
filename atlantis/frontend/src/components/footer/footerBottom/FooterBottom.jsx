import React from "react";
import './FooterBottom.scss'

const FooterBottom = () => {
    return(
        <div className="footer-bottom">
            <div className="footer-bottom__data">
                <div className="footer-bottom__company">
                    <img src="img/blueAtlantisLogo.PNG" alt="" />
                    <div>
                        <p>sp. Atlantis...</p>
                        <p>UL. SUCHA 2 </p>
                        <p>00-844 Wroclaw</p>
                        <p>NIP: 5272977935</p>
                        <p>KRS: 0000933300 </p>
                    </div>
                </div>
                <div className="footer-bottom__rectangles">                    
                    <div className="footer-bottom__rectangle">
                        <h3>Офис во Вроцлаве</h3>
                        <div>
                            <p>tel: 5435344343434 </p>
                            <p>adress: lorem ipsum dolor</p> 
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Офис в Варшаве</h3>
                        <div>
                            <p>tel: 5435344343434 </p>
                            <p>adress: lorem ipsum dolor</p> 
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Отдел Правный</h3>
                        <div>
                            <p>tel: 5435344343434 </p>
                            <p>adress: lorem ipsum dolor</p> 
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Вспулпраца</h3>
                        <div>
                            <p>tel: 5435344343434 </p>
                            <p>adress: lorem ipsum dolor</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom__social">
                <a href="https://instagram.com/atlantis.pl?igshid=YmMyMTA2M2Y=" className="footer-bottom__link">INSTAGRAM</a>
                <a href="https://www.facebook.com/atlantis.legalization/" className="footer-bottom__link">FACEBOOK</a>
                <a href="" className="footer-bottom__link">LINKEDLN</a>
            </div>
        </div>
    )
}

export default FooterBottom;