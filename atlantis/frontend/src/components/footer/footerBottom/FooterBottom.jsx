import React from "react";
import './FooterBottom.scss'

const FooterBottom = () => {
    return(
        <div className="footer-bottom">
            <div className="footer-bottom__data">
                <div className="footer-bottom__company">
                    <img src="img/goldAtlantis2.png" alt="" />
                </div>
                <div className="footer-bottom__rectangles">                    
                    <div className="footer-bottom__rectangle">
                        <h3>Вроцлав</h3>
                        <div>
                            <p>+48732851456</p>
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Краків</h3>
                        <div>
                            <p>+48790281145 </p>
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Інші міста</h3>
                        <div>
                            <p>+48730638088 </p>
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Співпраця</h3>
                        <div>
                            <p>+48730638088 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom__social">
                <a href="https://instagram.com/atlantis.pl?igshid=YmMyMTA2M2Y=" className="footer-bottom__link">INSTAGRAM</a>
                <a href="https://www.facebook.com/atlantis.legalization/" className="footer-bottom__link">FACEBOOK</a>
                <a href="https://www.linkedin.com/company/atlantisco/" className="footer-bottom__link">LINKEDIN</a>
            </div>
        </div>
    )
}

export default FooterBottom;