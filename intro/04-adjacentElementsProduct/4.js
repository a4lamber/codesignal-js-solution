function solution(inputArray) {
    // boxing game
    
    
    // initialize output
    let res = -Infinity;
    
    
    // iterate array.length - 1
    for (let i = 0; i < inputArray.length - 1; i++) {
        res = Math.max(res, inputArray[i] * inputArray[i+1]);
    }
    
    return res
    
}

