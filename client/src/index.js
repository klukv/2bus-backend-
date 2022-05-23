import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import userStore from './store/userStore';
import busRoutes from './store/busRoutes';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Context.Provider value={{
			user: new userStore(),
			bus: new busRoutes(),
		}}>
			<App />
		</Context.Provider>,
	</React.StrictMode>
);

