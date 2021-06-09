import React, {useState} from 'react';
import Header from "../components/Header";
import DailyCard from "../components/DailyCard";
import style from '../style/home.module.css'
import RoomInfoCard from "../components/RoomInfoCard";
import {AiOutlinePlus, BsGrid3X3Gap} from "react-icons/all";
import data from '../data/roomCard.json'
import newRoomData from '../data/newRoom.json'
import BottomSheet from "../components/BottomSheet"

function Home(props) {

    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetVisible, setISheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (<>
            {loaderVisibility ? (
                <div style={{
                    position: "fixed",
                    top: '0',
                    right: '0',
                    left: '0',
                    bottom: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img src="/images/loader.gif" alt=""/>
                </div>
            ) : (
                ""
            )}
            <Header/>
            <div className={style.homeCardContainer}>
                <DailyCard/>
                <RoomInfoCard/>
            </div>

            <div className={style.actionBtn}>
                <button onClick={() => setISheetVisible(true)}>
                    <AiOutlinePlus style={{marginRight: '0.500em'}}/>
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap style={{marginRight: '0.500em'}}/>
                </button>
            </div>
            <BottomSheet sheetTitle="start_room"
                         setSheetVisible={(item) => setISheetVisible(item)}
                         sheetVisible={sheetVisible}
                         cardDetail={
                             data.find((item) => item.id == cardId)
                         }
                         setItemsVisible={(item) => setItemsVisible(item)}
                         setSheetCreateRoom={

                             (item) => {
                                 setLoaderVisibility(true);
                                 setTimeout(() => {
                                     setSheetCreateRoom(item);
                                     setLoaderVisibility(false)
                                 }, 1000);
                             }}
            />

            <BottomSheet
                sheetTitle='new_room'
                setSheetVisible={(item) => setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={(item) => setItemsVisible(item)}
            />
        </>
    )
        ;
}

export default Home;