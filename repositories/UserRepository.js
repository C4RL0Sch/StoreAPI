const User = require("../models/User");

// REPOSITORIO DE USUARIO
// Encargado exclusivamente del acceso a datos para Usuarios
class UserRepository {
    async findAll() {
        return await User.find();
    }

    async findById(id) {
        return await User.findById(id);
    }

    async create(userData) {
        return await User.create(userData);
    }

    async update(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserRepository();