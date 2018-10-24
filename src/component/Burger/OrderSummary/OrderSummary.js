import React from 'react';
import Button from "../../UI/Button/Button";
//import classes from './OrderSummary.module.css';

class orderSummary extends React.Component {

    render(){
       const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {

           let key = igKey.substr(1);
           key = igKey[0].toUpperCase() + key;
           return <li key={igKey}> {key}: {this.props.ingredients[igKey]} </li>;

       });

       return (
           <>
               <h3>Your order</h3>
               <p>A delicious burger with the following ingredients:</p>
               <ul>
                   {ingredientSummary}
               </ul>
               <p><strong>Total price: {this.props.price}</strong></p>
               <p>Continue to checkout?</p>
               <Button
                   btnType={"Danger"} clickHandler={this.props.cancelButtonClickHandler}
               >CANCEL</Button>
               <Button
                   btnType={"Success"} clickHandler={this.props.okButtonClickHandler}
               >CONTINUE</Button>
           </>
       );
   }
};

export default orderSummary;