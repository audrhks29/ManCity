import React from 'react';
import { useSelector } from 'react-redux';

const TransferTableLess = () => {
    const { selectedPlayer } = useSelector(state => state.popupR)
    let dataSlice1 = selectedPlayer.playerInfo.transferHistory.slice(0, 8)
    return (
        <table>
            <colgroup>
                <col width="70px" />
                <col width="100px" />
                <col width="150px" />
                <col width="150px" />
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
                    dataSlice1.map((transfer, idx) => (
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
    );
};

export default TransferTableLess;