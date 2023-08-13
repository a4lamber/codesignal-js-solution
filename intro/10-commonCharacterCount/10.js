function solution(s1, s2) {
    /*
    1. loop throug s1 and create a hash
    s1 = "aabcc" then
    hash = {
        a: 2,
        b: 1,
        c: 2
    }
    2. loop through s2, if each chat in hash, then minus operation
    Then we check if the value >= 0, don't increment counter
    */
    
    let hash = {}
    for (let c of s1) {
        // not found === true 
        if (!(hash[c])) {
            hash[c] = 1; 
            continue;
        } 
        
        hash[c] += 1;
    }
    
    let counter = 0;
    for (let c of s2) {
        // not found
        if (!(hash[c])) {
            continue;        
        }
        // minus one
        hash[c] -= 1;
        
        // only increment when still enough
        if (hash[c] >= 0) counter += 1;
    }
    
    return counter;
}

