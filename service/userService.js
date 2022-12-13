const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const tokenService = require('./tokenService.js');

exports.registration = async function (email, password) {
	// const candidate = await UserModel.findOne({ email })
	// if (candidate) {
	// 	
	// }
	const hashPassword = await bcrypt.hash(password, 3);

	const user = await UserModel.create({ email, password: hashPassword, activationLink })

	const userDto = { id: user._id, email }
	const tokens = tokenService.generateTokens({ ...userDto });
	await tokenService.saveToken(userDto.id, tokens.refreshToken);

	return { ...tokens, user: userDto }
}

exports.login = async function (email, password) {
	const user = await UserModel.findOne({ email })
	if (!user) {
	}
	const isPassEquals = await bcrypt.compare(password, user.password);
	if (!isPassEquals) {
		throw ApiError.BadRequest('Неверный пароль');
	}
	const userDto = { id: user._id, email };
	const tokens = tokenService.generateTokens({ ...userDto });

	await tokenService.saveToken(userDto.id, tokens.refreshToken);
	return { ...tokens, user: userDto }
}

exports.logout = async function (refreshToken) {
	const token = await tokenService.removeToken(refreshToken);
	return token;
}

exports.refresh = async function (refreshToken) {
	if (!refreshToken) {
	//	error
	}
	const userData = tokenService.validateRefreshToken(refreshToken);
	const tokenFromDb = await tokenService.findToken(refreshToken);
	if (!userData || !tokenFromDb) {
		//error
	}
	const user = await UserModel.findById(userData.id);
	const userDto = { id: user._id, email: user.email };
	const tokens = tokenService.generateTokens({ ...userDto });

	await tokenService.saveToken(userDto.id, tokens.refreshToken);
	return { ...tokens, user: userDto }
}
