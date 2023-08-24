import { memo } from "react";
import PlayerStatsTransfer from "./PlayerStatsTransfer";
import PersonalDetail from './PersonalDetail';
import { useDispatch, useSelector } from "react-redux";
import { togglePopup, isSelectPlayer } from "../../store/module/PopupStatusSlice";
import { PersonalNameContainer, PopupContainer, PopupInnerContainer, PopupLeftContainer, PopupRightContainer } from "../../styled/PopupStyle";

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
                <PopupContainer>
                    <div className="inner">
                        <PopupInnerContainer>
                            <PopupLeftContainer>
                                <img src={`./images${selectedPlayer.playerInfo.img}`} alt="" />
                                <PersonalDetail />
                            </PopupLeftContainer>
                            <PopupRightContainer>
                                <PersonalNameContainer>
                                    <strong>{selectedPlayer && selectedPlayer.name}</strong>
                                    <span>{selectedPlayer && selectedPlayer.no}</span>
                                    <div className="closePopup" onClick={() => onClickList(null)}><i className="xi-close"></i></div>
                                </PersonalNameContainer>
                                <PlayerStatsTransfer />
                            </PopupRightContainer>
                        </PopupInnerContainer>
                    </div>
                </PopupContainer >
            }
        </>
    );
});

export default Popup;