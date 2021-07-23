import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

//let url = "http://127.0.0.1:8000/api";
let url=process.env.REACT_APP_SERVER_BACKEND

const instance = axios.create({
    baseURL: url,
    responseType: "json",
    headers: { accept: "*/*", "Content-type": "application/json;charset=utf-8"}

});

instance.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem("token");
    if(token) 
    {
        config.headers["Authorization"] = `Bearer ${token}`;
        //config.headers['access-token'] = `${token}`
    }
    return config;
});

export default instance;