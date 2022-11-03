// login denis.m.pcspace@gmail.com
// password dmgame12345

import axios from '../plugins/axios';

export async function getNews() {
    try {
        const response = await axios.get('/news');

        console.log(response);
        return response;
    } catch(err) {
        console.log(err);
        return Promise.reject(err);
    }
}