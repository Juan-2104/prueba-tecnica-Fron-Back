const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');
const app = express();

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
    console.log({req})
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server started'));
