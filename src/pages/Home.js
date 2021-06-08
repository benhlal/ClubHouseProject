import React from 'react';
import Header from "../components/Header";
import DailyCard from "../components/DailyCard";
import style from '../style/home.module.css'
import RoomInfoCard from "../components/RoomInfoCard";
import {AiOutlinePlus, AiOutlinePushpin, BsGrid3X3Gap} from "react-icons/all";

function Home(props) {
    return (<>
            <Header/>
            <div className={style.homeCardContainer}>
                <DailyCard/>
                <RoomInfoCard/>
            </div>

            <div className={style.actionBtn}>
                <button>
                    <AiOutlinePlus style={{marginRight: '0.500em'}}/>
                    Start a room
                </button>
                <button>
                    <BsGrid3X3Gap style={{marginRight: '0.500em'}}/>
                </button>
            </div>
        </>

    )
        ;
}

export default Home;