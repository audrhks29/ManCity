
import PersonalDetail from "./PersonalDetail";
import PlayerStatsTransfer from "./PlayerStatsTransfer";


const Popup = ({ isOpen, data, popupName, closePopup, isOpenGnb, OpenGnb, changeImg, playerFace }) => {
    console.log(isOpen);
    console.log(isOpenGnb);
    const selectedItem = data.find(item => item.name === popupName)

    return (
        <>
            {
                selectedItem && <div className={isOpen ? 'popup on' : 'popup'}>
                    <div className="inner">
                        <div className="popupIn">
                            <div className="popupLeft">
                                <img src={`./images${selectedItem.playerInfo.img}`} alt="" />
                                <PersonalDetail selectedItem={selectedItem} />
                            </div>
                            <div className="popupRight">
                                <div className="personalNameNum">
                                    <strong>{selectedItem && selectedItem.name}</strong>
                                    <span>{selectedItem && selectedItem.no}</span>
                                    <div className="closePopup" onClick={closePopup}><i className="xi-close"></i></div>
                                </div>
                                <PlayerStatsTransfer isOpenGnb={isOpenGnb} OpenGnb={OpenGnb} selectedItem={selectedItem} />
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    );
};

export default Popup;