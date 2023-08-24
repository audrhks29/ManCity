import { memo } from "react";
import { useSelector } from "react-redux";

const PersonalDetail = memo(() => {
    const { selectedPlayer } = useSelector(state => state.popupR)
    const { height, weight, foot } = selectedPlayer.playerInfo.body
    const { position } = selectedPlayer.playerInfo
    const { nation, birth, placeOfBirth } = selectedPlayer.playerInfo
    const pd1Data = [
        { label: 'Position', key: 'position', value: position },
        { label: 'Height', key: 'height', value: `${height}cm` },
        { label: 'Weight', key: 'weight', value: `${weight}kg` },
        { label: 'Foot', key: 'foot', value: foot },
        { label: 'Nation', key: 'nation', value: nation },
        { label: 'Date Of Birth', key: 'birth', value: birth },
        { label: 'Place Of Birth', key: 'placeOfBirth', value: placeOfBirth }
    ];

    return (
        <div className="personalDetailList">
            <ul>
                {
                    pd1Data.map(item => (
                        <li key={item.key}>
                            <strong>{item.label}</strong>
                            <span>{item.value}</span>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
});

export default PersonalDetail;