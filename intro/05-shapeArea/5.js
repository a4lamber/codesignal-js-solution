function solution(n) {
    // 1 <= n <= 10^4
    
    // base case
    if (n === 1) {
        return 1;
    };
    
    // recursive case
    return solution(n - 1) + 4 * (n - 1);
    
}

