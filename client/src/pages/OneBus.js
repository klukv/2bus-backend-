import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import '../scss/bus.scss'
import { useParams } from 'react-router-dom'
import { fetchBus, fetchOneBus, fetchOneDriver, fetchOneModel } from '../http/busAPI'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { load } from '@2gis/mapgl';
import { getInfoRoute } from '../http/gisAPI'
import { Directions } from '@2gis/mapgl-directions'

const OneBus = observer(() => {
	const [bus, setBus] = useState({})
	const [model, setModel] = useState({})
	const [driver, setDriver] = useState({})
	const { id } = useParams()

	const MapContext = createContext([undefined, () => { }]);

	const MapProvider = (props) => {
		const [mapInstance, setMapInstance] = useState();

		return (
			<MapContext.Provider value={[mapInstance, setMapInstance]}>
				{props.children}
			</MapContext.Provider>
		);
	};

	const MapWrapper = React.memo(
		() => {
			return <div id="map-container" style={{ width: '100%', height: '100%' }}></div>;
		},
		() => true,
	);
	const MapGL = () => {
		const [_, setMapInstance] = useContext(MapContext);

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
						[39.184342, 51.755741],
						[39.183830, 51.685125]
					],
					style: {
						routeLineWidth: [
							'interpolate',
							['linear'],
							['zoom'],
							10,
							20, // Ширина основной линии будет меняться от 30 пикселей на масштабе 10 и ниже...
							14,
							3, // ...до 3 пикселей на масштабе 14 и выше
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
	const MoveMapButton = () => {
		const [mapInstance] = useContext(MapContext);

		const setInitialCenter = useCallback(() => {
			if (mapInstance) {
				mapInstance.setCenter([39.1843, 51.672]);
			}
		}, [mapInstance]);

		return (
			<button style={{ padding: '4px 10px' }} onClick={setInitialCenter}>
				Set initial center
			</button>
		);
	};

	useEffect(() => {
		const fetchInfo = async () => {
			const data = await fetchOneBus(id)
			setBus(data)
			const model = await fetchOneModel(data.modelId)
			setModel(model)
			const driver = await fetchOneDriver(data.driverId)
			setDriver(driver)
		}
		fetchInfo()
	}, [])

	return (
		<section className="bus">
			<div className="bus__inner">
				<div className="bus__information">
					<div className="bus__title">Автобус</div>
					<table className="bus__table">
						<thead className="bus__thead">
							<tr>
								<td>Номер</td>
								<td>Маршрут</td>
								<td>Рейтинг</td>
							</tr>
						</thead>
						<tbody className="bus__tbody">
							<tr>
								<td>{bus.number}</td>
								<td>{bus.route}</td>
								<td>{bus.rating}</td>
							</tr>
						</tbody>
					</table>
					<div className="bus__title">Характеристики автобуса</div>
					<table className="bus__table">
						<thead className="bus__thead">
							<tr>
								<td>Модель</td>
								<td>Год</td>
							</tr>
						</thead>
						<tbody className="bus__tbody">

							<tr>
								<td >{model.model}</td>
								<td>{model.year}</td>
							</tr>
						</tbody>
					</table>
					<div className="bus__title">Водитель</div>
					<table className="bus__table">
						<thead className="bus__thead">
							<tr>
								<td>Имя</td>
								<td>Фамилия</td>
								<td>Телефон</td>
							</tr>
						</thead>
						<tbody className="bus__tbody">
							<tr>
								<td>{driver.name}</td>
								<td>{driver.firstname}</td>
								<td>{driver.phone}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<MapProvider>
					<div className="bus__map">
						<div style={{ width: '100%', height: '100%' }}>
							<MapGL />
						</div>
					</div>
				</MapProvider>
			</div>
		</section>
	)
})

export default OneBus;

