import { myRequest2 } from '..'

export const entireMock = () => {
	myRequest2
		.request({
			url: '/api/aaa'
		})
		.then(res => {
			console.log('--------', res)
		})
}
interface IHomeData {
	config?: Object
	data?: Object
	headers?: Object
	request?: Object
	status?: number
	statusText?: string
}
export const entireMock2 = () => {
	myRequest2
		.request<IHomeData>({
			url: '/api/aaa',
			interceptors: {
				requestSuccessFn(config) {
					console.log('en2 请求成功拦截')
					return config
				},
				responseSuccessFn(res) {
					console.log('en2 响应成功拦截')
					return res
				}
			}
		})
		.then(res => {
			console.log('++++++++++++', res)
		})
}
