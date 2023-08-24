import { memo } from "react";
import PlayerStatsTransfer from "./../PlayerStatsTransfer";
import PersonalDetail from './../PersonalDetail';
import { useDispatch, useSelector } from "react-redux";
import { togglePopup, isSelectPlayer } from "../../store/module/PopupStatusSlice";

const Popup = memo(() => {
    const { selectedPlayer } = useSelector(state => state.popupR)
    const dispatch = useDispatch()
    const onClickList = (item) => {
        dispatch(isSelectPlayer(item))
        dispatch(togglePopup())
    }
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
                                    <div className="closePopup" onClick={() => onClickList(null)}><i className="xi-close"></i></div>
                                </div>
                                <PlayerStatsTransfer />
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    );
});

export default Popup;