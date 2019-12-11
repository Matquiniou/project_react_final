const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Mathieu:Lasagesse92@cluster0-djtbk.mongodb.net/projet_react?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const sensorRouter = require('./routes/sensors');
const measureRouter = require('./routes/measure');
const usersRouter = require('./routes/users');

app.use('/sensors', sensorRouter);
app.use('/measure', measureRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
