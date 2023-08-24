import { memo } from "react";
import { useSelector } from "react-redux";
import Inner from "./Inner";
const PosList = memo(({ idx }) => {
    const { position } = useSelector(state => state.playerR)
    return (
        <div className={`pos${position[idx]}Con`}>
            <Inner idx={idx} />
        </div>
    );
});
export default PosList;
