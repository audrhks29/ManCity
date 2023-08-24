import { PlayerTable } from "../../../styled/TableStyle";
import FieldplayerTableTbody from "./FieldplayerTableTbody";
import FieldplayerTableThead from "./FieldplayerTableThead";

const FieldplayerTable = () => {

    return (
        <PlayerTable>
            <colgroup>
                <col width="250px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
                <col width="80px" />
            </colgroup>
            <FieldplayerTableThead />
            <FieldplayerTableTbody />
        </PlayerTable >
    );
};

export default FieldplayerTable;