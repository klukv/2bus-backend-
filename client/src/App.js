
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import AppRouter from './components/AppRouter'
import { check } from './http/userAPI';

const App = () => {
	const { user } = useContext(Context)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		check().then(data => {
			user.setUser(true)
			user.setIsAuth(true)
		}).finally(() => setLoading(false))
	}, [])

	if (loading) {
		return (
			<div class="loader"></div>
		)
	}
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
