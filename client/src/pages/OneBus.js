import React, { useContext, useEffect, useState } from 'react'
import map from '../assets/img/map.jpg'
import '../scss/bus.scss'
import { useParams } from 'react-router-dom'
import { fetchOneBus } from '../http/busAPI'
import { Context } from '../index'

const OneBus = () => {
	const [bus, setBus] = useState({ driverInfo: [] })
	const { id } = useParams()
	useEffect(() => {
		fetchOneBus(id).then(data => setBus(data))
	}, [])
	// const bus = { number: 49, route: 0, rating: 0, driverInfo: [{ id: 1, name: "Пётр", firstname: "Пирожков", phone: 777 }] }
	return (
		<section className="bus">
			<div className="bus__inner">
				<div className="bus__information">
					<div className="bus__title">Автобус</div>
					<table className="bus__table">
						<thead className="bus__thead">
							<tr>
								<td>Номер</td>
								<td>Маршрут</td>
								<td>Рейтинг</td>
							</tr>
						</thead>
						<tbody className="bus__tbody">
							<tr>
								<td>{bus.number}</td>
								<td>{bus.route}</td>
								<td>{bus.rating}</td>
							</tr>
						</tbody>
					</table>
					<div className="bus__title">Водитель</div>
					<table className="bus__table">
						<thead className="bus__thead">
							<tr>
								<td>Имя</td>
								<td>Фамилия</td>
								<td>Телефон</td>
							</tr>
						</thead>
						<tbody className="bus__tbody">
							{bus.driverInfo.map(driver =>
								<tr>
									<td>{driver.name}</td>
									<td>{driver.firstname}</td>
									<td>{driver.phone}</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
				<div className="bus__map">
					<img src={map} alt="" />
				</div>
			</div>
		</section>
	)
}

export default OneBus