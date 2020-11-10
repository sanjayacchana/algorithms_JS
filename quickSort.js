function pivot(arr,start=0,end=arr.length+1){
    // swap logic goes here
    function swap(array,i,j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // picking up initally a[first] as pivot element
    var  pivot= arr[start];
    // pivot index
    var swapIdx = start;
    for(var i = start + 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            swapIdx++;
            swap(arr,i,swapIdx);
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx;
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left<right) {
        //get the pivot index
        var pivotIndex = pivot(arr,left,right);
        //left
        quickSort(arr,0,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

quickSort([4,6,9,1,2,5]);