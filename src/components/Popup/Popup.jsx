
import PlayerStatsTransfer from "./../PlayerStatsTransfer";
import PersonalDetail from './../PersonalDetail';
import { useSelector } from "react-redux";


const Popup = ({ changeImg, playerFace }) => {
    const { playerData } = useSelector(state => state.playerR)
    const { selectedPlayer } = useSelector(state => state.popupR)
    console.log(selectedPlayer);
    return (
        <>
            {
                <div className={selectedPlayer ? 'popup on' : 'popup'}>
                    <div className="inner">
                        <div className="popupIn">
                            <div className="popupLeft">
                                <img src={`./images${selectedPlayer.playerInfo.img}`} alt="" />
                                <PersonalDetail />
                            </div>
                            <div className="popupRight">
                                <div className="personalNameNum">
                                    <strong>{selectedPlayer && selectedPlayer.name}</strong>
                                    <span>{selectedPlayer && selectedPlayer.no}</span>
                                    <div className="closePopup"><i className="xi-close"></i></div>
                                </div>
                                <PlayerStatsTransfer changeImg={changeImg} playerFace={playerFace} />
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    );
};

export default Popup;