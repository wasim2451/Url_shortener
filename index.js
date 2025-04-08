const express = require('express');
const path = require('path')
const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRoute')
const { connectDB } = require('./connect')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

connectDB('mongodb://127.0.0.1:27017/url-shortener')
    .then(() => { console.log('MongoDB Connected ') }).catch((err) => { console.error(err) });
    
app.use('/url', urlRoute);
app.use('/', staticRoute)

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000/`)
})

