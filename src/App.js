import React from 'react';
import Product from './components/Product/Product'

class App extends React.Component {
    state = {
        products:[
            {title: 'Book1', price: 99},
            {title: 'Book2', price: 89},
            {title: 'Book3', price: 79},
        ],
    }

    changePriceHandler = () =>{
        this.setState({
        products:[
            {title: 'Book1', price: 59},
            {title: 'Book2', price: 59},
            {title: 'Book3', price: 59},
        ],
        })
    }
    render(){
    return (
       <div id="main" className="container">
           <h2>React App</h2>
           <Product
             title={this.state.products[0].title}
             price={this.state.products[0].price}
           />
           <Product
             title={this.state.products[1].title}
             price={this.state.products[1].price}
           />

           <Product
             title={this.state.products[2].title}
             price={this.state.products[2].price}
           />


         <button onClick={this.changePriceHandler}>Change Price</button>
       </div>
   )
    }
}


export default App
