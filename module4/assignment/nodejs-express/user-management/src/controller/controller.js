const bcrypt = require('bcrypt');
const userService = require('../services/service.js');

exports.createUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const { data, error } = await userService.createUser({
      ...req.body,
      password: hashedPassword
    });

    if (error) {
      if (error.code === '23505') {
        return res.status(409).json({ message: 'Email already exists' });
      }
      return res.status(400).json({ message: error.message });
    }

    res.status(201).json({ message: 'User created', data });
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const { data, error } = await userService.getAllUsers();
    if (error) return res.status(400).json({ message: error.message });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { data, error } = await userService.getUserById(req.params.id);
    if (!data) return res.status(404).json({ message: 'User not found' });
    if (error) return res.status(400).json({ message: error.message });
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { data, error } = await userService.updateUser(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'User not found' });
    if (error) return res.status(400).json({ message: error.message });
    res.json({ message: 'User updated', data });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { error } = await userService.deleteUser(req.params.id);
    if (error) return res.status(400).json({ message: error.message });
    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};