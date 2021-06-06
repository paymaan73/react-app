import React from 'react';
import ReactDom from 'react-dom';

const element = React.createElement(
  'div',
  {id: 'main', className: 'container'},
  'HelloWorld!'
)

ReactDom.render(element, document.getElementById('root'))
