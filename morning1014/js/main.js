// add scripts

$(document).on('ready', function () {
    console.log('sanity check!');
});

function something(array) {
    for (var i = 0; i < array.length; i++) {
        var counter = 1;
        if (array[i] !== counter) {
            return array[i]
        } else {
            counter++;
        }
    }
};

something([1, 2, 3, 5, 6, 7, 8, 9])