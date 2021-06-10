import React from 'react';
import exportStyle from '../style/explore.module.css';
import style from '../style/profile.module.css'

import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineSetting,
    AiOutlineTwitter,
    BsAt, BsPlus,
    BsUpload
} from "react-icons/all";
import {Link} from "react-router-dom";

function Profile(props) {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exportStyle.header}>
                    <div className={style.iconsHeader}>
                        <Link exact to="/home">
                            <img src="/images/arrow.png" alt=""/>
                        </Link>

                        <div className={style.actionBtn}>
                            <BsAt/>
                            <BsUpload/>
                            <AiOutlineSetting/>
                        </div>
                    </div>
                </div>

                <img src="/images/user-img.jpg" alt={''} className={style.profilePicture}/>
                <h4>BENHLAL Youness</h4>
                <p>@TheProProg</p>
                <div className={style.follow}>
                    <p>
                        <span>2</span> followers
                    </p>

                    <p>
                        <span>42</span> following
                    </p>
                </div>
                <button>Add a bio</button>
                <div className={style.buttonContainer}>
                    <button className="mb-0">
                        <AiOutlineTwitter/> Add Twitter
                    </button>
                    <button className="mb-0">
                        <AiOutlineInstagram/> Add Instagram
                    </button>
                    <button className="mb-0">
                        <AiOutlineLinkedin/> Add Linkedin
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/user-img.jpg"/>
                    <div>
                        <p>This person joined {new Date().toLocaleString() + ''} </p>
                        <p>Nominated by <span>Elon Musk</span></p>
                    </div>
                </div>

                <p>member of </p>
                <button className={style.addMember}><BsPlus/></button>
            </div>

        </>
    );
}

export default Profile;