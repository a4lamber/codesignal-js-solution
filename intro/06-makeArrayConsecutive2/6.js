function solution(statues) {
    /*
    Note: it may contains duplicate.
    brute force:
    1. sort the array, O(nlogn) quick or merge
    2. iterate through the array and compare gap O(n)
     
    */ 
    
    // sort the array
    statues.sort((a,b) => a - b);
    
    let res = 0;
    
    for (let left = 0; left < statues.length - 1; left++) {
        // gap
        let gap = statues[left + 1] - statues[left];
        
        // gap > 1
        if (gap !== 1) {
            res += gap + 1; 
        }
        
    }
    
    return res;
}

