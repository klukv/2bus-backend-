import Login from './pages/login'
import Reg from './pages/registration'
import MainWindow from './pages/mainWindow'
import { LOGIN_ROUTES, REGISTRATION_ROUTES, MAIN_WINDOW, BUS_ROUTE, CREATE_BUS } from './utils/const'
import OneBus from './pages/OneBus'
import CreateBus from './modals/CreateBus'



export const authRoutes = [
	{
		path: MAIN_WINDOW,
		Component: MainWindow
	},

	{
		path: BUS_ROUTE + '/:id',
		Component: OneBus
	},

	{
		path: CREATE_BUS,
		Component: CreateBus
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
	}

]