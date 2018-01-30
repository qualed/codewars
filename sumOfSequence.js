		
const sequenceSum = (begin, end, step) => {
  var res = 0;

  for(var i = begin; i <= end; i += step) {
    res += i;
  }

  return res;
};




