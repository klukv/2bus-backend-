import busLogo from '../assets/img/2BUS.svg'
import search from '../assets/img/search.svg'
import React, { useContext, useEffect, useState } from 'react'
import '../scss/menu.scss'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import ButtonComponent from '../components/buttonComponent'
import { fetchBusNumber, fetchOneBus } from '../http/busAPI'
import { useNavigate } from 'react-router-dom';
import { BUS_ROUTE } from '../utils/const'

const Menu = observer(({ header, active, setActive }) => {
	const { bus } = useContext(Context)
	const [search, setSearch] = useState('')
	const studentCity = [49, 80, 33]
	const hostel = [49, 64, 366]
	const politech = [49, 80, 64]
	const stroika = [49, 26]
	const navigate = useNavigate()

	const findNumber = async (event) => {

		try {
			if (search) {
				const data = await fetchBusNumber(search)
				navigate(BUS_ROUTE + '/' + data.id)
			}
		} catch (error) {
			alert('Данный маршрут не найден')
		}
	}


	return (
		<div className={active ? 'wrapper__menu active' : 'wrapper__menu'}>
			<div className="wrapper__menu-inner">
				<div className="wrapper__menu-Uplevel">
					<div className="wrapper__menu-logo">
						<img src={busLogo} alt="logo" />
					</div>
					<div className="wrapper__menu-form">
						<input type="text" name="" placeholder="Поиск" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={(e) => { if (e.code === 'Enter') { findNumber(e) } }} />
						<button className="button__div" onClick={() => findNumber()}>Поиск</button>
					</div>
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