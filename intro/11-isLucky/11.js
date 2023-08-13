function solution(n) {
    /*
    two-pointer technique
    */
    
    const nString = String(n);
    
    let left = 0;
    let right = nString.length - 1;
    
    let prefixSum = 0;
    let postfixSum = 0;
    while (left < right) {
        // sum
        prefixSum += Number(nString[left])
        postfixSum += Number(nString[right])
        
        // increment
        left++;
        right--;
    }
    
    return prefixSum === postfixSum;
}

