import axios from "axios";
import { URLROOT } from "..";

const Http = axios.create({
    withCredentials: true,
    baseURL: `${URLROOT}api/`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '.mkwlapor.com',
        'Cache-Control': 'no-cache',
        'Fragma': 'no-cache',
        'Expires': '0'
    }
})

export default Http
