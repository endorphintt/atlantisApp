import React from "react";
import './Call.scss'

const Call = () => {

    const handleCall = () => {
        window.location.href = `tel:${'+48661998272'}`;
    }

    return (
        <button className="call" onClick={handleCall}>
            <img className="call__img" src="./img/call.png" alt="call" />
        </button>
    )
}

export default Call;