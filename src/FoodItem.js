import './App.css';
import React from 'react';

function FoodItem({food, addItem}) {

    const myfunc = () => {
        addItem();
    }

    const {title: foodTitle, category, price, image} = food;

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
                    </div>
                </div>
            </div>
        </>
        
    );
}



export default FoodItem;