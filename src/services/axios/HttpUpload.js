import axios from "axios";
import { URLROOT } from "..";

const HttpUpload = axios.create({
    withCredentials: true,
    baseURL: `${URLROOT}api/`,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '.mkwlapor.com',
        'Cache-Control': 'no-cache',
        'Fragma': 'no-cache',
        'Expires': '0'
    }
})

export default HttpUpload
