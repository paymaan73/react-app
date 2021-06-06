import React from 'react';
import Product from './components/Product/Product'

class App extends React.Component {
    render(){
    return (
       <div id="main" className="container">
           <h2>React App</h2>
           <Product title="Book" price="23567" />
           <Product title="phone" price="100000">
            Discount: 20%
           </Product>
           <Product title="shirt" price="25430" />
       </div>
   )
    }
}


export default App
