import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, price, description, availableQuantity } = service
    const navigate = useNavigate()
    const handlePurchase = id => {
        console.log(id)
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Available Quantity {availableQuantity}</p>
                <p>{description}</p>
                <div class="card-actions">
                    <button onClick={() => handlePurchase(_id)} class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Service;