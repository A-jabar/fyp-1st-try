const db = require('../database/dbConnection');

const login = async(req, res) => {
    try{
        const { license_id} = req.body;
        const user = await db.query('SELECT * FROM users WHERE license_id = ?', [license_id]);
        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        if(user[0].active === false) {
            return res.status(401).json({ message: 'User is deactivated' });
        }
        res.status(200).json({message: 'login successful'});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = login;
