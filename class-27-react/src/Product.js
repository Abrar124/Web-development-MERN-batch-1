import React from 'react'

function Product({ name, price, description }) {
    return (
        <div>

            <h1> {name}</h1>
            <p>{price} </p>
            <p>{description} </p>

        </div>
    )
}

export default Product