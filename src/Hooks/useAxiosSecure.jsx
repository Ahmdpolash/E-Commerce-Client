import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  axios.interceptors.request.use(
    function (config) {
      console.log("request stopped by interceptor");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
