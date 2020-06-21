import _axios from "axios";

const axios = (baseURL) => {
  const instance = _axios.create({
    baseURL:
      baseURL || process.env.REACT_APP_API_DOMAIN || "http://localhost:3001",
    timeout: 1000,
  });

  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      const token = global.auth.getToken();
      config.headers["Authorization"] = "Bearer " + token;
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return instance;
};

export { axios };
export default axios();
