import axios, { AxiosResponse } from "axios";
const instance = axios.create({
  baseURL: "http://192.168.1.5:8091/api/v1",
  timeout: 1000,
  validateStatus: function (status) {
    // 상태 코드가 500 이상일 경우 거부. 나머지는 허용
    return status <= 500;
  },
});
export default {
  POST: (url: string, data: any): Promise<AxiosResponse<any>> => {
    return instance.post(url, data);
  },
  GET: (url: string, value: any): Promise<AxiosResponse<any>> => {
    return instance.get(
      url +
        `?${Object.entries(value)
          .map((v) => `${v[0]}=${v[1]}`)
          .join("&")}`
    );
  },
};
