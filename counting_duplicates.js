

<script>

function duplicateCount(text) {
  var arr = text.toLowerCase().split("");
  var count = [];
  var obj = {};

  for(var i = 0; i < arr.length; i++) {
    var current = arr[i];
    for(var j = i + 1; j < arr.length; j++) {
      if(current == arr[j]) { 
        count.push(current);
      }
    }
  }

  for(var k = 0; k < count.length; k++) {
    obj[count[k]] = true;
  }

  return Object.keys(obj).length;

}

</script>

