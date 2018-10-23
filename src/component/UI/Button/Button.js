import React from 'react';
import classes from './Button.module.css';

const button = ({clickHandler, children, btnType}) => (
    <button
        className={[classes.Button, classes[btnType]].join(' ')}
        onClick={clickHandler}
    >{children}</button>
);

export default button;