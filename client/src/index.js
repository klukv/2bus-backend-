import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import BusRoutes from './store/BusRoutes';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context.Provider value={{
			user: new UserStore(),
			bus: new BusRoutes(),
		}}>
			<App />
		</Context.Provider>,
	</React.StrictMode>
);

