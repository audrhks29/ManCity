import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangePopupMenu } from '../../store/module/PopupStatusSlice';
import { PopupGnbContainer } from '../../styled/PopupStyle';

const PopupGnb = memo(() => {
    const { popupMenu } = useSelector(state => state.popupR)
    const dispatch = useDispatch()
    return (
        <PopupGnbContainer>
            <ul>
                <li onClick={() => dispatch(onChangePopupMenu(1))} className={popupMenu === 1 ? "on" : ""}>Stats</li>
                <li onClick={() => dispatch(onChangePopupMenu(2))} className={popupMenu === 2 ? "on" : ""}>TransferHistory</li>
                <li onClick={() => dispatch(onChangePopupMenu(3))} className={popupMenu === 3 ? "on" : ""}>Image</li>
            </ul>
        </PopupGnbContainer>
    );
});

export default PopupGnb;