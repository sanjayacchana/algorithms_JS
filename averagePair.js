function averagePair(arr,value){
    let start = 0;
    let end = arr.length-1;
    while(start<end){
        let avg = (arr[start]+arr[end]) / 2;
        if(avg === value){
            return true;
        }else if(value > avg){
            start++;
        }else{
            end--;
        }
    }
    return false;
}