import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBus } from '../http/busAPI'
import { deleteBusNumber } from '../http/busAPI'
import '../scss/createBus.scss'
import { MAIN_WINDOW } from '../utils/const'

const CreateBus = () => {
	const navigate = useNavigate()
	const [number, setNumber] = useState('')
	const [route, setRoute] = useState('')
	const [rating, setRating] = useState('')
	const [modelId, setModelId] = useState('')
	const [driverId, setDriverId] = useState('')

	const [deleteNumber, setDeleteNumber] = useState('')

	// const selectFile = e => {
	// 	setImg(e.target.files[0])
	// }

	const addBus = () => {
		const formData = new FormData()
		formData.append('number', `${number}`)
		formData.append('route', `${route}`)
		formData.append('rating', `${rating}`)
		formData.append('modelId', `${modelId}`)
		formData.append('driverId', `${driverId}`)
		createBus(formData).then(navigate(MAIN_WINDOW))
	}

	const deleteBus = () => {
		deleteBusNumber(deleteNumber).then(navigate(MAIN_WINDOW))
	}

	return (
		<div>
			<div className="container">
				<div className="admin__inner">
					<div className="admin__create_block">
						<button className="create__btn btn" onClick={addBus}>Добавить автобус</button>
						<input type="text" name="" placeholder="Введите номер" value={number} onChange={e => setNumber(e.target.value)} />
						<input type="text" name="" placeholder="Введите оценку популярности (от 0 до 10)" value={route} onChange={e => setRoute(e.target.value)} />
						<input type="text" name="" placeholder="Введите рейтинг данного маршрута" value={rating} onChange={e => setRating(e.target.value)} />
						<input type="text" name="" placeholder="Введите id модели (от 1 до 5)" value={modelId} onChange={e => setModelId(e.target.value)} />
						<input type="text" name="" placeholder="Введите id водителя (от 1 до 6)" value={driverId} onChange={e => setDriverId(e.target.value)} />
					</div>
					<div className="admin__delete_block">
						<button className="delete__btn btn" onClick={deleteBus}>Удалить автобус</button>
						<input type="text" name="" placeholder="Введите номер автобуса" value={deleteNumber} onChange={e => setDeleteNumber(e.target.value)} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateBus