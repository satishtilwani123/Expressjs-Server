const express = require('express');
const bodyparser = require('body-parser');

const DishRouter = express.Router();

DishRouter.use(bodyparser.json());

DishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get((req, res, next) => {
    res.json({success: true, status: "List of Dishes!"});
})
.post((req, res, next) => {
    res.json({success: true, status: "Post the Dish "+req.body.name});
})
.put((req, res, next) => {
    res.statusCode = 401;
    res.json({success: false, status: "Cannot update list of dishes!"});
})
.delete((req, res, next) => {
    res.json({success: true, status: "Dish is Deleted!"});
})

DishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get((req, res, next) => {
    res.json({success: true, status: "Get the dish "+req.params.dishId});
})
.post((req, res, next) => {
    res.statusCode = 401;
    res.json({success: false, status: "Cannot perform post operation on particular dish!"});
})
.put((req, res, next) => {
    res.json({success: true, status: req.params.dishId+" is updated into "+req.body.name});
})
.delete((req, res, next) => {
    res.json({success: true, status: req.params.dishId+" is Deleted!"});
})

module.exports = DishRouter;
