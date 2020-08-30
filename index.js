import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

const URL = 'mongodb+srv://js_mastery:js_mastery@practice.jto9p.mongodb.net/users?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
    .catch((error) => console.log(`Error: ${error}`));

app.use(bodyParser.json());

app.use('/people', usersRoutes);
 
app.get('/', () => res.send('Welcome to the Users API!'));
app.all('*', () => res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));