import { memo } from 'react';
import '../assets/css/reset.css'
import PosList from './PosList';
import Popup from './Popup/Popup';
import { useSelector } from 'react-redux';
const Main = memo(() => {
    const { position } = useSelector(state => state.playerR)
    const { selectedPlayer } = useSelector(state => state.popupR)
    return (
        <div className="wrap">
            {
                position ? (
                    position.map((_, idx) => (
                        <PosList key={idx} idx={idx} />
                    ))
                ) : (
                    <p>포지션 데이터가 없습니다.</p>
                )
            }
            {
                selectedPlayer && <Popup />
            }
        </div>

    );
});

export default Main;