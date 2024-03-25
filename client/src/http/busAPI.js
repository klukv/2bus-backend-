import { $authHost, $host } from './index'


export const createBus = async (bus) => {
	const { data } = await $host.post('api/bus', bus)
	return data
}

export const fetchBus = async () => {
	const { data } = await $authHost.get('api/bus')
	return data
}

export const fetchOneBus = async (id) => {
	const { data } = await $host.get('api/bus/' + id)
	return data
}

export const fetchBusNumber = async (number) => {
	const { data } = await $host.get('api/bus/findByNumber/' + number)
	return data
}

export const deleteBusNumber = async (number) => {
	const { data } = await $host.delete('api/bus/findByNumber/' + number)
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

export const fetchOneModel = async (id) => {
	const { data } = await $host.get('api/model/' + id)
	return data
}

export const fetchOneDriver = async (id) => {
	const { data } = await $host.get('api/driver/' + id)
	return data
}

