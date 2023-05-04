import React from "react";
import './Rights.scss'
import { useState } from "react";

const Rights = () => {
    const [rights, setRights] = useState(true)
    return (
        <div>
            {rights?
                <div className="rights_container">
                    <div className="rights">
                        <div className="rights__title">INFORMACJA DOTYCZĄCA PLIKÓW COOKIES</div>
                        <div className="rights__text">
                            Przetwarzamy pliki cookies, przechowujemy informacje na urządzeniu oraz przetwarzamy
                            dane osobowe lub dane przeglądania w celu rozwoju i ulepszania naszej strony. Za Twoją
                            zgodą my i nasi partnerzy możemy wykorzystywać pozyskane dane. Klikając przycisk
                            „Akceptuję”, wyrażasz zgodę na przetwarzanie danych przez nas i naszych partnerów,
                            jak opisano powyżej. Możesz również uzyskać dostęp do bardziej szczegółowych
                            informacji i zmienić swoje preferencje przed wyrażeniem zgody lub odmową. Niektóre
                            rodzaje przetwarzania danych nie wymagają zgody użytkownika, ponieważ mają istotny
                            wpływ na działanie naszej strony internetowej.
                        </div>
                        <button onClick={() => setRights(false)} className="rights__button">Akceptuję</button>
                    </div>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default Rights;