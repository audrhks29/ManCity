import React from 'react';
import TransferTableMore from './TransferTableMore';
import TransferTableLess from './TransferTableLess';

const TransferTable = ({ selectedItem }) => {
    return (
        <>
            {
                selectedItem.playerInfo.transferHistory.length > 8 ?
                    <TransferTableMore selectedItem={selectedItem} />
                    : <TransferTableLess selectedItem={selectedItem} />
            }
        </>
    );
};

export default TransferTable;