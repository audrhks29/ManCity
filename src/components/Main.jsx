import { useState } from 'react';
import player from '../assets/api/data';
import '../assets/css/reset.css'
import PosList from './PosList';
import Popup from './Popup/Popup';
const PosData = ["FW", "MF", "DF", "GK"]
const Main = () => {
    const [data, setData] = useState(player)
    const [posi, setPosi] = useState(PosData)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenGnb, setIsOpenGnb] = useState(1)
    const [popupName, setPopupName] = useState('');
    const [isPopupOpen, setPopupOpen] = useState('');
    const [playerFace, setPlayerFace] = useState('')
    const closePopup = () => {
        setIsOpen(false);
    }

    const OpenGnb = (num) => {
        setIsOpenGnb(num)
    }
    const liClick = (name, isOpen) => {
        setPopupOpen(name);
        setPopupName(name)
        setIsOpen(!isOpen);
    };
    const changeImg = (id) => {
        setPlayerFace(id)
        return (<img src={`/images/${id}`} alt="Player Face" />)
    }
    return (
        <div className="wrap">
            {
                posi.map((item, idx) => <PosList key={item.no} posi={posi} item={item} idx={idx} data={data} liClick={liClick} isPopupOpen={isPopupOpen} isOpen={isOpen} />)
            }
            <Popup isPopupOpen={isPopupOpen} data={data} popupName={popupName} closePopup={closePopup} isOpen={isOpen} isOpenGnb={isOpenGnb} OpenGnb={OpenGnb} changeImg={changeImg} playerFace={playerFace} />
        </div>

    );
};

export default Main;