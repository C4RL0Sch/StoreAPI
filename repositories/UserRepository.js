import User from "../models/User.js";

class UserRepository {
  async findAll() {
    return User.find();
  }

  async findById(id) {
    return User.findById(id);
  }

  async create(userData) {
    return User.create(userData);
  }

  async update(id, userData) {
    return User.findByIdAndUpdate(id, userData, { new: true });
  }

  async delete(id) {
    return User.findByIdAndDelete(id);
  }
}

export default new UserRepository();
