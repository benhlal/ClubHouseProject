import React from 'react';
import SwipeableBottomSheet from "react-swipeable-bottom-sheet/lib/SwipeableBottomSheet";
import style from '../style/buttomSheet.module.css'
import StartRoom from "./bottomsheets/StartRoom";
import NewRoom from "./bottomsheets/NewRoom";

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

                {

                    props.sheetTitle.toLowerCase() == "new_room" ? (
                            <NewRoom cardDetail={props.cardDetail}
                                     setSheetVisible={(item) => {
                                         props.setSheetVisible(item);
                                         props.setItemsVisible(true);
                                         console.log("condition", props.sheetTitle)
                                     }}
                            />
                        ) :
                        props.sheetTitle.toLowerCase() == "start_room" ?
                            (
                                <StartRoom setSheetCreateRoom={props.setSheetCreateRoom}
                                           setSheetVisible={(item) => {
                                               props.setSheetVisible(item);
                                               props.setItemsVisible(true);
                                               console.log("condition 2", props.sheetTitle)
                                           }}
                                />
                            ) : ("")
                }
            </div>
        </SwipeableBottomSheet>
    );
}

export default BottomSheet;