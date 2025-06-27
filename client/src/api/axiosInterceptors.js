import axiosInstance from "./axiosInstance.js"
import store from '../store/store.js'
import { logout, reset, setUser } from "../features/user/userSlice.js"
import axios from "axios"

axiosInstance.interceptors.request.use((config) => {
    if(!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${store.getState().user.accessToken}`;
    }
    return config

}, (error) => {
    return Promise.reject(error)
}
)

axiosInstance.interceptors.response.use((response) => {
    return response
}, async (error) => {
    // access token may have expired or is missing(eg. on page reload), use refresh token to generate new token 403 code
    console.log('message',error.response);
    if(error.response && error.response.status===403) {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:3000/refresh',
                withCredentials: true,
            });
            
            const {accessToken} = response.data;
            console.log('access token',accessToken)
            const originalRequest = error.config;
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            const prevState = store.getState().user;
            store.dispatch(setUser({...prevState,accessToken}));
            return axiosInstance(originalRequest);
        } catch (err) {
            // refresh token must have expired
            console.log('refresh err',err);
            store.dispatch(logout());
            return Promise.reject(err.message);
        }
    }
    return Promise.reject(error);
}
)

export default axiosInstance