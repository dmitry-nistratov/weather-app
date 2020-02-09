import api from "../axios/axiosInstance";

export const getForecast = payload =>
  api.get(
    `/weather?q=${payload}&units=metric&appid=484f06f68452ba3fa459f101b4b177b9`
  );
