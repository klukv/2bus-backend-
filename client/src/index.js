import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/userStore';
import BusRoutes from './store/busRoutes';
import MapProvider from './pages/OneBus'

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Context.Provider value={{
		user: new UserStore(),
		bus: new BusRoutes(),
	}}>
		<App />

	</Context.Provider>,
);

