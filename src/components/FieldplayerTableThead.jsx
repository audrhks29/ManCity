const FieldplayerTableThead = () => {
    const fieldpalyerTableTheadImg = [
        { label: "Competition", key: "Competition" },
        { label: "Appearances", key: "Appearances", img: './images/appearances.svg' },
        { label: "Goal", key: "goal", img: './images/goal.svg' },
        { label: "Assists", key: "Assists", img: './images/assists.svg' },
        { label: "Play Time", key: "Play Time", img: './images/playTime.svg' },
    ]
    return (
        <thead>
            <tr>
                {
                    fieldpalyerTableTheadImg.map(item => {
                        const { img, label } = item
                        return img ? <th key={item.key}><img src={img} alt={label} title={label} /></th> : <th key={item.key}>{label}</th>
                    })
                }
            </tr>
        </thead>
    );
};

export default FieldplayerTableThead;