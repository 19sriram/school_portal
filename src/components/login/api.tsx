import axios from "../common/axios";

// handles login

// export async function _loginHandler(userInfo: any) {
//   try {
//     const response = await axios.post("user/login", {
//       username: userInfo.username,
//       password: userInfo.password,
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// // }
// // verifyuserexists
// export async function _verifyUserExists(userInfo: any) {
//  console.log(userInfo);
//   try {
//     const response = await axios.post("user/sendcode",{
//       "email": userInfo
//     });
//    return response.data;
//   } catch (error) {
//     console.error(error);
//     return error;
//   }
// }

// //verify usercode
// export async function _verifyUserCode(email: any, userInfo: any) {
//   console.log(userInfo);
//    try {
//      const response = await axios.post("user/verifycode",{
//        "email": email,
//        "code": parseInt(userInfo)
//      });
//     return response.data;
//    } catch (error) {
//      console.error(error);
//      return error;
//    }
//  }

//  // handle new password
//  export async function _handleNewPassword(email: any, userPwd: any) {
//   console.log(userPwd);
//    try {
//      const response = await axios.post("user/updatepassword", {
//        "email": email,
//        "password": userPwd
//      });
//     return response.data;
//    } catch (error) {
//      console.error(error);
//      return error;
//    }
//  }