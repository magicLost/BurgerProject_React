import React from 'react';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {

        state = {
            showSideDrawer: true
        };

        sideDrawerCloseHandler = () => {

            this.setState({showSideDrawer: false});

        };

        menuButtonClickHandler = () => {

            this.setState({showSideDrawer: true});

        };

       render(){
           return (
               <>
                   <SideDrawer isShowBackDrop={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
                   <Toolbar menuButtonClickHandler={this.menuButtonClickHandler} />
                   <main className={classes.Content}>
                       {this.props.children}
                   </main>
               </>
           )
       }
}

export default Layout;