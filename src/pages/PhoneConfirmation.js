import React, {useState} from 'react';
import style from "../style/phoneConfirm.module.css"
import PhoneInput from "react-phone-number-input";
import {Link} from "react-router-dom";

function PhoneConfirmation(props) {

    const [value, setValue] = useState(false);
    return (
        <div className={style.phoneConfirmationContainer}>
            <Link exact to={"/"} className={style.backBtn}>
                <img src="/images/arrow.png" alt="<-"/>
            </Link>
            <h1>Enter you phone</h1>
            <PhoneInput international defaultCountry="MA" value={value} onChange={setValue}/>
            <p>By entering your number, you're agreeing to our<span> Terms of service and Privacy Policy </span>Thanks!
            </p>
            <Link exact to='/code_confirm' className="primaryBtn d-flex align-items-center">Next <img
                src='/images/nextArrowIcon.svg' alt=""/> </Link>
        </div>
    );
}

export default PhoneConfirmation;