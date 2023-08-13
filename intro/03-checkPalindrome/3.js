function solution(inputString) {
    // it's two pointer technique
    
    // edge case where length is 1
    if (inputString.length === 1) {
        return true;
    }
    
    // starting indexes for left and right pointer
    let left = 0;
    let right = inputString.length - 1;
    
    // while loop
    while (left <= right) {
        // check equlaity, not a palindrome
        if (inputString[left] !== inputString[right]) {
            return false;
        }
        
        // increment & decrement the pointer
        left++;
        right--;
    }
    
    return true;
}

