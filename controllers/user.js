exports.registration = async function (req, res, next) {
	try {
		const { email, password } = req.body;
		const userData = await userService.registration(email, password);
		res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
		return res.json(userData);
	} catch (e) {
		console.log(e)
	}
}
exports.login = async function (req, res, next) {
	try {
		const { email, password } = req.body;
		const userData = await userService.registration(email, password);
		res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
		return res.json(userData);
	} catch (e) {
		console.log(e)
	}
}
exports.logout = async function (req, res, next) {
	try {
		const { email, password } = req.body;
		const userData = await userService.registration(email, password);
		res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
		return res.json(userData);
	} catch (e) {
		console.log(e)
	}
}
exports.refresh = async function (req, res, next) {
	try {

		const { email, password } = req.body;
		const userData = await userService.registration(email, password);
		res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
		return res.json(userData);
	} catch (e) {
		console.log(e)
	}
}
exports.test = async function (req, res, next) {
	try {
		return res.json({data:"Vse normal`no rabotaet"});
	} catch (e) {
		console.log(e)
	}
}