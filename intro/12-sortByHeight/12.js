function solution(a) {
    /*
    1. construct a people array with sorted people's height in ascending order
    2. construct a function that does it.
    - O(n) in space due to auxillary array needed
    - O(n) in time due to one-pass solution
    */
    
    const peopleHeights = a.filter(num => num !== -1);
    peopleHeights.sort((a,b) => a - b);
    
    let heightIndex = 0;
    
    for (let i = 0; i < a.length; i++) {
        // 不是树则re-assign排序后的人的身高
        if (a[i] !== -1) {
            a[i] = peopleHeights[heightIndex]
            heightIndex ++;
        }
    }
    
    return a;
}

