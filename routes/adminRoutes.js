const express = require('express');
const { createUser, createOfficer, deactivateUser, deactivateOfficer, activateUser, activateOfficer } = require('../controlls/adminControlls');

const router = express.Router();

router.post('/create', createUser);
router.post('/createOfficer', createOfficer);
router.post('/deactivateUser', deactivateUser);
router.post('/deactivateOfficer', deactivateOfficer);
router.post('/activateUser', activateUser);
router.post('/activateOfficer', activateOfficer);

module.exports = router;
