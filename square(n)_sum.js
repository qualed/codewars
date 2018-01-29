

var arr = [3,7,3,52,3,8];

function squareSum1(numbers){
	var result = 0;

	for(var i = 0; i < numbers.length; i++) {
		result += Math.pow(numbers[i], 2);
	}  

	return result;
}

console.time('squareSum1(arr)');


function squareSum2(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

console.time('squareSum2(arr)');
