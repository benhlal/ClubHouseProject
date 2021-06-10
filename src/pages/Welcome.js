import React from 'react';
import style from '../style/welcome.module.css'
import {Link} from "react-router-dom";

function Welcome(props) {
    return (
        <div className={style.WelcomeContainer}><h1>Welcome !</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    This is really a good exercise aiming to build a clubHouse clone to practice reactJs.
                    Clubhouse is moving quickly today, but in some ways it feels like the journey started a long time
                    ago. The two of us met back in 2011 through a mutual friend, and we connected over a shared love of
                    social products. Back then, Rohan had been working on ways to help friends find each other in
                    cities, and Paul was building an app called Highlight to help people form friendships with others
                    around them. Over the next ten years we both kept working on social products—experimenting with new
                    apps, failing, and starting again
                </p>
            </div>

            <div className={style.actionBtn}>
                <Link exact to='/invite' className="primaryBtn d-flex align-items-center mb-3">Get your
                    username{" "}
                    <img src="" alt=""/>
                </Link>
                <Link exact to='code_confirm' className="d-flex align-items-center mb-3">Have an invite
                    text ? Sign in
                </Link>
            </div>
        </div>
    );
}

export default Welcome;