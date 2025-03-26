const db = require('../database/dbConnection');

exports.cheking = (req, res) => {
    const { license_id} = req.body;
    db.query('SELECT * FROM users WHERE license_id = ?', [license_id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({results});
    });
};

exports.reports = (req, res) => {
    const { magaca, trafficId, degaanka, report} = req.body;
    db.query('SELECT * FROM trafficreports WHERE license_id = ?', [trafficId], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        db.query('INSERT INTO trafficreports (magaca, trafficId, degaanka, report) VALUES (?, ?, ?, ?)', [magaca, trafficId, degaanka, report], (err, results) => {
            if (err) {
                console.error('Error while inserting data: ', err);
            }
            res.status(200).json({message:'reported succsessfully'})
        });
    });
};

