import React from 'react';
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.2,
    cheese: 0.9,
    meat: 1.3,
    bacon: 0.9
};

class BurgerBuilder extends React.Component{

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        totalIngredients: 0,
        isOrderButtonClicked: false
    };

    orderButtonClickHandler = () => {

        this.setState({isOrderButtonClicked: true});

    };

    backdropClickHandler = () => {

        this.setState({isOrderButtonClicked: false});

    };

    orderContinueHendler = () => {

        alert("Continue");

    };

    getTotalIngredients(increment){

        return (increment) ? this.state.totalIngredients + 1 : this.state.totalIngredients - 1;

    }

    addIngredientHandler = (type) => {

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
            totalIngredients: this.getTotalIngredients(true)
        });

    };

    deleteIngredientHandler = (type) => {

        if(this.state.ingredients[type] === 0)
            return;

        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = this.state.ingredients[type] - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
            totalIngredients: this.getTotalIngredients(false)
        });

    };


    render () {

        const isDisabledLessButton = {
            ...this.state.ingredients
        };
        for(let key in isDisabledLessButton){
            isDisabledLessButton[key] = isDisabledLessButton[key] <= 0;
        }

        return (
            <>

                <Modal show={this.state.isOrderButtonClicked} backdropClickHandler={this.backdropClickHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelButtonClickHandler={this.backdropClickHandler}
                        okButtonClickHandler={this.orderContinueHendler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.deleteIngredientHandler}
                    isDisabledLessButton={isDisabledLessButton}
                    price={this.state.totalPrice}
                    isDisableOrderButton={this.state.totalIngredients <= 0}
                    orderButtonClickHandler={this.orderButtonClickHandler}
                />
            </>
        );
    }
}

export default BurgerBuilder;