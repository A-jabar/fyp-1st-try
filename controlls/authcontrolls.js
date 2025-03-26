const db = require('../database/dbConnection');

const login = (req, res) => {
    const { license_id} = req.body;
    db.query('SELECT * FROM users WHERE license_id = ?', [license_id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({message: 'login successful'});
    });
};

module.exports = login;
