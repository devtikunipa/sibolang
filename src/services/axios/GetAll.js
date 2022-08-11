import Http from './Http';

const GetAll = (path) => {
    return new Promise((resolve, reject) => {
        Http.get(path).
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
// const Sikoja = async () => {
//     try {
//         const result = GetAll('sikoja');
//         return result;
//     } catch (e) {
//         return e;
//     }
// }
const APIGETALL = {
    Sibolangs,
    Villages,
    Categories,
}

export default APIGETALL