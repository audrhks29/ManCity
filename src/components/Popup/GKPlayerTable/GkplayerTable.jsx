import { PlayerTable } from "../../../styled/TableStyle";
import GkplayerTableTbody from "./GkplayerTableTbody";
import GkplayerTableThead from "./GkplayerTableThead";

const GkplayerTable = () => {

    return (
        <PlayerTable>
            <colgroup>
                <col width="250px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
            </colgroup>
            <GkplayerTableThead />
            <GkplayerTableTbody />
        </PlayerTable >
    );
};

export default GkplayerTable;