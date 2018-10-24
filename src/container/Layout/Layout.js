import React from 'react';
import classes from './Layout.module.css';
import Toolbar from "../../component/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../component/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {

        state = {
            showSideDrawer: false
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