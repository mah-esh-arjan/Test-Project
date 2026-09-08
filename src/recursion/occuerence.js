function occurence(str,char,i = 0 ) {

    if(str.length === 0 ){
        return i;
    }

    if(str[0] === char){
        i += 1;
    }
    
    return occurence(str.slice(1),char,i)


}