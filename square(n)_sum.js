



function squareSum(numbers){
	var result = 0;

	for(var i = 0; i < numbers.length; i++) {
		result += Math.pow(numbers[i], 2);
	}  
	
	return result;
}


