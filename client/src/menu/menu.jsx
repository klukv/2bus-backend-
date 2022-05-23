import bus from '../assets/img/2BUS.svg'
import search from '../assets/img/search.svg'
import React, { useState } from 'react'
import ModalComponent from '../components/modalComponent'
import '../scss/menu.scss'

const Menu = ({ header, active, setActive }) => {

	const [modalActive, setModalActive] = useState(false)
	return (
		<div className={active ? 'wrapper__menu active' : 'wrapper__menu'}>
			<div className="wrapper__menu-inner">
				<div className="wrapper__menu-Uplevel">
					<div className="wrapper__menu-logo">
						<img src={bus} alt="logo" />
					</div>
					<form className="wrapper__menu-form">
						<input type="text" name="" id="" placeholder='Поиск' />
					</form>
				</div>
				<div className="wrapper__menu-content">
					<div className="wrapper__menu-header">
						{header}
					</div>
					<ul>
						<li>
							<a className="wrapper__menu-link" href="#">Студенческий городок ВПИ</a>
							<div className="wrapper__menu-routes">
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">49</button>
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">80</button>
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">33</button>
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">75</button>
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">313в</button>
							</div>
						</li>
						<li>
							<a className="wrapper__menu-link" href="#">Гостиница Брно</a>
							<div className="wrapper__menu-routes">
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">49</button>
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">64</button>
							</div>
						</li>
						<li>
							<a className="wrapper__menu-link" href="#">Политехнический институт</a>
							<div className="wrapper__menu-routes">
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">49</button>
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">64</button>
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">80</button>
							</div>
						</li>
						<li>
							<a className="wrapper__menu-link" href="#">Строительный институт</a>
							<div className="wrapper__menu-routes">
								<button className="wrapper__menu-btn" onClick={() => { setModalActive(true) }} href="#">49</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<ModalComponent active={modalActive} setActive={setModalActive} />
		</div>

	)
}

export default Menu