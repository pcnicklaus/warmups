function palindrome(string) {
    var array = string.split(' ');
    var answer = []
    for (var i = 0; i < array.length; i++) {
        var arrayHolder = array[i].split('').reverse().join('');
        if (array[i] === arrayHolder) {
            answer.push(array[i]);
        }
    }
  return findLongest(answer, string)
}

function findLongest(answer, string) {
    var counter = 0;
    var final = '';
    for (var i = 0; i < answer.length; i ++) {
        var test = answer[i]
        if (test.length > counter){
            counter = test.length;
            final = test;
        }
    }
    console.log(final)
    return whiteSpace(final, string);
    // return final
}

function whiteSpace(final, string) {
    var arrayString = string.split(' ')
    for (var i = 0; i < string.length; i ++) {
        if (arrayString[i] === final) {
            var b = arrayString.indexOf(arrayString[i])
            console.log(b);

        }
    }
}

palindrome('I am a dazzled racecar driver')
