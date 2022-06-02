import React, { useContext, useEffect, useState } from 'react'
import map from '../assets/img/map.jpg'
import '../scss/bus.scss'
import { useParams } from 'react-router-dom'
import { fetchBus, fetchOneBus, fetchOneModel } from '../http/busAPI'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

const OneBus = observer(() => {
	const [bus, setBus] = useState({ driverInfo: [] })
	const [model, setModel] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const fetchInfo = async () => {
			const data = await fetchOneBus(id)
			setBus(data)
			const model = await fetchOneModel(data.modelId)
			setModel(model)
		}
		fetchInfo()
	}, [])
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
								<tr key={`${driver.id}_${driver.name}`}>
									<td>{driver.name}</td>
									<td>{driver.firstname}</td>
									<td>{driver.phone}</td>
								</tr>
							)}
						</tbody>
					</table>
					<table className="bus__table">
						<thead className="bus__thead">
							<tr>
								<td>Модель</td>
								<td>Год</td>
							</tr>
						</thead>
						<tbody className="bus__tbody">

							<tr>
								<td >{model.model}</td>
								<td>{model.year}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="bus__map">
					<img src={process.env.REACT_APP_API_URL + bus.img} alt="" />
				</div>
			</div>
		</section>
	)
})

export default OneBus