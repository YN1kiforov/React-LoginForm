import React, { useState } from 'react';
import './Login.scss';
const Auth = () => {
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	return (
		<div className='auth'>
			<div className='auth__wrapper'>
				<h2 className='auth__title'>Войти в аккаунт</h2>
				<form className='auth__form'>
					<div className='auth__input-container'>
						<label>Email:</label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' autoComplete="off" placeholder="email"></input>
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
