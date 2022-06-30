const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const TodoItemRoute = require('./routes/toDoItems');

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('database connected'))
    .catch(err => console.log(err))


app.use('/', TodoItemRoute);


app.get('/', (req, res) => {
    res.send('Running Task Management Server');
})
app.listen(PORT, () => console.log('Server Connected'));