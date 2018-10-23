import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = ({closed, isShowBackDrop}) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];

    if(isShowBackDrop){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <Backdrop show={isShowBackDrop} backdropClickHandler={closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;