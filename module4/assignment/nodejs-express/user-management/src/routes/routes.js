const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const { validateUser } = require('../validations/validation');

router.post('/', validateUser, controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;