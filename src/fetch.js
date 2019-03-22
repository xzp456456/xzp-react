import 'isomorphic-fetch'
import 'es6-promise'
import qs from 'qs'
const fetchURL = 'http://tyweb.yxsoft.net/'

export function getAjax(url, params) {
    return new Promise((resolve, reject) => {
        fetch(fetchURL+url + "?" + qs.stringify(params), {
            method: 'GET',
            headers: {
                'Accept': 'application/json,text/plain,*/*'
            }
        }
        ).then((res) => {
            resolve(res.json())
        }).catch(err => {
            reject(err);
        })
    })
}
export function postAjax(url, params) {
    return new Promise((resolve, reject) => {
        fetch(fetchURL+url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify(params)
        }
        ).then((res) => {
            resolve(res.json())
        }).catch((err) => {
            reject(err);
        })
    })
}