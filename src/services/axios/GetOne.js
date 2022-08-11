import Http from './Http';

const GetOne = (path) => {
    return new Promise((resolve, reject) => {
        Http.get(path).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error.response.data);
            })
    })
}

const SibolangOne = (id) => GetOne('sibolang/' + id);
const DispOne = (id) => GetOne('sibolangdisp/' + id);

const APIGETONE = {
    SibolangOne,
    DispOne,
}


export default APIGETONE

