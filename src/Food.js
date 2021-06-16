import shoppingcart from './shoppingcart.svg';
import './App.css';
import styles from './Food.module.scss';
import React, {useState} from 'react';
import FoodItem from './FoodItem';
import FoodList from './FoodList';

function Food() {
    const [addedItemState, setAddedItemState] = useState([]);
    const [txtState, setTxtState] = useState(true);
    const [totalState, setTotalState] = useState(0);

    const onAddItem = index => {
        const temp = FoodList[index];
        console.log(temp);
        var i = 0;
        if (addedItemState.length > 0) {
            console.log("same");
            while (temp.title !== addedItemState[i].title || i > addedItemState.length) {    
                i = i + 1;
            }

            if (i<addedItemState.length) {
                temp.quantity = temp.quantity + 1;
                temp.price = temp.price + temp.price;
            }
        } else {
            temp.quantity = 1;
        }
        setAddedItemState((originalItem) => {
            return [...originalItem, temp]
        });
        setTotalState(totalState+temp.price);
        
        

          
    }
    
    return (
        <>
            <div className = {txtState ? "container" : "container blur"}>
                <div className="menu-header">
                    <h1>Menu</h1>
                    <button onClick={() => setTxtState(!txtState)}><img src={shoppingcart}></img></button>
                </div>
                
                <div className="foodList">
                    {FoodList.map((item, index) => {
                        return (
                        <FoodItem key={index} food = {FoodList[index]} addItem={() => onAddItem(index)}></FoodItem>
                        );
                    })}  
                </div>
            </div>
            
            <div className = {txtState ? "cart hide" : "cart"}>
                <button onClick={() => setTxtState(!txtState)}>&#10005;</button>
                <h2>Current Order</h2>
                {addedItemState.length > 0 ? <>{addedItemState.map((item, index) => (
                    <div className="order-item" key={index}>
                        <span>{item.title}</span>
                        <span>{item.quantity}</span>
                        <span>${item.price}</span>
                    </div>
                ))}</> : "Start Ordering"}
                
                <p>{totalState}</p>   
            </div>
            
            
        </>    
    );
}

export default Food;