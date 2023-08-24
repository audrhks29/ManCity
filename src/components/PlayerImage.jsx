import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const PlayerImage = memo(() => {
    const { selectedPlayer } = useSelector(state => state.popupR)
    return (
        <ul className='playerImage'>
            <li><img src={`./images${selectedPlayer.playerInfo.img}`} /></li>
            {
                selectedPlayer.playerInfo.moreimg1 &&
                <li><img src={selectedPlayer.playerInfo.moreimg1} /></li>
            }
            {
                selectedPlayer.playerInfo.moreimg2 &&
                <li><img src={selectedPlayer.playerInfo.moreimg2} /></li>
            }
        </ul>
    );
});

export default PlayerImage;