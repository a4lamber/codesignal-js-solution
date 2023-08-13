function solution(sequence) {
    /*
    if remove 0 or 1 element from the array, would it be strictly increasing?
    => if removig 0 elements is an subset of removing 1 elements
    
    1. edge case
    2. initialize an removed variable to keep track of the number of elements need to be removed
    */
    
    //edge case
    if (sequence.length === 1) {
        return true;
    }
    
    let removed = 0;
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            removed ++;
        }
        // required >= 1 elements to be removed
        if (removed > 1) return false
                
        
        if (sequence[i]<=sequence[i-2] && sequence[i+1]<=sequence[i-1]){    
            return false;
        }
    }
    
    return true;
}

