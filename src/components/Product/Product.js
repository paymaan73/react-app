import React from 'react';


const Product = (props) => {
    const price = 89
    return(
        <div>
          <p>Product Name: {props.title}</p>
          <p>Product Price: {props.price}</p>
        </div>
    )
}

export default Product
