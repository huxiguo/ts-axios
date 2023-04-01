import myRequest from '..'
interface IHomeData {
	config?: Object
	data?: Object
	headers?: Object
	request?: Object
	status?: number
	statusText?: string
}
export const myMock = () => {
	myRequest
		.request<IHomeData>({
			url: '/api/aaa'
		})
		.then(res => {
			console.log('*********', res)
		})
}
