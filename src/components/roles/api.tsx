import axios from "../common/axios";

const headers =  {
  'token':localStorage.getItem('accessToken')
}

// get all users
export async function _getRoles() {
    try {
      const response = await axios.get("user/viewrole",{
          headers: {
            'token':localStorage.getItem('accessToken')
          }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

    // handle role addition

    export async function _handleRoleAddition(userInfo: any) {
        try {
          const response = await axios.post("user/addrole", userInfo, {
          headers: {
            token: localStorage.getItem('accessToken')
          }
          });
          return response.data;
        } catch (error) {
          console.error(error);
          return error;
        }
      }
    