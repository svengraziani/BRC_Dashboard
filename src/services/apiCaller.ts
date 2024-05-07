import axios from "axios";

export const apiCaller = axios.create({
  baseURL: `https://api.cloud-devel.brc-solar.dev`,
  responseType: "json",
});
