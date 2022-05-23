import React, { useContext, useEffect, useState } from 'react'
import arrow from '../assets/img/arrowLeft.svg'
import person from '../assets/img/person.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { LOGIN_ROUTES } from '../utils/const';
import '../scss/mainWindow.scss';
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import Menu from '../menu/menu'
import { setBus } from '../store/busRoutes'
import { fetchBus } from '../http/busAPI'


const MainWindow = observer(() => {
	const { bus } = useContext(Context)
	const [menuActive, setMenuActive] = useState(false)

	useEffect(() => {
		fetchBus().then(data => bus.setBuses(data))
	}, [])

	// const items = [
	// 	{ value: 'Студентческий городок ВПИ', href: '#', key: 'city' },
	// 	{ value: 'Политехнический институт', href: '#', key: 'politech' },
	// 	{ value: 'Гостиница БРНО', href: '#', key: 'hotel' },
	// 	{ value: 'Строительный институт', href: '#', key: 'Stroika' }]


	return (
		<div className='mainWindow'>
			<main>
				<div className="wrapper">
					<div className="wrapper__content">
						<div className="wrapper__auth">
							<img src={person} alt="person" />
							<NavLink to={LOGIN_ROUTES}>Вход</NavLink>
							{/* <button>Выйти</button>  */}
						</div>
						<div className={menuActive ? 'wrapper__btn active' : 'wrapper__btn'} onClick={() => setMenuActive(!menuActive)}>
							<img src={arrow} alt="arrow" />
						</div>
					</div>
				</div>
			</main>
			<Menu active={menuActive} setActive={setMenuActive} header={'ВГТУ'} />
		</div>
	);
})
export default MainWindow;