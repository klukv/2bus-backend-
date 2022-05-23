import eye from '../assets/img/Union.svg'
import google from '../assets/img/Vector.svg'
import vk from '../assets/img/vk.svg'
import React, { useState } from 'react'
import { LOGIN_ROUTES, MAIN_WINDOW, REGISTRATION_ROUTES } from '../utils/const'
import { NavLink, useNavigate } from 'react-router-dom';
import '../scss/registration.scss'
import { reg } from '../http/userAPI';
import { observer } from 'mobx-react-lite';

const Reg = observer(() => {
	const [name, setName] = useState('')
	const navigateReg = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const registration = async () => {
		try {
			let data
			data = await reg(name, email, password)
			navigateReg(MAIN_WINDOW)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	return (
		<section className="authorization">
			<div className="container">
				<form className="authorization__form">
					<h1 className="authorization__title title">Регистрация</h1>
					<div className="authorization__form-inner">
						<label className="authorization__label">
							Имя
							<input type="text" name="" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
						</label>
						<label className="login__label">
							Email
							<input type="text" name="" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
						</label>
						<label className="login__label label__password">
							Пароль
							<input type="password" name="" placeholder="Введите пароль" value={password} onChange={e => setPassword(e.target.value)} />
							<div className="login__password-btn authorization__password-btn"><img src={eye} alt="eye" /></div>
						</label>
						{/* <label className="authorization__label label__password">
							Повторите пароль
							<input type="password" name="" placeholder="Повторите пароль" />
							<div className="authorization__password-btn"><img src={eye} alt="eye" /></div>
						</label> */}
						<label className="authorization__label checkbox__label">
							<input className="authorization__checkbox" type="checkbox" name="memory" value="rememberMe" /><span className="authorization__check-style"></span>Запомнить меня
						</label>
						<button className="authorization__btn" type='button' onClick={registration} >Зарегистрироваться</button>
						<p className="authorization__quest">Уже есть аккаунт ?  <NavLink to={LOGIN_ROUTES}>Войти</NavLink></p>
						<div className="authorization__line">
							<hr
								style={{
									border: '1px solid #E5E8ED'
								}}
							/>
						</div>
						<h3 className="authorization__title-footer">Или войти через</h3>
						<div className="authorization__images">
							<a href="https://www.codewars.com/dashboard"><img className="google" src={google} alt="Google" /></a>
							<a href="https://www.codewars.com/dashboard"><img className="vk" src={vk} alt="Vk" /></a>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
})
export default Reg;
