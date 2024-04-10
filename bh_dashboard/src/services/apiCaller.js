import axios from "axios";

console.log(process.env);

export const apiCaller = axios.create({
  baseURL: `${process.env.REACT_APP_DEV_API_AUTH}`,
  responseType: "json",
});
