const express = require('express');
const fs = require('fs');

const app = express();

async function leerArchivo (){
    try{
        const leerData = await fs.readFileSync( './products.txt' , 'utf-8' )
        return JSON.parse(leerData)
    }catch(e){console.log(e);}
}

function getProductRandom(max) {
    return Math.floor(Math.random() * (max - 0 + 1) + 0)
}

app.get('/', async (req, res) => {
    const producto = await leerArchivo();
    res.send(producto)
})

app.get('/productsRandom', async (req, res) => {
    const producto = await leerArchivo();
    
    const numeroRandom = getProductRandom(producto.length - 1)
    console.log(numeroRandom)
    res.send(producto[numeroRandom])
})

app.listen( 8080, ()=>{console.log( 'estoy en el puerto 8080' )})

module.exports = app
    
