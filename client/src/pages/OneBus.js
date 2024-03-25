import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchBus, fetchOneBus, fetchOneDriver, fetchOneModel } from '../http/busAPI'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import '../scss/bus.scss'



const OneBus = observer(() => {
	const [bus, setBus] = useState({})
	const [model, setModel] = useState({})
	const [driver, setDriver] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const fetchInfo = async () => {
			const data = await fetchOneBus(id)
			setBus(data)
			const model = await fetchOneModel(data.modelId)
			setModel(model)
			const driver = await fetchOneDriver(data.driverId)
			setDriver(driver)
			// const InfoRoute = await getInfoRoute()
			// console.log(InfoRoute)
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
					<div className="bus__title">Характеристики автобуса</div>
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
							<tr>
								<td>{driver.name}</td>
								<td>{driver.firstname}</td>
								<td>{driver.phone}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	)
})

export default OneBus;

