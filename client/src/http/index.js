import axios from 'axios'

// const $twoGis = axios.create({
// 	headers: { 'Content-Type': 'application/json' },
// 	data: {
// 		"points": [
// 			{
// 				"type": "walking",
// 				"x": 82.93057,
// 				"y": 54.943207
// 			},
// 			{
// 				"type": "walking",
// 				"x": 82.945039,
// 				"y": 55.033879
// 			}
// 		]
// 	}
// })

const $host = axios.create({
	baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
	baseURL: process.env.REACT_APP_API_URL
})
const authInterceptor = config => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
	$host,
	$authHost,
	// $twoGis
}