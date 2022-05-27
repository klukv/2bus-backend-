import busLogo from '../assets/img/2BUS.svg'
import search from '../assets/img/search.svg'
import React, { useContext, useEffect, useState } from 'react'
import '../scss/menu.scss'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import ButtonComponent from '../components/buttonComponent'

const Menu = observer(({ header, active, setActive }) => {
	const { bus } = useContext(Context)

	const studentCity = [49, 80, 33, 75, 313]
	const hostel = [49, 64]
	const politech = [49, 80, 64]
	const stroika = [49]

	return (
		<div className={active ? 'wrapper__menu active' : 'wrapper__menu'}>
			<div className="wrapper__menu-inner">
				<div className="wrapper__menu-Uplevel">
					<div className="wrapper__menu-logo">
						<img src={busLogo} alt="logo" />
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
								{bus._buses.map(bus => {
									if (studentCity.indexOf(bus.number) !== -1) {
										return <ButtonComponent key={bus.id} bus={bus} />
									}
								}
								)}
							</div>
						</li>
						<li>
							<a className="wrapper__menu-link" href="#">Гостиница Брно</a>
							<div className="wrapper__menu-routes">
								{bus._buses.map(bus => {
									if (hostel.indexOf(bus.number) !== -1) {
										return <ButtonComponent key={bus.id} bus={bus} />
									}
								}
								)}
							</div>
						</li>
						<li>
							<a className="wrapper__menu-link" href="#">Политехнический институт</a>
							<div className="wrapper__menu-routes">
								{bus._buses.map(bus => {
									if (politech.indexOf(bus.number) !== -1) {
										return <ButtonComponent key={bus.id} bus={bus} />
									}
								}
								)}
							</div>
						</li>
						<li>
							<a className="wrapper__menu-link" href="#">Строительный институт</a>
							<div className="wrapper__menu-routes">
								{bus._buses.map(bus => {
									if (stroika.indexOf(bus.number) !== -1) {
										return <ButtonComponent key={bus.id} bus={bus} />
									}
								}
								)}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

	)
})

export default Menu