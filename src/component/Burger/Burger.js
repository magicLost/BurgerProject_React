import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = ({ingredients}) => {

    let transformedIngredient = Object.keys(ingredients).map(ingredientsKey => {

        return [...Array(ingredients[ingredientsKey])].map((_, i) => {
            return (
                <BurgerIngredient key={ingredientsKey + i} type={ingredientsKey} />
            );
        });

    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(transformedIngredient.length === 0)
        transformedIngredient = <p>Please, start adding ingredients</p>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread-top"} />
            {transformedIngredient}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
};

export default burger;