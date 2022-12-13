const Router = require('express').Router;
const router = new Router();

const userController = require('../controllers/user');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/test', userController.test);

module.exports = router