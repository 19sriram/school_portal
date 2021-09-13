import axios from "../common/axios";



export async function _loginHandler(userInfo: any) {
  try {
    const response = await axios.post("user/login", {
      username: userInfo.username,
      password: userInfo.password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
 }