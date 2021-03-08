
module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

   let new_arr = [matrix[0]];
    for(let i=1; i<matrix.length; i++) {
        if (i % 2 === 0) {
          new_arr.push(matrix[i])
        }
        else {
          matrix[i] = matrix[i].reverse();
          new_arr.push(matrix[i]);
        }
    }
  let k = new_arr[0];
  for(let m = 1; m < new_arr.length; m++) {
    k = k.concat(new_arr[m]);
  }
return k;
}
