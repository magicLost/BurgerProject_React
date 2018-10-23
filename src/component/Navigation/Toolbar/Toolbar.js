import React from 'react';
import classes from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import OpenSideDrawerButton from "../SideDrawer/OpenSideDrawerButton/OpenSideDrawerButton";

const toolbar = ({menuButtonClickHandler}) => (

    <header className={classes.Toolbar}>
        <OpenSideDrawerButton menuButtonClickHandler={menuButtonClickHandler} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>

);

export default toolbar;