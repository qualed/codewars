

function alphabetPosition(text) {
  	var arr = text.toLowerCase().split('');
  	var arrRes = [];

  	console.log(arr);
  	for(var i = 0; i < arr.length; i++) {

  		var number = (arr[i].charCodeAt(0));
  		if(number >= 97 && number <= 122) {
  			arrRes.push(number - 96);
  		}
  		
  	}
  	
  	var str = arrRes.join(' ');
  	return str;
}



