let Util={
    getJson:(url)=>{
        var  xmlReq;
        return new Promise(function(resolve,reject){
            xmlReq = new XMLHttpRequest();
            try{
                xmlReq.open("GET",url,true);
                xmlReq.onreadystatechange = function(){
                    if (this.readyState == 4){
                        if(this.status==200){
                            resolve(xmlReq.responseText);
                        }
                    }
                }
                xmlReq.responseType='';
                xmlReq.setRequestHeader('accept','application/json');
                xmlReq.send();
            }catch(e){
                reject(e);
            }
        })
    }
}
export default Util;