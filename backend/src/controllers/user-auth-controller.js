const UserAuthService = require('../services/user-auth-service')
class UserAuthController {
    async createCustomer(req, res, next) {
        try {
            const data = await UserAuthService.createCustomer(req.body);
            res.status(201).send(data);
        } catch (error) {
            res.status(400).send({ message: error.message || "Failed to create customer" });
        }
    }

    async createAdmin(req, res, next) {
        try {
            const data = await UserAuthService.createAdmin(req.body);
            res.status(201).send(data);
        } catch (error) {
            res.status(400).send({ message: error.message || "Failed to create admin" });
        }
    }

    async userLogin(req, res, next) {
        try {
            const data = await UserAuthService.userLogin(req.body);
            res.status(200).send(data);
        } catch (error) {
            res.status(401).send({ message: error.message || "Failed to log in" }); // 401: Unauthorized
        }
    }

}

module.exports = new UserAuthController()

