import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const reg = async (name, email, password) => {
	const { data } = await $host.post('api/user/reg', { name, email, password })
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export const login = async (email, password) => {
	const { data } = await $host.post('api/user/login', { email, password })
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export const check = async () => {
	const { data } = await $authHost.get('api/user/auth')
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export const getName = async (email) => {
	const { data } = await $host.get('api/user/login/' + email)
	return data
}