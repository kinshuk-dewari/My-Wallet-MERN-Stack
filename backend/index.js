const express = require('express');
const connectDB = require('./db/db');
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());


// Routes
const mainRouter = require('./routes/index');
app.use('/api/v1',mainRouter);


// Connect to DB then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});



