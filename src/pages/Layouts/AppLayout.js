import React from 'react';
import style from '../../style/appLayout.module.css';


function AppLayout({children}) {
    return (
        <div className={style.appLayout}>
            {children}
        </div>
    );
}

export default AppLayout;