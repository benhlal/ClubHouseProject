import React, {useState} from 'react';
import Header from "../components/Header";
import DailyCard from "../components/DailyCard";
import style from '../style/home.module.css'
import RoomInfoCard from "../components/RoomInfoCard";
import {AiOutlinePlus, AiOutlinePushpin, BsGrid3X3Gap} from "react-icons/all";
import data from '../data/roomCard.json'
import BottomSheet from "../components/BottomSheet"

function Home(props) {

    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetVisible, setISheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (<>
        <Header/>
        <div className={style.homeCardContainer}>
            <DailyCard/>
            <RoomInfoCard/>
        </div>

        <div className={style.actionBtn}>
            <button onClick={setISheetVisible(true)}>
                <AiOutlinePlus style={{marginRight: '0.500em'}}/>
                Start a room
            </button>
            <button>
                <BsGrid3X3Gap style={{marginRight: '0.500em'}}/>
            </button>
        </div>
        <BottomSheet sheetTitle={'start room'}
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

                         }

                     }


                         />
                         </>

                         )
                         ;
                     }

export default Home;