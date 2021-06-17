import './App.css';
import React from 'react';

function FoodItem({food, addItem}) {

    const myfunc = () => {
        addItem();
    }

    const {title: foodTitle, category, price, image, quantity} = food;

    return (
        <>
            <div className="foodContainer">
                <div className="food-img">
                    <img src={image}></img>
                </div>
                <div className="foodDetail">
                    <div>
                        <h2>{foodTitle}</h2>
                        <p>{category}</p>
                    </div>
                    <div>
                        <button type="button" onClick={() => myfunc()}>+ Add item</button>
                        <span>${price}</span>
                        <span>{quantity}</span>
                    </div>
                </div>
            </div>
        </>
        
    );
}



export default FoodItem;