const GkplayerTableThead = () => {
    const gkpalyerTableTheadImg = [
        { label: "Competition", key: "Competition" },
        { label: "Appearances", key: "Appearances", img: '../../public/images/appearances.svg' },
        { label: "Goals Conceded", key: "Goals Conceded", img: '../../public/images/goalsConceded.svg' },
        { label: "Clean Sheets", key: "Clean Sheets", img: '../../public/images/cleansheets.svg' },
        { label: "Play Time", key: "Play Time", img: '../../public/images/playTime.svg' },
    ]
    return (
        <thead>
            <tr>
                {
                    gkpalyerTableTheadImg.map(item => {
                        const { img, label } = item
                        return img ? <th key={item.key}><img src={img} alt={label} title={label} /></th> : <th key={item.key}>{label}</th>
                    })
                }
            </tr>
        </thead>
    );
};

export default GkplayerTableThead;