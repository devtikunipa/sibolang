import axios from "axios";
import { URLROOT } from "..";


const HTTPMAIN = () => {
    const http = axios.create({
        withCredentials: true,
        baseURL: `${URLROOT}api/`,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '.mkwlapor.com',
            'Cache-Control': 'no-cache',
            'Fragma': 'no-cache',
            'Expires': '0'
        }
    });

    http.interceptors.response.use(response => response, error => {
        if (error.response.status === 429) {
            window.location.replace('/overload');
        }
        return Promise.reject(error)
    })

    return http;
}

export default HTTPMAIN
