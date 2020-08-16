import axios from 'axios';
import * as config from './../constants/config';

export default function callApi(endpoint, method = 'GET', data) {
    return axios({
        method: method,
        url: `${config.apiURL}${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err);
    });
}

