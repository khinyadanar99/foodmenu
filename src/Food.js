import shoppingcart from './shoppingcart.svg';
import './App.css';
import styles from './Food.module.scss';
import React, {useState} from 'react';
import FoodItem from './FoodItem';
import FoodList from './FoodList';

function Food() {
    const [cartState, setCartState] = useState([]);
    const [txtState, setTxtState] = useState(true);
    const [totalState, setTotalState] = useState(0);
    const [updateItemState, setUpdateItemState] = useState([]);
    const foodAry = FoodList;

    const onAddItem = item => {
        // setUpdateItemState((originalItem) => {
        //     return [...originalItem, foodAry[index]]
        // });
        let added = false;
                 
        cartState.map((cartItem, i) => {
            if(cartItem.title === item.title){
                added = true;
                console.log(cartState);
                console.log(updateItemState);
                updateItemState[i].quantity = updateItemState[i].quantity + 1;
                updateItemState[i].price = updateItemState[i].price + updateItemState[i].price;
                
            } 
        })
        if (!added) {
            setCartState([...cartState, item]);
            setUpdateItemState([...updateItemState, item]);
            console.log(cartState);
            console.log(updateItemState);
        }
        

        setTotalState(totalState+item.price);
        
          
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
                        <FoodItem key={index} food = {item} addItem={() => onAddItem(item)}></FoodItem>
                        );
                    })} 
                </div>
                {FoodList.map((item, index) => {
                    return <p>{item.quantity}</p>
                })} 
            </div>
            
            <div className = {txtState ? "cart hide" : "cart"}>
                <button onClick={() => setTxtState(!txtState)}>&#10005;</button>
                <h2>Current Order</h2>
                {updateItemState.length > 0 ? <>{updateItemState.map((item1, index) => (
                    <div className="order-item" key={index}>
                        <span>{item1.title}</span>
                        <span>{item1.quantity}</span>
                        <span>${item1.price}</span>
                    </div>
                ))}</> : "Start Ordering"}
                
                <p>{totalState}</p>   
            </div>
            
            
        </>    
    );
}

export default Food;