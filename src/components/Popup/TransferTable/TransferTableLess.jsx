import React from 'react';

const TransferTableLess = ({ selectedItem }) => {
    let dataSlice1 = selectedItem.playerInfo.transferHistory.slice(0, 8)
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