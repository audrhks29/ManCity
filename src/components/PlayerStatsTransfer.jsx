import { memo } from "react";
import PopupContent from "./Popup/PopupContent";
import PopupGnb from "./Popup/popupGnb";
const PlayerStatsTransfer = memo(() => {

    return (
        <div className="player_stats_transfer">
            <PopupGnb />
            <PopupContent />
        </div>
    );
});

export default PlayerStatsTransfer;