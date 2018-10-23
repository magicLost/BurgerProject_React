import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = ({label, added, deleted, isDisabledLessButton}) => (

    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button className={classes.Less} onClick={deleted} disabled={isDisabledLessButton}>Less</button>
        <button className={classes.More} onClick={added}>More</button>
    </div>

);

export default buildControl;