import { $authHost, $host } from './index'


export const createBus = async (bus) => {
	const { data } = await $host.post('api/bus', bus)
	return data
}

export const fetchBus = async () => {
	const { data } = await $host.get('api/bus')
	return data
}

export const fetchOneBus = async (id) => {
	const { data } = await $host.get('api/mainWindow/' + id)
	return data
}
