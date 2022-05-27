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
	const { data } = await $host.get('api/bus/' + id)
	return data
}

export const createModel = async (model) => {
	const { data } = await $host.post('api/model', model)
	return data
}

export const fetchModel = async () => {
	const { data } = await $host.get('api/model')
	return data
}

