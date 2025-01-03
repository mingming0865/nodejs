const express = require('express');
const { getHomepage, getABC, getMan, getNguyenMan } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/route', handler)
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/nguyenman', getNguyenMan)

module.exports = router; //export default