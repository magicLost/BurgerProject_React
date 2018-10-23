import React from 'react';
import classes from './OpenSideDrawerButton.module.css';

const openSideDrawerButton = ({menuButtonClickHandler}) => (

    <div className={classes.DrawerToggle} onClick={menuButtonClickHandler}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default openSideDrawerButton;