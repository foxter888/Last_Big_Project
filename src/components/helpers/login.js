import axios from "axios";

let url= process.env.REACT_APP_SERVER_BACKEND
export const login = user => {
    return axios
        .post(url + "/login", user )
        .then(res => {
            return res;
        })
        .catch(err => {
            return err.response;
        });
};