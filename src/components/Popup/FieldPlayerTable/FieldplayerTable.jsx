import FieldplayerTableTbody from "./FieldplayerTableTbody";
import FieldplayerTableThead from "./FieldplayerTableThead";

const FieldplayerTable = () => {

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
            <FieldplayerTableTbody />
        </table >
    );
};

export default FieldplayerTable;