const db = require('../database/dbConnection');

exports.cheking = async(req, res) => {
    try {
        const { trafficId} = req.body;
        const officers = await db.query('SELECT * FROM officers WHERE license_id = ?', [trafficId]);
        if (officers.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(officers[0].active === false) {
            return res.status(401).json({ message: 'officer is deactivated' });
        }
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.reports = async (req, res) => {
    try {
        
    const { magaca, trafficId, degaanka, report} = req.body;
    const officers = await db.query('SELECT * FROM officers WHERE license_id = ?', [trafficId]);
        if (officers.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        await db.query('INSERT INTO trafficreports (magaca, trafficId, degaanka, report) VALUES (?, ?, ?, ?)', [magaca, trafficId, degaanka, report]);
        res.status(200).json({message:'reported successfully'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

