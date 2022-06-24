import React, { createContext, useState } from 'react'

const MapContext = createContext([undefined, () => { }]);

const MapProvider = (props) => {
	const [mapInstance, setMapInstance] = useState();

	return (
		<MapContext.Provider value={[mapInstance, setMapInstance]}>
			{props.children}
		</MapContext.Provider>
	);
};

export {
	MapContext,
	MapProvider
}


