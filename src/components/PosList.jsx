import Inner from "./Inner";

const PosList = ({ data, posi, idx, liClick, isPopupOpen }) => {
    return (
        <div className={`pos${posi[idx]}Con`}>
            <Inner posi={posi} idx={idx} data={data} liClick={liClick} isPopupOpen={isPopupOpen} />
        </div>
    );
};

export default PosList;