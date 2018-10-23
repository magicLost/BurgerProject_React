import React from 'react';
import burgerLogo from '../../asset/image/132 burger-logo.png'
import classes from './Logo.module.css';

const logo = () => (

    <div className={classes.Logo}>
        <img src={burgerLogo} alt={"Logo"} />
    </div>

);

export default logo;