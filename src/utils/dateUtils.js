
function formatDayTime(times){
    if(!!!times){
        return ''
    }
    const date = new Date(times);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const second = date.getSeconds();
    return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+second; 
}


function formatDay(times){
    if(!!!times){
        return ''
    }
    const date = new Date(times);
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    return year+'-'+month+'-'+day; 
}



export {
    formatDayTime,
    formatDay,
}