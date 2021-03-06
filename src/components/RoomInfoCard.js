import React from 'react';
import style from '../style/roomCard.module.css'
import data from '../data/roomCard.json'
import {makeStyles} from "@material-ui/core";
import {BsChatDots, BsChatDotsFill, BsFillPersonFill, BsHouse, BsHouseFill} from "react-icons/all";


function RoomInfoCard(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));

    const classes = useStyles();

    return (
        <>{
            data.map((item) => (
                <div>
                    <div>
                        <div className={style.roomCardContainer}>
                            <div className={style.titleContainer}>
                                <h6>{item.title}</h6><BsHouseFill/>
                            </div>

                            <h2>{item.sub_title}</h2>

                            <div className={style.roomMembers}>
                                <div>
                                    <img alt="Remy Sharp" src={item.members[0].profile_picture} className={classes.small}/>
                                    <img alt="Remy Sharp" src={item.members[1].profile_picture}/>
                                </div>
                                <div>
                                    {item.members.map((member) => (
                                        <p>
                                            {member.first_name} {member.last_name} <BsChatDots/>
                                        </p>
                                    ))}
                                    <p className="d-flex align-items-center">
                                        <span className="mx-2">{item.members.length}</span>
                                        <BsFillPersonFill/>
                                        <span className="mx-2"></span>{" "}
                                        <span className="mx-2">{item.members.length +3}</span> <BsChatDotsFill/>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            ))}</>


    );
}

export default RoomInfoCard;