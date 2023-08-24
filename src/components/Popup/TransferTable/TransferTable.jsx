import React from 'react';
import TransferTableMore from './TransferTableMore';
import TransferTableLess from './TransferTableLess';
import { useSelector } from 'react-redux';

const TransferTable = () => {
    const { selectedPlayer } = useSelector(state => state.popupR)
    return (
        <>
            {
                selectedPlayer.playerInfo.transferHistory.length > 8 ?
                    <TransferTableMore />
                    : <TransferTableLess />
            }
        </>
    );
};

export default TransferTable;