const User = require('../model/user-model')
const bcrypt = require("bcrypt")

class UserAuthService {

    async createCustomer(payload) {
        const { firstName, lastName, email, password } = payload;
        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                throw new Error("Email is already registered");
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role: "customer",
            });

            return newUser;
        } catch (error) {
            console.error(error);
            throw new Error(error.message || "Failed to create customer");
        }
    }

    async createAdmin(payload) {
        const { firstName, lastName, email, password } = payload;
        try {
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                throw new Error("Email is already registered");
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newAdmin = await User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role: "admin",
            });

            return newAdmin;
        } catch (error) {
            console.error(error);
            throw new Error(error.message || "Failed to create admin");
        }
    }

    async userLogin(payload) {
        const { email, password } = payload;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error("User not found");
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) {
                throw new Error("Invalid credentials");
            }

            return { message: "Login successful", user };
        } catch (error) {
            console.error(error);
            throw new Error(error.message || "Failed to log in");
        }
    }

}
module.exports = new UserAuthService();