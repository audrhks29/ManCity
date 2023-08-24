import { memo } from "react";
import GkplayerTable from "./GKPlayerTable/GkplayerTable";
import TransferTable from "./TransferTable/TransferTable";
import FieldplayerTable from './FieldPlayerTable/FieldplayerTable';
import PlayerImage from "../playerImage";
import { useDispatch, useSelector } from "react-redux";


const PopupContent = memo(() => {
    const { popupMenu, selectedPlayer } = useSelector(state => state.popupR)
    const dispatch = useDispatch()
    return (
        <div className="popupContent">
            {
                popupMenu === 1
                    ? selectedPlayer.playerInfo.position === "GK"
                        ? <GkplayerTable />
                        : <FieldplayerTable /> : ""
            }
            {popupMenu === 2 ? <TransferTable /> : ""}
            {popupMenu === 3 ? <PlayerImage /> : ""}
        </div>
    );
});

export default PopupContent;