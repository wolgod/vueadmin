import axios from 'axios';
import routes from "../routes";

let base = 'http://127.0.0.1:8080';

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
	if(response.data.code == 20103){//token过期
        console.log(response.data.code)
        window.localStorage.removeItem('user');
		location.reload();
		/*routes.replace({
			path: '/login'
		});*/
	}
	return response;
}, error => {
	alert(error);
	return Promise.reject(error);
});
export const requestLogin = params => {  
	return axios.post(`${base}/login`, params).then(res => res.data); 
};

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { 
	return axios.get(`${base}/v1/user`, { params: params }).then(res => res.data); 
};
export const removeUser = params => { return axios.delete(`${base}/v1/user/`+params.id).then(res => res.data); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.put(`${base}/v1/user/`+params.id, params).then(res => res.data); };

export const addUser = params => { return axios.post(`${base}/v1/user`, params); };