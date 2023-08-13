function solution(matrix) {
    /*
    1. iterate through the matrix row by tow
    2. for each element in a row, check if its' not equal to 0 and if there are no free zooms (zeros) above the same column
    3. if the conditions are met, add the element's value to total sum
    */
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    /*
    iterate through the each column then row
    */
    let res = 0;
    
    for (let col = 0; col < cols; col++) {
        let ghost_found = false;
        // 
        for (let row = 0; row < rows; row++) {
            // check if we found the ghost
            if (matrix[row][col] === 0) {
                // 找到幽灵了，离开这一列
                ghost_found = true;
                break;   
            }
            
            res += matrix[row][col];
        }
    }
    return res;    
}

