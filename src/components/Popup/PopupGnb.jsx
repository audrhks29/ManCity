import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangePopupMenu } from '../../store/module/PopupStatusSlice';

const PopupGnb = memo(() => {
    const { popupMenu } = useSelector(state => state.popupR)
    const dispatch = useDispatch()
    return (
        <div className="popupGnb">
            <ul>
                <li onClick={() => dispatch(onChangePopupMenu(1))} className={popupMenu === 1 ? "on" : ""}>Stats</li>
                <li onClick={() => dispatch(onChangePopupMenu(2))} className={popupMenu === 2 ? "on" : ""}>TransferHistory</li>
                <li onClick={() => dispatch(onChangePopupMenu(3))} className={popupMenu === 3 ? "on" : ""}>Image</li>
            </ul>
        </div>
    );
});

export default PopupGnb;