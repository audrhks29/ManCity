import { memo } from "react";
import Inner from "./Inner";
const PosList = memo(({ idx }) => {
    return (
        <Inner idx={idx} />
    );
});
export default PosList;
