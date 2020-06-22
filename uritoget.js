function uritoget(url){
    var get=[];
    var matches = url.match(/.*\?(.*)/);
    if(matches!==null ? matches[1] != "" : false){
     var querys = matches[1].split("&");
     querys.forEach(function(query){
       var param = query.split("=");
       if(param[0]!="")
       get[decodeURIComponent(param[0])] = (param[1]!=undefined ? decodeURIComponent(param[1]) : "");
     });
    }
    return get;
}
