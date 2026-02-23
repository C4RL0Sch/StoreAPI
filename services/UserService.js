const UserRepository = require("../repositories/UserRepository");

// SERVICIO DE USUARIO
// Contiene la lógica de negocio (validaciones, transformaciones)
class UserService {
    async getAllUsers() {
        return await UserRepository.findAll();
    }

    async getUserById(id) {
        const user = await UserRepository.findById(id);
        if (!user) throw new Error("Usuario no encontrado");
        return user;
    }

    async createUser(data) {
        // Aquí podrías hashear la contraseña antes de enviarla al repo
        return await UserRepository.create(data);
    }

    async updateUser(id, data) {
        return await UserRepository.update(id, data);
    }

    async deleteUser(id) {
        return await UserRepository.delete(id);
    }
}

module.exports = new UserService();