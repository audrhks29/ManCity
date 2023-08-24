import { memo } from "react";
import GkplayerTable from "./GKPlayerTable/GkplayerTable";
import TransferTable from "./TransferTable/TransferTable";
import FieldplayerTable from './FieldPlayerTable/FieldplayerTable';
import PlayerImage from "./playerImage";
import { useSelector } from "react-redux";
import { PopupContentContainer } from "../../styled/PopupStyle";


const PopupContent = memo(() => {
    const { popupMenu, selectedPlayer } = useSelector(state => state.popupR)
    return (
        <PopupContentContainer>
            {
                popupMenu === 1
                    ? selectedPlayer.playerInfo.position === "GK"
                        ? <GkplayerTable />
                        : <FieldplayerTable /> : ""
            }
            {
                popupMenu === 2
                    ? <TransferTable />
                    : ""
            }
            {
                popupMenu === 3
                    ? <PlayerImage />
                    : ""
            }
        </PopupContentContainer>
    );
});

export default PopupContent;