/* import axios from "axios";

// //axios.defaults.timeout = 5000;  http://192.168.5.141:8080/ process.env.API_ROOT

// 添加一个请求拦截器
axios.interceptors.request.use(config => { 

	if(window.localStorage.getItem('user')){
		let userData = JSON.parse(window.localStorage.getItem('user'));
		console.log(userData.token)
		config.headers['Authorization'] ="Bearer "+userData.token;
	}
	return config;
}, error => {
	return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use( response => {
	if(response.data.code == 401){//token过期
	}
	return response;
}, error => {
	alert(error);
	return Promise.reject(error);
});


 export default axios;*/