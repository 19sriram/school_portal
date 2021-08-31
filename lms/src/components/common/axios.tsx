import axios from "axios";
// const BASE_URL = 'https://ec2-18-142-44-179.ap-southeast-1.compute.amazonaws.com:3000/api'
const BASE_URL = 'http://18.140.59.213:3000/api/'
/**
 * Base url for application
 */
export default axios.create({
  baseURL: BASE_URL
});