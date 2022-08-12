import axios from "axios";
import { URLROOT } from "..";

const HttpUpload = axios.create({
    withCredentials: true,
    baseURL: `${URLROOT}api/`,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export default HttpUpload
