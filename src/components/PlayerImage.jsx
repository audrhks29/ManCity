import React from 'react';

const PlayerImage = ({ selectedItem, changeImg, playerFace }) => {
    console.log(selectedItem.playerInfo.moreimg1);
    return (
        <ul className='playerImage'>
            <li onClick={() => changeImg(selectedItem.playerInfo.img)}><img src={`./images${selectedItem.playerInfo.img}`} /></li>
            {
                selectedItem.playerInfo.moreimg1 &&
                <li onClick={() =>
                    changeImg(selectedItem.playerInfo.moreimg1)
                }>
                    <img src={selectedItem.playerInfo.moreimg1} />
                </li>
            }
            {
                selectedItem.playerInfo.moreimg2 &&
                <li onClick={() =>
                    changeImg(selectedItem.playerInfo.moreimg2)}>
                    <img src={selectedItem.playerInfo.moreimg2} />
                </li>
            }
        </ul>
    );
};

export default PlayerImage;