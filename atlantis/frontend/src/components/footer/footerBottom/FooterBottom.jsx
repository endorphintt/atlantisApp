import React from "react";
import './FooterBottom.scss'

const FooterBottom = () => {
    return(
        <div className="footer-bottom">
            <div className="footer-bottom__data">
                <div className="footer-bottom__company">
                    <img src="img/goldAtlantis2.png" alt="" />
                    <div>
                        <p>sp. Atlantis...</p>
                        <p>UL. SUCHA 2 </p>
                        <p>00-844 Wroclaw</p>
                        <p>NIP: 8982274268</p>
                        <p>KRS: 0000955898 </p>
                    </div>
                </div>
                <div className="footer-bottom__rectangles">                    
                    <div className="footer-bottom__rectangle">
                        <h3>Вроцлав</h3>
                        <div>
                            <p>tel:  +48732851456</p>
                            <p>adress: ul. Sucha 2</p> 
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Краків</h3>
                        <div>
                            <p>tel: +48730638088 </p>
                            <p>adress: ul. Mogilska 43</p> 
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Правний відділ</h3>
                        <div>
                            <p>tel: +48730638088 </p>
                        </div>
                    </div>
                    <div className="footer-bottom__rectangle">
                        <h3>Співпраця</h3>
                        <div>
                            <p>tel: 5435344343434 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom__social">
                <a href="https://instagram.com/atlantis.pl?igshid=YmMyMTA2M2Y=" className="footer-bottom__link">INSTAGRAM</a>
                <a href="https://www.facebook.com/atlantis.legalization/" className="footer-bottom__link">FACEBOOK</a>
                <a href="https://www.linkedin.com/company/atlantisco/" className="footer-bottom__link">LINKEDLN</a>
            </div>
        </div>
    )
}

export default FooterBottom;