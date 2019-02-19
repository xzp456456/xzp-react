import 'isomorphic-fetch'
import 'es6-promise'
import qs from 'qs'
export function getAjax(url, params) {
    return new Promise((resolve, reject) => {
        fetch(url + "?" + qs.stringify(params), {
            method: 'GET',
            headers: {
                'Accept': 'application/json,text/plain,*/*'
            }
        }
        ).then((res) => {
            resolve(res.data)
        }).catch(err => {
            reject(err);
        })
    })
}
export function postAjax(url, params) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify(params)
        }
        ).then((data) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        })
    })
}