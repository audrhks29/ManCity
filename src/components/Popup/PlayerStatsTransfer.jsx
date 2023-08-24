import { memo } from "react";
import PopupGnb from "./PopupGnb";
import PopupContent from "./PopupContent";
import { PlayerStatsContainer } from "../../styled/PopupStyle";
const PlayerStatsTransfer = memo(() => {

    return (
        <PlayerStatsContainer>
            <PopupGnb />
            <PopupContent />
        </PlayerStatsContainer>
    );
});

export default PlayerStatsTransfer;