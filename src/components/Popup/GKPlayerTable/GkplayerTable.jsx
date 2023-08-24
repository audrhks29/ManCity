import GkplayerTableTbody from "./GkplayerTableTbody";
import GkplayerTableThead from "./GkplayerTableThead";

const GkplayerTable = () => {

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
            <GkplayerTableTbody />
        </table >
    );
};

export default GkplayerTable;