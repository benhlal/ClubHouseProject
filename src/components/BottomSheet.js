import React from 'react';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet/lib/SwipeableBottomSheet";
import style from '../style/buttomSheet.module.css'
import StartRoom from "./bottomsheets/StartRoom";

function BottomSheet(props) {
    return (
        <SwipeableBottomSheet open={props.sheetVisible}
                              onChange={() => {
                                  props.setSheetVisible(!props.sheetVisible)
                                  props.setItemsVisible(true)
                              }}
                              fullScreen={props.sheetTitle === 'room detail' ? true : false}>
            <div className={style.bottomSheetContainer}
                 style={{backgroundColor: props.sheetTitle === 'profile' ? "transparent" : ''}}>


                <StartRoom setSheetCreateRoom={props.setSheetCreateRoom}
                           setSheetVisible={(item) => {
                               props.setSheetVisible(item);
                               props.setItemsVisible(true);


                           }
                           }

                />
            </div>

        </SwipeableBottomSheet>

    )
        ;
}

export default BottomSheet;