import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerData } from '../store/module/playerSlice';
import { isPopupOpen, isSelectPlayer } from '../store/module/PopupStatusSlice';
const Inner = ({ idx }) => {
    const { playerData, position } = useSelector(state => state.playerR)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPlayerData())
    }, [])
    const onClickList = (item) => {
        dispatch(isSelectPlayer(item))
        dispatch(isPopupOpen())
    }
    return (
        <div className='inner'>
            <h2>{position[idx]}</h2>
            <ul className="playersByPosition">
                {
                    playerData && playerData.filter(item => item.playerInfo.position === position[idx]).map(item => {
                        const { name, no, id } = item
                        const { img } = item.playerInfo
                        return <li key={id} data-id={no} onClick={() => onClickList(item)}><img src={`./images${img}`} alt="" /><span>{name}</span></li>
                    })
                }
            </ul>
        </div >
    );
};

export default Inner;