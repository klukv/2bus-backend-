
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BUS_ROUTE } from '../utils/const'

const ButtonComponent = ({ bus, destinationPoint }) => {
	const navigate = useNavigate()
	return (
		<div className="button__component">
			<button className="wrapper__menu-btn" onClick={() => {
				navigate(BUS_ROUTE + '/' + bus.id)
				localStorage.setItem('endPoint', destinationPoint)
			}} href="#">{bus.number}</button>
		</div>
	)
}

export default ButtonComponent