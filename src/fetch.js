import 'isomorphic-fetch'
import 'es6-promise'
import qs from 'qs'
export function Http_get(url,params){
    return fetch(url+"?"+qs.stringify(params), {
        method: 'GET',
        headers: {
            'Accept': 'application/json,text/plain,*/*'
        }
    }
    ).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
    })
}
export function Http_post(url, params) {
   return fetch(url,{
            method: 'POST',
            headers:{
                'Accept':'application/json,text/plain,*/*',
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body: qs.stringify(params)
        }
        ).then((res) => {
            
          return res.json()
        }).then((data)=>{
            console.log(data);
        })
}