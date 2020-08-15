const { request } = require("express");

const express = require('express')
const app = express()
const router = require('./config/router')
const bodyParser = require("body-parser");
app.set(express.static('public'))
app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended:true }))
app.use(bodyParser.json());
// 
require('./config/mongoose')


app.use(router)

app.listen(3000)

