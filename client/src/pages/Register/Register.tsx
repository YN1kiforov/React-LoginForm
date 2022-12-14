import React, { useState } from 'react';
import axios from '../../http/index'
const Register = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [name, setName] = useState<string>("")

  const registration = async (e: React.SyntheticEvent, email: string, password: string) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:5000/registration', { email, password, name })
      localStorage.setItem('token', data.accessToken);
      return data
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='auth'>
      <div className='auth__wrapper'>
        <h2 className='auth__title'>Регистрация</h2>
        <form onSubmit={e => registration(e, email, password)} className='auth__form'>
          <div className='auth__input-container'>
            <label>Имя:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="name" autoComplete="off" ></input>
            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' autoComplete="off" placeholder="email"></input>
            <label>Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" autoComplete="off" ></input>
          </div>
          <button type="submit">Зарегистрироваться</button>
        </form>
        <p className="auth__tip">У вас уже есть аккаунт? <a href="/login">Войдите!</a></p>
      </div>
    </div>
  );
}
export default Register;
