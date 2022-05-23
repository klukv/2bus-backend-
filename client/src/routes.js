import Login from './pages/login'
import Reg from './pages/registration'
import MainWindow from './pages/mainWindow'
import { LOGIN_ROUTES, REGISTRATION_ROUTES, MAIN_WINDOW } from './utils/const'



export const authRoutes = [
	{
		path: MAIN_WINDOW,
		Component: MainWindow
	}

]

export const publicRoutes = [

	{
		path: REGISTRATION_ROUTES,
		Component: Reg
	},

	{
		path: LOGIN_ROUTES,
		Component: Login
	},
]