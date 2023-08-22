import FieldplayerTableTbody from "./FieldplayerTableTbody";
import FieldplayerTableThead from "./FieldplayerTableThead";

const FieldplayerTable = ({ selectedItem }) => {

    return (
        <table className="playerStats fieldPlayer">
            <colgroup>
                <col width="250px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
            </colgroup>
            <FieldplayerTableThead />
            <FieldplayerTableTbody selectedItem={selectedItem} />
        </table >
    );
};

export default FieldplayerTable;