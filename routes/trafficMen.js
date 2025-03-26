const express = require('express');
const {cheking, reports} = require('../controlls/trafficMenControlls')

const router = express.Router();

router.post('/cheking', cheking);

router.post('/reports', reports )

module.exports = router;
