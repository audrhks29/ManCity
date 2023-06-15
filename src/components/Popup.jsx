const Popup = ({ isPopupOpen, data, popupName }) => {
    const selectedItem = data.find(item => item.name === popupName)

    return (
        <div className={isPopupOpen === popupName ? 'popup' : 'popup hide'}>
            <div className="popupTop">
                <img src={`./images${selectedItem && selectedItem.playerInfo.img}`} alt="" />
            </div>
            <dl className="playerInfo">
                <p>Player Info</p>
                <dt>Date of Birth</dt>
                <dd>{selectedItem && selectedItem.playerInfo.birth}</dd>
                <dt>Place of Birth</dt>
                <dd>{selectedItem && selectedItem.playerInfo.placeOfBirth}</dd>
                <dt>Nation</dt>
                <dd>{selectedItem && selectedItem.playerInfo.nation}</dd>
                <dt>Position</dt>
                <dd>{selectedItem && selectedItem.playerInfo.position}</dd>
                <dt>Joined City</dt>
                <dd>{selectedItem && selectedItem.playerInfo.joinCity}</dd>
            </dl>
            <dl className="playerBodyIndex">
                <p>Player Body</p>
                <dt>Height</dt>
                <dd>{selectedItem && selectedItem.playerInfo.body.height}cm</dd>
                <dt>Weight</dt>
                <dd>{selectedItem && selectedItem.playerInfo.body.weight}kg</dd>
                <dt>Foot</dt>
                <dd>{selectedItem && selectedItem.playerInfo.body.foot}</dd>
            </dl>
            <table className="playerStats fieldPlayer">
                <colgroup>
                    <col width="200px" />
                    <col width="200px" />
                    <col width="200px" />
                    <col width="200px" />
                    <col width="200px" />
                </colgroup>
                <thead>
                    <tr>
                        <th>Competition</th>
                        <th>appearances</th>
                        <th>Goal</th>
                        <th>Assists</th>
                        <th>PlayTime</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Champions League</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.championsLeague.appearances}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.championsLeague.goal}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.championsLeague.assists}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.championsLeague.playTime}</td>
                    </tr>
                    <tr>
                        <td>Premier League</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.premierLeague.appearances}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.premierLeague.goal}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.premierLeague.assists}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.premierLeague.playTime}</td>
                    </tr>
                    <tr>
                        <td>FA Cup</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.faCup.appearances}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.faCup.goal}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.faCup.assists}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.faCup.playTime}</td>
                    </tr>
                    <tr>
                        <td>EFL Cup</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.eflCup.appearances}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.eflCup.goal}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.eflCup.assists}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.eflCup.playTime}</td>
                    </tr>
                    <tr>
                        <td>Community Shield</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.communityShield.appearances}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.communityShield.goal}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.communityShield.assists}</td>
                        <td>{selectedItem && selectedItem.playerInfo.stats.communityShield.playTime}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <colgroup>
                    <col width="200px" />
                    <col width="200px" />
                    <col width="200px" />
                    <col width="200px" />
                </colgroup>
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Date</th>
                        <th>LeftTeam</th>
                        <th>JoinedTeam</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedItem && selectedItem.playerInfo.transferHistory.map((transfer, idx) => (
                            <tr key={idx}>
                                <td>{transfer.season}</td>
                                <td>{transfer.date}</td>
                                <td>{transfer.leftTeam}</td>
                                <td>{transfer.joinedTeam}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </div >
    );
};

export default Popup;