
function returnOddInstance(array) {
  var test = [];
  array = array.sort();
  for (var i = 0; i < array.length; i ++) {
    if (array[i] === array[i+1]) {
      array.splice(i, 1)
    } else {
    test.push(array[i]);
}
}
return test;
}

returnOddInstance([1,2,2,3,1,5,4,4,]);
