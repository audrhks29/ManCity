import GkplayerTableTbody from "./GkplayerTableTbody";
import GkplayerTableThead from "./GkplayerTableThead";

const gkplayerTable = ({ selectedItem }) => {

    return (
        <table className="playerStats fieldPlayer">
            <colgroup>
                <col width="250px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
            </colgroup>
            <GkplayerTableThead />
            <GkplayerTableTbody selectedItem={selectedItem} />
        </table >
    );
};

export default gkplayerTable;