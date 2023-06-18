import Inner from "./Inner";

const PosList = ({ data, posi, idx, liClick, isPopupOpen, isOpen }) => {
    return (
        <div className={`pos${posi[idx]}Con`}>
            <Inner posi={posi} idx={idx} data={data} liClick={liClick} isPopupOpen={isPopupOpen} isOpen={isOpen} />
        </div>
    );
};

export default PosList;