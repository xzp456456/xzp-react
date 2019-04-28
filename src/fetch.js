import 'isomorphic-fetch'
import 'es6-promise'
import qs from 'qs'

var GetDomainName = function () {//获取域名后缀
    var url = window.location.host;
    url = url.substring(url.lastIndexOf('.'));
    if (url == '.cn') {
        url = '.com'
    }
    return url;
};

 if(GetDomainName()=='.net'){
     var fetchURL = 'http://tyweb.yxsoft.net/';
 }else{
     var fetchURL = 'http://39.100.52.231/';
 }

//var fetchURL = 'http://39.100.52.231/';



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