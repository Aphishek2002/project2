const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

let users = [];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'Login successful!', username: user.username });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (users.some(u => u.username === username)) {
        res.status(400).json({ message: 'Username already exists' });
    } else {
        users.push({ username, password });
        res.json({ message: 'Account created successfully!', username });
    }
});

app.get('/', (req, res) => {
    // Code to serve an HTML page or perform other actions for a GET request
    res.send('Welcome to the homepage!');
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
