import eye from '../assets/img/Union.svg'
import google from '../assets/img/Vector.svg'
import vk from '../assets/img/vk.svg'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTES, MAIN_WINDOW, REGISTRATION_ROUTES } from '../utils/const'
import '../scss/login.scss'
import { getName, login } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Login = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = async () => {
		try {
			let data
			data = await login(email, password)
			user.setUser(user)
			user.setIsAuth(true)
			let info = await getName(email)
			localStorage.setItem('infoUser', JSON.stringify(info))
			navigate(MAIN_WINDOW)
		} catch (e) {
			alert(e.response.data.message)
		}
	}
	return (
		<section className="login">
			<div className="container">
				<form className="login__form">
					<h1 className="login__title title">Вход</h1>
					<h2 className="login__subtitle">Войдите в аккаунт, используя email и пароль, введенные при регистрации.</h2>
					<div className="login__form-inner">
						<label className="login__label">
							Email
							<input type="text" name="" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
						</label>
						<label className="login__label label__password">
							Пароль
							<input type="password" name="" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
							<div className="login__password-btn"><img src={eye} alt="eye" /></div>
						</label>
						<label className="login__label checkbox__label">
							<input className="login__checkbox" type="checkbox" name="memory" value="rememberMe" /><span
								className="login__check-style"></span>Запомнить меня
							<a className="login__forget" href="https://animego.org/">Забыли пароль?</a>
						</label>
						<button className="login__btn" type="button" onClick={signIn}>Войти</button>
						<p className="login__quest">Нет аккаунта?<NavLink to={REGISTRATION_ROUTES}>Зарегистрироваться</NavLink> </p>
						<div className="login__line" ><hr
							style={{
								border: '1px solid #E5E8ED'
							}}
						/>
						</div>
						<h3 className="login__title-footer">Или войти через</h3>
						<div className="login__images">
							<a href="https://animego.org/"><img className="google" src={google} alt="Google" /></a>
							<a href="https://animego.org/"><img className="vk" src={vk} alt="Vk" /></a>
						</div>
					</div>
				</form>
			</div>
		</section>

	);
})
export default Login;