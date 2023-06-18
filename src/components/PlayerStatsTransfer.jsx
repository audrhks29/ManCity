
import PopupContent from "./popupContent";
import PopupGnb from "./popupGnb";
const PlayerStatsTransfer = ({ selectedItem, isOpenGnb, OpenGnb }) => {

    return (
        <div className="player_stats_transfer">
            <PopupGnb OpenGnb={OpenGnb} isOpenGnb={isOpenGnb} />
            <PopupContent selectedItem={selectedItem} isOpenGnb={isOpenGnb} OpenGnb={OpenGnb} />
        </div>
    );
};

export default PlayerStatsTransfer;