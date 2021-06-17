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
    const [updateItemState, setUpdateItemState] = useState([]);

    const onAddItem = index => {
        
        setUpdateItemState((originalItem) => {
            return [...originalItem, FoodList[index]]
        });
        var price = 0;
        if (updateItemState.length > 0) {            
            updateItemState.map((updateItem, i) => {
                if(updateItem.title === FoodList[index].title){
                    updateItem.quantity = updateItem.quantity + 1;
                    console.log(FoodList);
                    const updateItemStateCopy = [...updateItemState]
                    updateItemStateCopy.slice(0, -1);
                    setUpdateItemState(updateItemStateCopy);
                    // item.quantity = item.quantity + 1;
                    // item.price = item.price + item.price;
                    // console.log(updateItemState);
                }  
            })
        }

        setTotalState(totalState+FoodList[index].price);
        
          
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
                        <FoodItem key={index} food = {item} addItem={() => onAddItem(index)}></FoodItem>
                        );
                    })}  
                </div>
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