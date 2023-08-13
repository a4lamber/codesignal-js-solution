function solution(inputArray) {
    /*
    two-pass solution
    */
    
    // 1st pass: find longest string
    let maxStrLength = 0;
    for (ele of inputArray) {
        if (ele.length > maxStrLength) maxStrLength = ele.length;
    }
    //2nd pass: output
    let res = [];
    
    for (ele of inputArray) {
        if (ele.length === maxStrLength) {
            res.push(ele);
        }
    }
    
    return res;
}

