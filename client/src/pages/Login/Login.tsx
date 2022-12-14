import axios from '../../http/index';
import React, { useState } from 'react';
import './Login.scss';
const Auth = () => {
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const login = async (e: React.SyntheticEvent, email: string, password: string) => {
		e.preventDefault()
		try {
			const { data } = await axios.post('http://localhost:5000/login', { email, password })
			localStorage.setItem('token', data.accessToken);
			return data

		} catch (error) {
			console.log(error)
		} finally {
		}
	}
	return (
		<div className='auth'>
			<div className='auth__wrapper'>
				<h2 className='auth__title'>Войти в аккаунт</h2>
				<form onSubmit={(e) => { login(e, email, password) }} className='auth__form'>
					<div className='auth__input-container'>
						<label>Email:</label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} id='email' autoComplete="off" placeholder="email"></input>
						<label>Password:</label>
						<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" autoComplete="off" ></input>
					</div>
					<button type="submit">Войти в аккаунт</button>
				</form>
				<p className="auth__tip">У вас ещё нет аккаунта? <a href="/register">Зарегистрируйся</a></p>
			</div>

		</div>
	);
}
export default Auth;

