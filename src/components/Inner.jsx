import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayerData } from '../store/module/playerSlice';
const Inner = ({ posi, idx, liClick, isOpen }) => {
    const { playerData, loading } = useSelector(state => state.playerR)
    const dispatch = useDispatch()
    const [data, setData] = useState()
    useEffect(() => {
        loading && dispatch(getPlayerData())
        setData(playerData)
    }, [loading])
    console.log(typeof (playerData));
    // console.log(typeof (data));
    return (
        <div className='inner'>
            <h2>{posi[idx]}</h2>
            <ul className="playersByPosition">

                {
                    playerData.filter(item => item.playerInfo.position === posi[idx]).map(item => {
                        const { name, no, id } = item
                        const { img } = item.playerInfo
                        return <li key={id} data-id={no} onClick={() => liClick(name)}><img src={`./images${img}`} alt="" /><span>{name}</span></li>
                    })
                }
            </ul>


        </div>
    );
};

export default Inner;