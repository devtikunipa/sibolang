import axios from "axios";
import { URLROOT } from "..";

const Http = axios.create({
    withCredentials: true,
    baseURL: `${URLROOT}api/`,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default Http
