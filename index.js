const express = require("express");
const items = require ("./test");

const PORT = proces.env.PORT || 8080;
const app = express ();

items().then(products=> {
    app.get(`/`, (req, res) => {
        res.send(`<h1>Server express</h1>`);
    });
    
    app.get(`/productos`, (req, res) => {
        res.send(products);
    });

    app.get(`/productoRandom`, (req, res) => {
        let indexRandom = Math.floor(Math.random() * products.length);
        res.send(products[indexRandom]);
    });

    app.listen(PORT, () => {
        console.log(`Server activo en el puerto ${PORT}`)
    });

});