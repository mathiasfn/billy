import Vue from "vue";
import axios from "axios";
import config from "../../config/default.json";

const api = axios.create({
  baseURL: config.API_ENDPOINT,
  headers: {
    'X-Access-Token': config.BILLY_ACCESS_TOKEN
  }
});

// Add a response interceptor
api.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;

export { axios, api };
