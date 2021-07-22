import shoppingcart from './shoppingcart.svg';
import './App.css';
import styles from './Food.module.scss';
import React, {useState} from 'react';
import FoodItem from './FoodItem';
import FoodList from './FoodList';

function Food() {
    const [txtState, setTxtState] = useState(true);
    const [itemState, setItemState] = useState([]);
    const [addedItemsNames, setAddedItemsNames] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    
    const onAddItem = (item) => {
        if (addedItemsNames.includes(item.title)) {
            let menuItems = [...itemState];
            itemState.forEach((each, i) => {
                if (each.title === item.title) {
                    let currentItem = { ...menuItems[i] };
                    currentItem.quantity += 1;
                    currentItem.totalPrice += currentItem.price;
                    menuItems[i] = currentItem;
                    setItemState(menuItems);
                }
            });
        } else {
            setAddedItemsNames((old) => {
                return [...old, item.title];
            });
            setItemState((old) => {
                return [
                ...old,
                {
                    title: item.title,
                    quantity: 1,
                    price: item.price,
                    totalPrice: item.price,
                },
                ];
            });
        }
        setTotalPrice((old) => old + item.price);
    };
    
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
                {itemState.length > 0 ? <>{itemState.map((item1, index) => (
                    <div className="order-item" key={index}>
                        <span>{item1.title}</span>
                        <span>{item1.quantity}</span>
                        <span>${item1.totalPrice}</span>
                    </div>
                ))}</> : "Start Ordering"}
                
                <p>{totalPrice}</p>   
            </div>
            
            
        </>    
    );
}

export default Food;