import { useState } from 'react';
import '../assets/css/reset.css'
import PosList from './PosList';
import Popup from './Popup/Popup';
import { useSelector } from 'react-redux';
const Main = () => {
    const { position } = useSelector(state => state.playerR)
    const { selectedPlayer } = useSelector(state => state.popupR)
    const [playerFace, setPlayerFace] = useState('')
    console.log(selectedPlayer);
    const changeImg = (id) => {
        setPlayerFace(id)
        return (<img src={`/images/${id}`} alt="Player Face" />)
    }
    return (
        <div className="wrap">
            {
                position ? (
                    position.map((item, idx) => (
                        <PosList key={idx} item={item} idx={idx} />
                    ))
                ) : (
                    <p>포지션 데이터가 없습니다.</p>
                )
            }
            {
                selectedPlayer && <Popup changeImg={changeImg} playerFace={playerFace} />
            }
        </div>

    );
};

export default Main;