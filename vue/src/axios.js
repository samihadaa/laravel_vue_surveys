import axios from 'axios';
import store from './store';

//Add route api prefix as a base url to axios
const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
  });

  //add token to header Authorization foreach axios request
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    return config;
  });
  export default axiosClient;