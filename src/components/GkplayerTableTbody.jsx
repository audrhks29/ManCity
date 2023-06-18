const GkplayerTableTbody = ({ selectedItem }) => {
    const { championsLeague, premierLeague, faCup, eflCup, communityShield } = selectedItem.playerInfo.stats
    const gkplayerTableTbodyData = [
        {
            label: "champions League", img: "../../public/images/cl.png",
            league: {
                appearances: championsLeague.appearances,
                goalsConceded: championsLeague.goalsConceded,
                cleanSheets: championsLeague.cleanSheets,
                playtime: championsLeague.playTime
            }
        },
        {
            label: "premier League", img: "../../public/images/gb1.png",
            league: {
                appearances: premierLeague.appearances,
                goalsConceded: premierLeague.goalsConceded,
                cleanSheets: premierLeague.cleanSheets,
                playtime: premierLeague.playTime
            }
        },
        {
            label: "FA Cup", img: "../../public/images/fac.png",
            league: {
                appearances: faCup.appearances,
                goalsConceded: faCup.goalsConceded,
                cleanSheets: faCup.cleanSheets,
                playtime: faCup.playTime
            }
        },
        {
            label: "EFL Cup", img: "../../public/images/cgb.png",
            league: {
                appearances: eflCup.appearances,
                goalsConceded: eflCup.goalsConceded,
                cleanSheets: eflCup.cleanSheets,
                playtime: eflCup.playTime
            }
        },
        {
            label: "Community Shield", img: "../../public/images/gbcs.png",
            league: {
                appearances: communityShield.appearances,
                goalsConceded: communityShield.goalsConceded,
                cleanSheets: communityShield.cleanSheets,
                playtime: communityShield.playTime
            }
        }
    ]
    return (
        <tbody>
            {
                gkplayerTableTbodyData.map((item, idx) =>
                    <tr key={item.label}>
                        <td><img src={item.img} alt="" />{item.label}</td>
                        <td>{item.league.appearances}</td>
                        <td>{item.league.goalsConceded}</td>
                        <td>{item.league.cleanSheets}</td>
                        <td>{item.league.playtime}</td>
                    </tr>
                )
            }

        </tbody>
    );
};

export default GkplayerTableTbody;