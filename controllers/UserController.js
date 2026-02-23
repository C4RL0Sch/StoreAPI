const UserService = require("../services/UserService");

// CONTROLADOR DE USUARIO
// Maneja las peticiones HTTP y delega al servicio
const UserController = {
    // Listar todos los usuarios
    list: async (req, res) => {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Obtener un usuario por ID
    get: async (req, res) => {
        try {
            const user = await UserService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    // Crear un nuevo usuario
    create: async (req, res) => {
        try {
            const savedUser = await UserService.createUser(req.body);
            res.status(201).json(savedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Actualizar usuario
    update: async (req, res) => {
        try {
            const updatedUser = await UserService.updateUser(req.params.id, req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Eliminar usuario
    destroy: async (req, res) => {
        try {
            await UserService.deleteUser(req.params.id);
            res.status(204).send(); // 204 No Content
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;