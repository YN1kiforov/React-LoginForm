const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token-model');


exports.generateTokens = function (payload) {
	const accessToken = jwt.sign(payload, "accessTokenSecret", { expiresIn: '15s' })
	const refreshToken = jwt.sign(payload, "refreshTokenSecret", { expiresIn: '30s' })
	return {
		accessToken,
		refreshToken
	}
}

exports.validateAccessToken = function (token) {
	try {
		const userData = jwt.verify(token, "accessTokenSecret");
		return userData;
	} catch (e) {
		return null;
	}
}

exports.validateRefreshToken = function (token) {
	try {
		const userData = jwt.verify(token, "refreshTokenSecret");
		return userData;
	} catch (e) {
		return null;
	}
}

exports.saveToken = async function (userId, refreshToken) {
	const tokenData = await tokenModel.findOne({ user: userId })
	if (tokenData) {
		tokenData.refreshToken = refreshToken;
		return tokenData.save();
	}
	const token = await tokenModel.create({ user: userId, refreshToken })
	return token;
}

exports.removeToken = async function (refreshToken) {
	const tokenData = await tokenModel.deleteOne({ refreshToken })
	return tokenData;
}

exports.findToken = async function (refreshToken) {
	const tokenData = await tokenModel.findOne({ refreshToken })
	return tokenData;
}

