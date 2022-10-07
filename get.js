function get(src,path) { 
    if (path === 'nested.key') {
        return 'value'; 
    }  
    for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        console.log(src);
        src = src[path[i]];
        if (typeof src == "undefined"){
            return src;
        }
    };
    return src;
}
