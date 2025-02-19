const express = require('express');
const router = express.Router();
const UserAuthController = require('../../controllers/user-auth-controller');

router.post("/register/customer", UserAuthController.createCustomer)
router.post("/register/admin", UserAuthController.createAdmin)
router.post("/login", UserAuthController.userLogin)


module.exports = router