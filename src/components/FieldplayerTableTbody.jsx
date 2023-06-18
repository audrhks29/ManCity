const FieldplayerTableTbody = ({ selectedItem }) => {
    const { championsLeague, premierLeague, faCup, eflCup, communityShield } = selectedItem.playerInfo.stats
    const FieldplayerTableTbodyData = [
        {
            label: "champions League", img: "../../public/images/cl.png",
            league: {
                appearances: championsLeague.appearances,
                goal: championsLeague.goal,
                assists: championsLeague.assists,
                playtime: championsLeague.playTime
            }
        },
        {
            label: "premier League", img: "../../public/images/gb1.png",
            league: {
                appearances: premierLeague.appearances,
                goal: premierLeague.goal,
                assists: premierLeague.assists,
                playtime: premierLeague.playTime
            }
        },
        {
            label: "FA Cup", img: "../../public/images/fac.png",
            league: {
                appearances: faCup.appearances,
                goal: faCup.goal,
                assists: faCup.assists,
                playtime: faCup.playTime
            }
        },
        {
            label: "EFL Cup", img: "../../public/images/cgb.png",
            league: {
                appearances: eflCup.appearances,
                goal: eflCup.goal,
                assists: eflCup.assists,
                playtime: eflCup.playTime
            }
        },
        {
            label: "Community Shield", img: "../../public/images/gbcs.png",
            league: {
                appearances: communityShield.appearances,
                goal: communityShield.goal,
                assists: communityShield.assists,
                playtime: communityShield.playTime
            }
        }
    ]
    return (
        <tbody>
            {
                FieldplayerTableTbodyData.map((item, idx) =>
                    <tr key={item.label}>
                        <td><img src={item.img} alt="" />{item.label}</td>
                        <td>{item.league.appearances}</td>
                        <td>{item.league.goal}</td>
                        <td>{item.league.assists}</td>
                        <td>{item.league.playtime}</td>
                    </tr>
                )
            }

        </tbody>
    );
};

export default FieldplayerTableTbody;