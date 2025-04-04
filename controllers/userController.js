const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { username, password } = req.body;

    if(username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ error: 'Invalid credentials' });
}

exports.getUsers = (req, res) => {
    res.json(users);
}

exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
}

exports.createUser = (req, res) => {
    const { name, email, department} = req.body;
    const user = { id: users.length + 1, name, email, department };
    users.push(user);
    res.status(201).json(user);
}

exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });

    const { name, email, department } = req.body;
    user.name = name;
    user.email = email;
    user.department = department;

    res.json(user);
}

exports.deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ error: 'User not found' });

    users.splice(userIndex, 1);
    res.status(204).send();
}