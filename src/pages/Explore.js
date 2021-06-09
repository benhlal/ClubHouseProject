import React from 'react';
import data from '../data/Explore.json';
import style from '../style/explore.module.css'
import {DownOutlined} from "@ant-design/icons"

function Explore(props) {


    const {people, conversation} = data;
    return (
        <div className={style.exploreContainer}>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={style.peopleContainer}>
                {people.map((p) => (
                    <div>
                        <div className="d-flex align-items-center">
                            <img src="images/user-img.jpg" alt=""/>
                            <div className="mx-2">
                                <h5>{p.title}</h5>
                                <p>{p.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <button className={style.showMore}>
                    Show more people <DownOutlined/>
                </button>

            </div>

        </div>
    );
}

export default Explore;