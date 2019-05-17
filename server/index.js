const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProducts');

const app =  express();


app.get('/api/products', getProducts);
app.get('api/product/:id', getProduct);

app.listen(5051, ()=> {
    console.log('server listening on 5051')
    ;
})