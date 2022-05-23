import React from 'react'
import '../scss/modalComponent.scss'

const ModalComponent = ({ active, setActive }) => {


	return (
		<div className={active ? 'wrapper__modal active' : 'wrapper__modal'} onClick={() => { setActive(!active) }}>
			<div className='wrapper__modal-content' onClick={e => e.stopPropagation()}>

			</div>
		</div>
	)
}

export default ModalComponent