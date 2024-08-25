class Http{
    constructor(uri){
        this.uri =uri;
        this.xhr =new XMLHttpRequest();
    }
    static serialize(obj){
        let qs=[];
        for(let prop in obj){
            qs = [...qs, `${encodeURIComponent(prop)}=${encodeURIComponent(obj[prop])}`];
        }
        return qs.join('&')
    }
    get(qs){
        return new Promise((resolve,reject)=>{
            this.xhr.open('GET',`${this.url}/?${Http.serialize(qs)}`,true);
            this.xhr.addEventListener('load',function(){
                resolve({status:this.statusText, response:this.response})
            });
            this.xhr.addEventListener('error',(error)=> reject(error));
            this.xhr.send();
        })
    }
}