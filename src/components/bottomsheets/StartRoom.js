import React, {useState} from 'react';
import style from '../../style/startRoom.module.css'
import {FcGlobe, FcPrivacy, FcShare} from "react-icons/all";

function StartRoom(props) {

    const [room, setRoom] = useState("open")

    return (
        <>
            <div className={style.switch_line}></div>

            <div>
                <button className={style.add_topic_btn}>+ Add a topic</button>
            </div>

            <div className={style.selected_room}>
                <button className={room.toLowerCase() === "open" ? style.active : ""}
                        onClick={() => setRoom("Open")}>
                    <div><FcGlobe/></div>
                    Open
                </button>


                <button className={room.toLowerCase() === "social" ? style.active : ""}
                        onClick={() => setRoom("Social")}>
                    <div><FcShare/></div>
                    Social
                </button>

                <button className={room.toLowerCase() === "closed" ? style.active : ""}
                        onClick={() => setRoom("Closed")}>
                    <div><FcPrivacy/></div>
                    Closed
                </button>
            </div>
            <p>Start a room <span>{
                room.toLowerCase() == 'closed'
                    ? 'for people I chose'
                    : room.toLowerCase() == 'social'
                    ? 'with people I follow'
                    : 'open to everyone'
            }</span></p>
            <div className="text-center">
                <button className={style.let_go_btn}
                        onClick={() => {
                            props.setSheetCreateRoom(true)
                            props.setSheetVisible(true)
                        }}>
                    🎉 Let's Go
                </button>
            </div>
        </>

    );
}

export default StartRoom;