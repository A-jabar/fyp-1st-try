const db = require('../database/dbConnection');

const createUser = async (req, res) => {
    try {
        const { license_id, magaca, licesnse_id, phone, degaanka, type, role } = req.body;
        const user = await db.query('SELECT * FROM users WHERE license_id = ?', [license_id]);
        if (user.length === 0) {
            await db.query('INSERT INTO users (license_id, magaca, licesnse_id, phone, degaanka, type, role) VALUES (?, ?, ?, ?, ?, ?, ?)', [license_id, magaca, licesnse_id, phone, degaanka, type,role]);
            res.status(200).json({message:'User created successfully'})
        }
        else {
            res.status(200).json({message:'User already exists'})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOfficer = async (req, res) => {
    try {
        const {magaca, trafficId, phone, degaanka, darajada, role} = req.body;
        const officers = await db.query('SELECT * FROM officers WHERE trafficId = ?', [trafficId]);
        if (officers.length === 0) {
            await db.query('INSERT INTO officers (magaca, trafficId, phone, degaanka, darajada, role) VALUES (?, ?, ?, ?, ?, ?)', [magaca, trafficId, phone, degaanka, darajada, role]);
            res.status(200).json({message:'Officer created successfully'})
        }
        else {
            res.status(200).json({message:'Officer already exists'})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deactivateUser = async (req, res) => {
    try {
        const { license_id } = req.body;
        const user = await db.query('SELECT * FROM users WHERE license_id = ?', [license_id]);
        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        await db.query('UPDATE users SET active = ? WHERE license_id = ?', [false, license_id]);
        res.status(200).json({message:'User deactivated successfully'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deactivateOfficer = async (req, res) => {
    try {
        const { trafficId } = req.body;
        const officer = await db.query('SELECT * FROM officers WHERE trafficId = ?', [trafficId]);
        if (officer.length === 0) {
            return res.status(404).json({ message: 'Officer not found' });
        }
        await db.query('UPDATE officers SET active = ? WHERE trafficId = ?', [false, trafficId]);
        res.status(200).json({message:'Officer deactivated successfully'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const activateUser = async (req, res) => {
    try {
        const { license_id } = req.body;
        const user = await db.query('SELECT * FROM users WHERE license_id = ?', [license_id]);
        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        await db.query('UPDATE users SET active = ? WHERE license_id = ?', [true, license_id]);
        res.status(200).json({message:'User activated successfully'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const activateOfficer = async (req, res) => {
    try {
        const { trafficId } = req.body;
        const officer = await db.query('SELECT * FROM officers WHERE trafficId = ?', [trafficId]);
        if (officer.length === 0) {
            return res.status(404).json({ message: 'Officer not found' });
        }
        await db.query('UPDATE officers SET active = ? WHERE trafficId = ?', [true, trafficId]);
        res.status(200).json({message:'Officer activated successfully'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createUser, createOfficer, deactivateUser, deactivateOfficer, activateUser, activateOfficer };
