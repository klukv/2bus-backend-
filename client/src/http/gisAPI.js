import { $twoGis } from './index'

export const getInfoRoute = async () => {
	const { data } = await $twoGis.post('https://catalog.api.2gis.com/carrouting/6.0.0/global?key=4a1aa56e-17c3-4e83-9b10-2751b10108cd')
	return data
}