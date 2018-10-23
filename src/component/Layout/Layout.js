import React from 'react';
import classes from './Layout.module.css';

const layout = ({ children }) => {

        /*if(children.length === undefined){

           if(children.type.name === "BurgerBuilder"){

               console.log(children.type.name);
               //chidren.props.prush();
           }

        }else{

            console.log(children[0]);
        }*/

        return (
            <>
                <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {children}
                </main>
            </>
        )
};

export default layout;