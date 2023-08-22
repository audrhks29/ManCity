import PopupContent from "./Popup/PopupContent";
import PopupGnb from "./Popup/popupGnb";
const PlayerStatsTransfer = ({ selectedItem, isOpenGnb, OpenGnb, changeImg, playerFace }) => {

    return (
        <div className="player_stats_transfer">
            <PopupGnb OpenGnb={OpenGnb} isOpenGnb={isOpenGnb} />
            <PopupContent selectedItem={selectedItem} isOpenGnb={isOpenGnb} OpenGnb={OpenGnb} changeImg={changeImg} playerFace={playerFace} />
        </div>
    );
};

export default PlayerStatsTransfer;