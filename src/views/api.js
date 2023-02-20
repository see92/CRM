import axios from "@axios";

// 获取手机验证码
export const codeMsg = (params) => {
  return axios.request({
    url: "api/account/get_sms_code",
    params,
    method: "get",
  });
};

// 获取token信息
export const tokenMsg = (params) => {
  return axios.request({
    url: "api/account/get_token",
    params,
    method: "get",
  });
};
