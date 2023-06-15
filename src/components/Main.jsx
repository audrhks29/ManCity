import { useState } from 'react';
import player from '../assets/api/data';
import '../assets/css/reset.css'
import PosList from './PosList';
import Popup from './popup';
const PosData = ["FW", "MF", "DF", "GK"]
const Main = () => {
    const [data, setData] = useState(player)
    const [posi, setPosi] = useState(PosData)
    const [popupName, setPopupName] = useState('');
    const [isPopupOpen, setPopupOpen] = useState('');
    const liClick = (name) => {
        setPopupOpen(name);
        setPopupName(name)
        console.log(name);
    };
    return (
        <div className="wrap">
            {
                posi.map((item, idx) => <PosList key={item.no} posi={posi} item={item} idx={idx} data={data} liClick={liClick} isPopupOpen={isPopupOpen} />)
            }
            <Popup isPopupOpen={isPopupOpen} data={data} popupName={popupName} />
        </div>

    );
};

export default Main;