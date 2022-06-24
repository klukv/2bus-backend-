import React, { useContext, useEffect } from 'react'
import { Directions } from '@2gis/mapgl-directions'
import { load } from '@2gis/mapgl';
import MapWrapper from './MapWrapper';
import { MapContext } from './MapProvider';


const MapGL = () => {
	const [_, setMapInstance] = useContext(MapContext);
	const nameEndPoint = localStorage.getItem('endPoint')
	const coordinates = {
		'Студенческий городок ВПИ': [[39.184342, 51.755741], [39.183830, 51.685125]],
		'Гостиница Брно': [[39.184342, 51.755741], [39.198377, 51.662993]],
		'Политехнический институт': [[39.184342, 51.755741], [39.183830, 51.685125]],
		'Строительный институт': [[39.184342, 51.755741], [39.191472, 51.651895]]
	}
	const finalStop = Object.entries(coordinates).find(element => element[0] === nameEndPoint)[1]
	useEffect(() => {
		let map;
		load().then((mapglAPI) => {
			map = new mapglAPI.Map('map-container', {
				center: [39.1843, 51.672],
				zoom: 13,
				animate: true,
				key: '4a1aa56e-17c3-4e83-9b10-2751b10108cd',
			});
			const directions = new Directions(map, {
				directionsApiKey: '4a1aa56e-17c3-4e83-9b10-2751b10108cd',
			});
			directions.carRoute({
				points: [
					finalStop[0],
					finalStop[1]
				],
				style: {
					routeLineWidth: [
						'interpolate',
						['linear'],
						['zoom'],
						10,
						20, // Ширина основной линии будет меняться от 30 пикселей на масштабе 10 и ниже...
						14,
						6, // ...до 3 пикселей на масштабе 14 и выше
					],
					substrateLineWidth: [
						'interpolate',
						['linear'],
						['zoom'],
						10,
						3, // Ширина линии подложки будет меняться от 3 пикселей на масштабе 10 и ниже...
						14,
						20, // ...до 50 пикселей на масштабе 14 и выше
					],
					haloLineWidth: 10,
				}
			})
		});


		setMapInstance(map);

		// Destroy the map, if Map component is going to be unmounted
		return () => map.destroy();
	}, []);

	return (
		<div style={{ width: '100%', height: '100%' }}>
			<MapWrapper />
		</div>
	);
};

export default MapGL