import { memo } from 'react';
import PosList from './PosList';
import Popup from './Popup/Popup';
import { useSelector } from 'react-redux';
import { MainWrap } from '../styled/MainStyle';
const Main = memo(() => {
    const { position } = useSelector(state => state.playerR)
    const { selectedPlayer } = useSelector(state => state.popupR)
    return (
        <MainWrap>
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
        </MainWrap>

    );
});

export default Main;