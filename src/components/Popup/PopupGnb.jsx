import React from 'react';

const PopupGnb = ({ OpenGnb, isOpenGnb }) => {
    return (
        <div className="popupGnb">
            <ul>
                <li onClick={() => OpenGnb(1)} className={isOpenGnb === 1 ? "on" : ""}>Stats</li>
                <li onClick={() => OpenGnb(2)} className={isOpenGnb === 2 ? "on" : ""}>TransferHistory</li>
                <li onClick={() => OpenGnb(3)} className={isOpenGnb === 3 ? "on" : ""}>Image</li>
            </ul>
        </div>
    );
};

export default PopupGnb;