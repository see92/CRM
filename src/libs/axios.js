import Vue from "vue";

// axios
import axios from "axios";

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: "http://192.168.1.163:8878",
  // baseURL: 'https://some-domain.com/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

Vue.prototype.$http = axiosIns;

export default axiosIns;
