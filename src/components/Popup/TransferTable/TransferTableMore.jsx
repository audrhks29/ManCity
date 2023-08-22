import TransferTableLess from './TransferTableLess';
const TransferTableMore = ({ selectedItem }) => {
    let dataSlice2 = selectedItem.playerInfo.transferHistory.slice(8, 20)
    return (
        <>
            <TransferTableLess selectedItem={selectedItem} />
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
                        dataSlice2.map((transfer, idx) => (
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
        </>
    );
};

export default TransferTableMore;