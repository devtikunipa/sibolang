import HTTPMAIN from './Http';

const GetAll = (path) => {
    return new Promise((resolve, reject) => {
        HTTPMAIN().get(path).
            then(result => {
                resolve(result.data);
            }).catch(error => {
                reject(error.response.data);
            })
    })
}

const Sibolangs = () => GetAll('sibolang');
const Villages = () => GetAll('village');
const Categories = () => GetAll('category');

const APIGETALL = {
    Sibolangs,
    Villages,
    Categories,
}

export default APIGETALL