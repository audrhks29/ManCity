import FieldplayerTable from "./FieldplayerTable";
import GkplayerTable from "./GkplayerTable";
import TransferTable from "./TransferTable";
import PlayerImage from "./playerImage";

const PopupContent = ({ isOpenGnb, selectedItem }) => {
    return (
        <div className="popupContent">
            {isOpenGnb === 1 ? selectedItem.playerInfo.position === "GK" ? <GkplayerTable selectedItem={selectedItem} /> : <FieldplayerTable selectedItem={selectedItem} /> : ""}
            {isOpenGnb === 2 ? <TransferTable selectedItem={selectedItem} /> : ""}
            {isOpenGnb === 3 ? <PlayerImage selectedItem={selectedItem} /> : ""}
        </div>
    );
};

export default PopupContent;