import { memo } from "react";
import { useSelector } from "react-redux";
import Inner from "./Inner";
const PosList = memo(({ idx, liClick, isPopupOpen, isOpen }) => {
    const { position } = useSelector(state => state.playerR)
    return (
        <div className={`pos${position[idx]}Con`}>
            <Inner idx={idx} liClick={liClick} isPopupOpen={isPopupOpen} isOpen={isOpen} />
        </div>
    );
});
export default PosList;
