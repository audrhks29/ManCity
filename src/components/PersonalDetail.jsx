// import PersonalDetailPd1 from "./PersonalDetailPd1";
// import PersonalDetailPd2 from "./PersonalDetailPd2";

const PersonalDetail = ({ selectedItem }) => {
    const { height, weight, foot } = selectedItem.playerInfo.body
    const { position } = selectedItem.playerInfo
    const { nation, birth, placeOfBirth } = selectedItem.playerInfo
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
                    pd1Data.map(detail => (
                        <li key={detail.key}>
                            <strong>{detail.label}</strong>
                            <span>{detail.value}</span>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
};

export default PersonalDetail;