// function largest (integar) {
//   var x = integar.toString();
//   var y = x.split('');
//   console.log(y + 'y')
//   for (var i = 0; i < integar.length; i ++) {
//     var z = y.pop()
//     var a = y.unshift(z);
//     console.log(a + 'a')
//   }
// }

// console.log(largest(1345) + ' final');

function largest (integar) {

  var keywords1 = [1,2,3,4];
  var keywords2 = [1,2,3,4];
  var keywords3 = [1,2,3,4];
  var keywords4 = [1,2,3,4];
  var combs = [];
  var count = 0;

  var z1 = keywords1.length;
  var z2 = keywords2.length;
  var z3 = keywords3.length;
  var z4 = keywords4.length;

  for (var h = 0; h<z4; h++) {
    for (var i = 0; i<z3; i++) {
      for (var j = 0; j<z2; j++) {
        for (var k = 0; k<z1; k++) {
          combs[count] = keywords1[k] + " " + keywords2[j] + " " + keywords3[i] + " " + keywords4[h];
          count++;
        }
      }
    }
  }

  var ordered = combs.sort(function(a, b){return a-b});

  for (var i = 0; i < ordered.length; i++) {
    if (combs[i] == integar) {
      return combs[i + 1];
    }
  }

}

console.log(largest(1234));
