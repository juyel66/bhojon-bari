import React from 'react';

const FoodCard = ({item}) => {

const {name,image,price,recipe}=item;
    return (
        <div className="card bg-base-100 w-96 shadow-sm text-center">
            <figure>
                <img
                    src={image} 
                    alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <p className=''>${price}</p>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-amber-500 text-white">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;