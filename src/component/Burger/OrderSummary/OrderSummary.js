import React from 'react';
import Button from "../../UI/Button/Button";
//import classes from './OrderSummary.module.css';

const orderSummary = ({ingredients, cancelButtonClickHandler, okButtonClickHandler}) => {

    const ingredientSummary = Object.keys(ingredients).map(igKey => {

        let key = igKey.substr(1);
        key = igKey[0].toUpperCase() + key;
        return <li key={igKey}> {key}: {ingredients[igKey]} </li>;

    });

    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button
                btnType={"Danger"} clickHandler={cancelButtonClickHandler}
            >CANCEL</Button>
            <Button
                btnType={"Success"} clickHandler={okButtonClickHandler}
            >CONTINUE</Button>
        </>
    );
};

export default orderSummary;