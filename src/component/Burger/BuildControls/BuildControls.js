import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [

    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},

];

const buildControls = ({
                           ingredientAdded,
                           ingredientDeleted,
                           isDisabledLessButton,
                           price,
                           isDisableOrderButton,
                           orderButtonClickHandler
}) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{price.toFixed(2)}</strong> </p>
            {controls.map(control => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => {ingredientAdded(control.type);}}
                    deleted={() => {ingredientDeleted(control.type);}}
                    isDisabledLessButton={isDisabledLessButton[control.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={isDisableOrderButton}
                onClick={orderButtonClickHandler}
            >
                ORDER NOW
            </button>
        </div>
    );
};


export default buildControls;