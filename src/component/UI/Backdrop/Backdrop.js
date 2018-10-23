import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = ({show, backdropClickHandler}) => (

    show ? <div className={classes.Backdrop} onClick={backdropClickHandler}></div> : null

);

export default backdrop;