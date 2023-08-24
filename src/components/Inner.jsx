import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerData } from '../store/module/playerSlice';
import { togglePopup, isSelectPlayer } from '../store/module/PopupStatusSlice';
import { InnerContainer, PlayerContainer } from '../styled/InnerStyle';
const Inner = memo(({ idx }) => {
    const { playerData, position } = useSelector(state => state.playerR)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlayerData())
    }, [])
    const onClickList = (item) => {
        dispatch(isSelectPlayer(item))
        dispatch(togglePopup())
    }
    return (
        <InnerContainer>
            <h2>{position[idx]}</h2>
            <PlayerContainer>
                {
                    playerData && playerData.filter(item => item.playerInfo.position === position[idx]).map(item => {
                        const { name, no, id } = item
                        const { img } = item.playerInfo
                        return <li key={id} data-id={no} onClick={() => onClickList(item)}><img src={`./images${img}`} alt="" /><span>{name}</span></li>
                    })
                }
            </PlayerContainer>
        </InnerContainer >
    );
});

export default Inner;