import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes'



const AppRouter = () => {
	const { user } = useContext(Context)
	const { route } = useContext(Context)
	return (

		<Routes>
			{authRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}

			{publicRoutes.map(({ path, Component }) =>
				<Route key={path} path={path} element={<Component />} />
			)}
		</Routes>
	)
}
export default AppRouter;